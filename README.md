# Лендинг «Учет и налоги у ИП в Беларуси» (Next.js)

Готовый проект на **Next.js 14 (App Router)**.

## Запуск

```bash
npm install
npm run dev
# откройте http://localhost:3000
```

## Цвета

Палитра заведена в `styles/globals.css` в виде переменных CSS:

- `--espresso` — глубокий кофейный (Pantone Espresso, приблизительно `#4B2E2B`)
- `--arctic-paradise` — холодный светлый бирюзовый (Pantone Arctic Paradise, приблизительно `#A8DDE4`)
- `--snow-white` — почти белый фон (`#F8FBFF`)

При необходимости замените значения на точные HEX под ваши Pantone-эквиваленты.

## Формы и отправка заявок

Форма «Обратный звонок» отправляет POST на `/api/contact` (см. `app/api/contact/route.js`).
Сейчас данные просто **логируются** на сервере. Здесь легко подключить Telegram, почту или CRM.

## Структура

- `app/page.jsx` — главная, собирает секции
- `components/*` — секции лендинга
- `styles/globals.css` — стили и палитра
- `public/img/hero-bg.png` — фон обложки (можно заменить)
