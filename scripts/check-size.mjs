// scripts/check-size.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';

// --- КОНФИГУРАЦИЯ ---
// Лимит размера для каждой страницы (в КБ). 
// По заданию он должен быть константой наверху.
const LIMIT_KB = 250;
const OUT_DIR = 'out';

async function findHtmlFiles(dir) {
    let entries;
    try {
        entries = await fs.readdir(dir, { withFileTypes: true });
    } catch (err) {
        return [];
    }

    const files = await Promise.all(entries.map(async (entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            return findHtmlFiles(fullPath);
        } else if (entry.isFile() && entry.name === 'index.html') {
            return fullPath;
        }
        return null;
    }));

    return files.flat().filter(Boolean);
}

async function getGzipSize(filePath) {
    try {
        const buffer = await fs.readFile(filePath);
        // Используем zlib.gzipSync как указано в требованиях
        const gzipped = zlib.gzipSync(buffer);
        return gzipped.length;
    } catch (err) {
        // Если файл не читается (например, это внешний URL), просто возвращаем 0
        return 0;
    }
}

async function main() {
    const htmlFiles = await findHtmlFiles(OUT_DIR);

    if (htmlFiles.length === 0) {
        console.error(`❌ No index.html files found in ${OUT_DIR}/. Did you run 'npm run build' first?`);
        process.exit(1);
    }

    const results = [];
    let hasFailed = false;

    for (const htmlFile of htmlFiles) {
        const html = await fs.readFile(htmlFile, 'utf8');

        // Надежный regex для поиска <script src="..."> и <script src='...'>
        const regex = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/g;
        const scriptPaths = new Set();
        let match;

        while ((match = regex.exec(html)) !== null) {
            const src = match[1];
            // Нас интересуют только внутренние скрипты Next.js
            if (src.includes('/_next/')) {
                // Убираем начальный слэш, query-параметры (?v=123) и хэши (#app)
                const cleanSrc = (src.startsWith('/') ? src.substring(1) : src).split('?')[0].split('#')[0];
                const localPath = path.join(OUT_DIR, cleanSrc);
                scriptPaths.add(localPath);
            }
        }

        let totalSize = 0;
        for (const scriptPath of scriptPaths) {
            totalSize += await getGzipSize(scriptPath);
        }

        // Переводим байты в килобайты и округляем до сотых
        const sizeKB = Math.round((totalSize / 1024) * 100) / 100;

        // Вычисляем путь страницы (например, /, /ru/, /projects/)
        const relDir = path.relative(OUT_DIR, path.dirname(htmlFile));
        let route = relDir === '' ? '/' : '/' + relDir.replace(/\\/g, '/') + '/';

        const isOverLimit = sizeKB > LIMIT_KB;
        if (isOverLimit) {
            hasFailed = true;
        }

        results.push({ route, sizeKB, isOverLimit });
    }

    // Сортируем по алфавиту для красивого вывода
    results.sort((a, b) => a.route.localeCompare(b.route));

    // Печатаем таблицу
    console.log('Page           | KB gzip (Limit: ' + LIMIT_KB + ' KB)');
    console.log('-------------- | ---------------------------');
    for (const res of results) {
        const icon = res.isOverLimit ? '❌' : '✅';
        const paddedRoute = res.route.padEnd(14);
        console.log(`${paddedRoute} | ${res.sizeKB} KB ${icon}`);
    }

    if (hasFailed) {
        console.error(`\n❌ Error: One or more pages exceed the limit of ${LIMIT_KB} KB gzip.`);
        process.exit(1); // Выход с кодом 1 ломает CI
    } else {
        console.log(`\n✅ Success: All pages are under the limit of ${LIMIT_KB} KB gzip.`);
    }
}

main().catch((err) => {
    console.error('An unexpected error occurred:', err);
    process.exit(1);
});
