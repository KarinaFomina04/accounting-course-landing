import '../styles/globals.css';

export const metadata = {
  title: "Учет и налоги у ИП в Беларуси — Авторский онлайн-курс",
  description: "Научитесь вести учет и налоги у ИП в Беларуси самостоятельно и без ошибок. Онлайн-доступ, материалы и сертификат гос. образца (в расширенном тарифе).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
