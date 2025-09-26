'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './Header.module.scss';
import TelegramButton from '../TelegramButton/TelegramButton';

function Portal({ children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return createPortal(children, document.body);
}

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const tgHref = process.env.NEXT_PUBLIC_TG_LINK || 'https://t.me/your_fallback';

    // Закрывать меню при смене маршрута
    useEffect(() => setOpen(false), [pathname]);

    // Esc + lock/unlock scroll
    useEffect(() => {
        const onEsc = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onEsc);

        if (open) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.width = '100%';
        } else {
            const top = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
            if (top) window.scrollTo(0, -parseInt(top || '0', 10));
        }

        return () => window.removeEventListener('keydown', onEsc);
    }, [open]);

    const close = () => setOpen(false);

    return (
        <>
            <header className={s.sticky}>
                <div className={s.container}>
                    <div className={s.row}>
                        <Link
                            href="/"
                            className={s.logo}
                            aria-label="На главную"
                            onClick={close}
                        >
                            ИП Фомина Кристина Александровна
                        </Link>

                        {/* Desktop navigation — роуты, без якорей */}
                        <nav className={s.containerLinks} aria-label="Основная навигация">
                            <Link href="/services" className={s.linkButton} onClick={close}>Услуги</Link>
                            <Link href="/course-content" className={s.linkButton} onClick={close}>Программа курса</Link>
                            <Link href="/pricing" className={s.linkButton} onClick={close}>Тарифы</Link>
                            <Link href="/contact-form" className={s.linkButton} onClick={close}>Заказать консультацию</Link>
                            <Link href="/info-company" className={s.linkButton} onClick={close}>О нас</Link>
                            <TelegramButton />
                        </nav>

                        {/* Mobile actions */}
                        <div className={s.mobileActions}>
                            <a
                                href={tgHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Написать в Telegram"
                                className={s.tgIcon}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" aria-hidden="true">
                                    <path d="M120 0c66.274 0 120 53.726 120 120s-53.726 120-120 120S0 186.274 0 120 53.726 0 120 0z" fill="#229ED9"/>
                                    <path d="M54.7 118.2c41.7-18.2 69.5-30.2 83.5-36.1 39.8-16.6 48.1-19.5 53.5-19.6 1.2 0 3.9.3 5.7 1.9 1.5 1.4 1.9 3.3 2.1 4.7.2 1.4.5 4.6.3 7.1-2.8 29.8-14.9 102-21.1 135.3-2.6 14.1-7.7 18.8-12.6 19.3-10.7 1-18.8-7.1-29.2-14-16.2-10.6-25.4-17.2-41-27.6-18.2-12-6.4-18.6 4-29.4 2.8-2.9 50.7-46.4 51.5-50.3.1-.5.3-2.2-1-3.1s-3.1-.6-4.4-.4c-1.9.4-32 20.4-90.1 60.1-8.6 6-16.4 8.9-23.3 8.8-7.6-.1-22.2-4.3-33.1-7.9-13.3-4.3-24-6.6-23.1-14.1.5-3.8 5.7-7.7 16.1-12.1z" fill="#fff"/>
                                </svg>
                            </a>

                            <button
                                type="button"
                                className={`${s.burger} ${open ? s.open : ''}`}
                                aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
                                aria-expanded={open}
                                aria-controls="mobile-nav"
                                onClick={() => setOpen(v => !v)}
                            >
                                <span /><span /><span />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Overlay + mobile menu */}
            <Portal>
                <div className={`${s.overlay} ${open ? s.open : ''}`} onClick={close} />
                <nav
                    id="mobile-nav"
                    className={`${s.mobileMenu} ${open ? s.open : ''}`}
                    role="dialog"
                    aria-modal="true"
                >
                    <Link href="/services" className={s.mLink} onClick={close}>Услуги</Link>
                    <Link href="/course-content" className={s.mLink} onClick={close}>Программа курса</Link>
                    <Link href="/pricing" className={s.mLink} onClick={close}>Тарифы</Link>
                    <Link href="/contact-form" className={s.linkButton} onClick={close}>Заказать консультацию</Link>
                    <Link href="/info-company" className={s.linkButton} onClick={close}>О нас</Link>
                </nav>
            </Portal>
        </>
    );
}
