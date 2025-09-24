import React from 'react';
import s from './Footer.module.scss';


export default function Footer() {
    const year = new Date().getFullYear();


    return (
        <footer className={s.footer} role="contentinfo">
            <div className={s.inner}>
                {/* Слева — список документов */}
                <div className={s.docs}>
                    <div>
                        <a href="/docs/public-offer-license.pdf" target="_blank" rel="noopener noreferrer">
                            ПУБЛИЧНАЯ ОФЕРТА на передачу неисключительных имущественных прав (лицензий)
                        </a>
                        <a href="/docs/internal-rules.pdf" target="_blank" rel="noopener noreferrer">
                            ПРАВИЛА внутреннего распорядка для обучающихся
                        </a>
                        <a href="/docs/public-offer-education.pdf" target="_blank" rel="noopener noreferrer">
                            Публичная оферта на обучение
                        </a>
                    </div>
                    <div>
                        <a href="/docs/privacy-policy.pdf" target="_blank" rel="noopener noreferrer">
                            Положение о политике оператора в отношении обработки персональных данных
                        </a>
                        <a href="/docs/cookie-policy.pdf" target="_blank" rel="noopener noreferrer">
                            Положение о политике в отношении обработки cookie
                        </a>
                        <a href="/docs/registration-certificate.pdf" target="_blank" rel="noopener noreferrer">
                            Копия свидетельства о регистрации
                        </a>
                    </div>
                </div>
                <address className={s.requisites} aria-label="Реквизиты">
                    <div className={s.reqTitle}>Реквизиты</div>
                    <div>
                        ИП Фомина К.А.<br/>
                        УНП: 000000000<br/>
                        р/с: BY00UNBS00000000000000000000 в ОАО «Банк Пример»<br/>
                        E‑mail: <a href="mailto:info@ket-accountant.by">info@ket-accountant.by</a><br/>
                    </div>
                </address>
            </div>
            <div className={s.copy}>© {year} KET Accountant</div>
        </footer>
    )
}