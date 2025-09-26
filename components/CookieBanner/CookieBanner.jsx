'use client';

import { useEffect, useState } from 'react';
import s from './CookieBanner.module.scss';

const NAME = 'consent';
const MAX_AGE = 60 * 60 * 24 * 180; // 180 дней

const hasCookie = () =>
    typeof document !== 'undefined' &&
    document.cookie.split('; ').some(c => c.startsWith(`${NAME}=`));

export default function CookieBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!hasCookie()) setShow(true);
    }, []);

    const setConsent = (value) => { // ← без типов
        const secure = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : '';
        document.cookie = `${NAME}=${value}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax${secure}`;
        if (value === 'yes') window.dispatchEvent(new Event('consent:granted'));
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className={s.banner} role="dialog" aria-live="polite">
            <div className={s.text}>
                Мы используем cookies для улучшения работы сайта. Подробнее —{' '}
                <a href="/info-company" target="_blank" rel="noopener noreferrer">Документы и реквизиты</a>.
            </div>
            <div className={s.actions}>
                <button className={s.primary} onClick={() => setConsent('yes')}>Принять</button>
                <button className={s.ghost} onClick={() => setConsent('no')}>Отклонить</button>
            </div>
        </div>
    );
}
