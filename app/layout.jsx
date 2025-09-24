import '../styles/globals.css';

// export const metadata = {
//   title: "Учет и налоги у ИП в Беларуси — Авторский онлайн-курс",
//   description: "Научитесь вести учет и налоги у ИП в Беларуси самостоятельно и без ошибок. Онлайн-доступ, материалы и сертификат гос. образца (в расширенном тарифе).",
// };
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export const metadata = { title: 'Курс' };

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}
