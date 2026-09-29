// scripts/check-size.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';

// --- CONFIG ---
// Per-page gzip budget in KB. Single constant, as required by issue #6.
const LIMIT_KB = 250;
const OUT_DIR = 'out';

async function findHtmlFiles(dir) {
    let entries;
    try {
        entries = await fs.readdir(dir, { withFileTypes: true });
    } catch {
        return [];
    }

    const nested = await Promise.all(
        entries.map((entry) => {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) return findHtmlFiles(fullPath);
            if (entry.isFile() && entry.name === 'index.html') return fullPath;
            return null;
        }),
    );
    return nested.flat().filter(Boolean);
}

// No try/catch here: a missing file must throw, never silently count as 0 KB.
async function getGzipSize(filePath) {
    const buffer = await fs.readFile(filePath);
    return zlib.gzipSync(buffer).length;
}

async function main() {
    const htmlFiles = await findHtmlFiles(OUT_DIR);

    if (htmlFiles.length === 0) {
        console.error(`❌ No index.html files found in ${OUT_DIR}/. Did you run 'npm run build' first?`);
        process.exit(1);
    }

    const results = [];
    const missing = [];
    let hasFailed = false;

    for (const htmlFile of htmlFiles) {
        const html = await fs.readFile(htmlFile, 'utf8');

        const relDir = path.relative(OUT_DIR, path.dirname(htmlFile));
        const route = relDir === '' ? '/' : '/' + relDir.split(path.sep).join('/') + '/';

        const regex = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/g;
        const scriptPaths = new Set();
        let match;
        while ((match = regex.exec(html)) !== null) {
            const src = match[1];
            // Only local Next.js assets: a full URL must never map to a local path.
            if (!src.startsWith('/_next/')) continue;
            const cleanSrc = src.substring(1).split('?')[0].split('#')[0];
            scriptPaths.add(path.join(OUT_DIR, cleanSrc));
        }

        let totalSize = 0;
        for (const scriptPath of scriptPaths) {
            try {
                totalSize += await getGzipSize(scriptPath);
            } catch (err) {
                // A referenced chunk that does not exist is a FATAL error, not 0 KB.
                if (err.code === 'ENOENT') {
                    missing.push({ route, file: scriptPath });
                } else {
                    throw err;
                }
            }
        }

        const sizeKB = Math.round((totalSize / 1024) * 100) / 100;
        const isOverLimit = sizeKB > LIMIT_KB;
        if (isOverLimit) hasFailed = true;
        results.push({ route, sizeKB, isOverLimit });
    }

    results.sort((a, b) => a.route.localeCompare(b.route));

    console.log(`Page           | KB gzip (Limit: ${LIMIT_KB} KB)`);
    console.log('-------------- | ---------------------------');
    for (const res of results) {
        const icon = res.isOverLimit ? '❌' : '✅';
        const missCount = missing.filter((m) => m.route === res.route).length;
        const note = missCount > 0 ? ` ⚠️ ${missCount} missing` : '';
        console.log(`${res.route.padEnd(14)} | ${res.sizeKB} KB ${icon}${note}`);
    }

    let failed = hasFailed;

    if (missing.length > 0) {
        console.error(`\n❌ Error: ${missing.length} referenced file(s) missing from ${OUT_DIR}/:`);
        for (const m of missing) {
            console.error(`   page ${m.route} -> ${m.file}`);
        }
        failed = true;
    }

    if (hasFailed) {
        console.error(`\n❌ Error: one or more pages exceed the limit of ${LIMIT_KB} KB gzip.`);
    }

    if (failed) process.exit(1);
    console.log(`\n✅ Success: all pages are under the limit of ${LIMIT_KB} KB gzip.`);
}

main().catch((err) => {
    console.error('Unexpected error:', err);
    process.exit(1);
});
