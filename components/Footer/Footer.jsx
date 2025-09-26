import Link from 'next/link';
import s from './Footer.module.scss';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={s.footer} role="contentinfo">
            <div className={s.inner}>
                {/* Бренд/описание */}
                <div className={s.brand}>
                    <Link href="/" className={s.logo} aria-label="KET Accountant — на главную">
                        KET Accountant
                    </Link>
                    <p className={s.tagline}>
                        Онлайн-курс по учёту и налогам для ИП в Беларуси.
                    </p>
                </div>


                {/* Контакты */}
                {/*<address className={s.contacts} aria-label="Контакты">*/}
                {/*    <a href="mailto:info@ket-accountant.by">info@ket-accountant.by</a>*/}
                {/*    <a href="tel:+375000000000">+375 (00) 000-00-00</a>*/}
                {/*    <div className={s.social} aria-label="Мы в соцсетях">*/}
                {/*        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">*/}
                {/*            /!* иконка telegram (inline svg) *!/*/}
                {/*            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.9 16.9l-.1 3.1c.4 0 .6-.2.8-.4l1.9-1.8 4 2.9c.7.4 1.2.2 1.4-.7l2.6-12.2v-.1c.2-.9-.3-1.3-1-1L3.2 10c-.9.4-.9 1 .2 1.3l4.7 1.5 10.8-6.8c.5-.3.9-.1.5.2l-9.5 8.7z" fill="currentColor"/></svg>*/}
                {/*        </a>*/}
                {/*        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">*/}
                {/*            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 116.5 13 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.8a1 1 0 11-1 1 1 1 0 011-1z" fill="currentColor"/></svg>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</address>*/}
            </div>

            {/* Нижняя полоска */}
            <div className={s.bar}>
                <span>© {year} KET Accountant</span>
                <span className={s.muted}>Все права защищены</span>
            </div>
        </footer>
    );
}
