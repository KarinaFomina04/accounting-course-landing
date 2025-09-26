import '../styles/globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CookieBanner from "../components/CookieBanner/CookieBanner";

export const metadata = { title: 'Курс' };

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <body>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        </body>
        </html>
    );
}
