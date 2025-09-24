'use client';

import { useState } from 'react';
import s from './ContactForm.module.scss';

export default function ContactForm() {
  const [status, setStatus] = useState(null);


  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, message: data.message || 'Заявка отправлена. Мы перезвоним в течение 15 минут.' });
        e.currentTarget.reset();
      } else {
        setStatus({ ok: false, message: data.message || 'Ошибка отправки. Попробуйте позже.' });
      }
    } catch (err) {
      setStatus({ ok: false, message: 'Сеть недоступна. Попробуйте позже.' });
    }
  }


  return (
      <section id="contact" className="full">
        <div className={s.container}>
          <h2 className={s.title}>Заказать консультацию</h2>
          <p>
            Введите свой контактный телефон, и мы перезвоним вам.
          </p>
          <form className={s.form} onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className={s.label}>Имя</label>
              <input id="name" name="name" placeholder="Ваше имя" required />
            </div>
            <div>
              <label htmlFor="phone" className={s.label}>Телефон</label>
              <input id="phone" name="phone" type="tel" placeholder="+375 (__) ___-__-__" required />
            </div>
            <div>
              <label htmlFor="email" className={s.label}>Email</label>
              <input id="email" name="email" type="email" placeholder="Email" required />
            </div>
            <div>
              <label htmlFor="comment" className={s.label}>Комментарии</label>
              <textarea id="comment" name="comment" placeholder="Удобное время звонка, вопросы и т.д."></textarea>
            </div>
            <button className={s.button} type="submit">Отправить</button>
          </form>
          {status && (
              <div className={`${s.status} ${status.ok ? s.success : ''}`}>
                {status.message}
              </div>
          )}
        </div>
      </section>
  );
}