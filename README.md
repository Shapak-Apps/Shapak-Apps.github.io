# Şapak Apps — сайт организации

Сайт сообщества Şapak Apps: [shapak-apps.github.io](https://shapak-apps.github.io/) —
на трёх языках: `/` туркменский, `/ru/` русский, `/en/` английский. Открытые,
бесплатные приложения на туркменском языке.

С [#4](https://github.com/Shapak-Apps/Shapak-Apps.github.io/pull/4) сайт —
**Next.js со статическим экспортом** (`output: "export"`), собирается в чистый
HTML/CSS/JS и раздаётся GitHub Pages через GitHub Actions.

## Запуск локально

Нужен **Node 22** (Next.js требует не ниже 20.9).

```bash
npm ci
npm run dev      # http://localhost:3000
```

Перед пушем — обязательно, это то же самое, что проверяет CI:

```bash
npm run build        # статика собирается в out/
npm run check:size   # JS на каждой странице — не больше 250 КБ gzip
```

Чтобы посмотреть именно собранный результат (не dev-сервер), из **корня репозитория**:

```bash
python -m http.server 4173 -d out
```

и открыть `http://localhost:4173/`.

> ⚠️ **Не запускайте сервер из папки `out/`** (`cd out && python -m http.server`).
> На Windows следующий `npm run build` не сможет удалить папку, которая занята
> работающим сервером, и упадёт с ошибкой.

## Где что лежит

```
content/*.ts    все тексты сайта, каждая строка на трёх языках
components/     страницы и их CSS
app/            маршруты:
                  app/(tk)/      туркменский — живёт в корне (/, /projects/)
                  app/[lang]/    русский и английский (/ru/, /en/)
public/         картинки, логотип, privacy policy
public/flags/   флаги языков — из lipis/flag-icons (MIT, см. public/flags/LICENSE)
```

Подробнее о структуре, мультиязычности и о том, как добавить проект или
участника — смотрите комментарии в самих файлах (`lib/i18n.ts`,
`content/projects.ts`, `content/people.ts`).

## Правила

- **`/hytay-dili-1/privacy-policy.html`** должен оставаться по этому адресу —
  он прописан в App Store. CI проверяет его наличие в сборке; если файла нет,
  сборка падает.
- **`/ykjam-terjime/`** — это **другой репозиторий**
  ([Shapak-Apps/ykjam-terjime](https://github.com/Shapak-Apps/ykjam-terjime)).
  Не создавайте страницу с этим путём в этом репозитории.
- Любое изменение — через Pull Request. Проверка `build` должна быть зелёной,
  и нужен Approve от владельца репозитория.
- Новый текст на сайте — сразу на трёх языках (tk / ru / en).

## Работа с репозиторием

Прямой пуш в `main` закрыт:

```bash
git checkout main && git pull
git checkout -b название-задачи

# правки → npm run dev → npm run build

git push -u origin название-задачи
```

Открыть PR в `main`, в описании — `Closes #номер`, если PR закрывает issue.
После Approve новый пуш в ту же ветку сбрасывает его — понадобится повторный
Approve.

## Деплой

Push/merge в `main` → GitHub Actions собирает сайт (`npm run build`),
проверяет, что в сборке есть ключевые страницы и
`hytay-dili-1/privacy-policy.html`, и что JS на странице не больше лимита
(`npm run check:size`) → выкладывает `out/` на GitHub Pages. Обычно занимает
около минуты. Деплой можно запустить и вручную: вкладка Actions →
Build and deploy → Run workflow.
