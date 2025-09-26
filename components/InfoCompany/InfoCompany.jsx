'use client';

import React from 'react';
import s from './InfoCompany.module.scss';

const docsLeft = [
    {
        href: '/docs/public-offer-license.pdf',
        label: 'ПУБЛИЧНАЯ ОФЕРТА на передачу неисключительных имущественных прав (лицензий)',
    },
    {
        href: '/docs/internal-rules.pdf',
        label: 'ПРАВИЛА внутреннего распорядка для обучающихся',
    },
    {
        href: '/docs/public-offer-education.pdf',
        label: 'Публичная оферта на обучение',
    },
];

const docsRight = [
    {
        href: '/docs/privacy-policy.pdf',
        label: 'Положение о политике оператора в отношении обработки персональных данных',
    },
    {
        href: '/docs/cookie-policy.pdf',
        label: 'Положение о политике в отношении обработки cookie',
    },
    {
        href: '/docs/registration-certificate.pdf',
        label: 'Копия свидетельства о регистрации',
    },
];

export default function InfoCompany() {
    const year = new Date().getFullYear();

    return (
        <main className={s.wrapper}>
            <div className={s.container}>
                <h1 className={s.title}>Документы и реквизиты</h1>

                <section className={s.docs} aria-labelledby="docs-title">
                    <h2 id="docs-title" className={s.sectionTitle}>Документы</h2>
                    <div className={s.docsGrid}>
                        <ul className={s.docCol}>
                            {docsLeft.map((d) => (
                                <li key={d.href}>
                                    <a href={d.href} target="_blank" rel="noopener noreferrer">
                                        {d.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul className={s.docCol}>
                            {docsRight.map((d) => (
                                <li key={d.href}>
                                    <a href={d.href} target="_blank" rel="noopener noreferrer">
                                        {d.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className={s.requisitesSection} aria-labelledby="req-title">
                    <h2 id="req-title" className={s.sectionTitle}>Реквизиты</h2>
                    <address className={s.requisites} aria-label="Реквизиты">
                        <div className={s.reqTitle}>Реквизиты</div>
                        <div className={s.reqBody}>
                            ИП Фомина К.А.<br />
                            УНП: 000000000<br />
                            р/с: BY00UNBS00000000000000000000 в ОАО «Банк Пример»<br />
                            E-mail: <a href="mailto:info@ket-accountant.by">info@ket-accountant.by</a><br />
                        </div>
                    </address>
                </section>

                <div className={s.copy}>© {year} KET Accountant</div>
            </div>
        </main>
    );
}
