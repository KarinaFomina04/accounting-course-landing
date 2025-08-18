'use client';

import { useState } from 'react';

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
    <section id="contact">
      <div className="container">
        <h2 style={{fontSize:'clamp(24px,3.2vw,36px)', margin:'0 0 10px'}}>Обратный звонок</h2>
        <p style={{opacity:.85, maxWidth:740}}>
          Введите свой контактный телефон, и мы перезвоним вам в течение 15 минут.
        </p>
        <form className="form" onSubmit={onSubmit}>
          <div>
            <label htmlFor="name" style={{display:'block', marginBottom:6, fontWeight:600}}>Имя</label>
            <input id="name" name="name" placeholder="Ваше имя" required />
          </div>
          <div>
            <label htmlFor="phone" style={{display:'block', marginBottom:6, fontWeight:600}}>Телефон</label>
            <input id="phone" name="phone" placeholder="+375 (__) ___-__-__" required />
          </div>
          <div>
            <label htmlFor="comment" style={{display:'block', marginBottom:6, fontWeight:600}}>Комментарии</label>
            <textarea id="comment" name="comment" placeholder="Удобное время звонка, вопросы и т.д."></textarea>
          </div>
          <button className="button" type="submit" style={{width:'fit-content'}}>Отправить</button>
        </form>
        {status && (
          <div style={{marginTop:14}} className={status.ok ? 'success' : ''}>
            {status.message}
          </div>
        )}
      </div>
    </section>
  );
}
