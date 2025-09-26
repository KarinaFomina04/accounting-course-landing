'use client';

import { useEffect, useState, useRef } from 'react';
import s from './ContactForm.module.scss';

function Modal({ open, onClose, title, children, success }) {
  const dialogRef = useRef(null);

  // Закрытие по Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    // Лочим прокрутку под модалкой
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = old;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
      <div className={s.modalOverlay} onClick={onClose} aria-hidden="true">
        <div
            className={`${s.modal} ${success ? s.modalSuccess : s.modalError}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
            ref={dialogRef}
        >
          <h3 id="modal-title" className={s.modalTitle}>{title}</h3>
          <div className={s.modalBody}>{children}</div>
          <div className={s.modalActions}>
            <button className={s.button} onClick={onClose}>Ок</button>
          </div>
        </div>
      </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState(null); // {ok:boolean, message:string} | null
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    if (!consent) return;

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      setSubmitting(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({
          ok: true,
          message: data.message || 'Заявка отправлена. Мы перезвоним в течение 15 минут.',
        });
        e.currentTarget.reset();
        setConsent(false);
      } else {
        setStatus({
          ok: false,
          message: data.message || 'Ошибка отправки. Попробуйте позже.',
        });
      }
    } catch {
      setStatus({ ok: false, message: 'Сеть недоступна. Попробуйте позже.' });
    } finally {
      setSubmitting(false);
      setModalOpen(true); // показываем модалку в любом случае
    }
  }

  const closeModal = () => {
    setModalOpen(false);
    // можно дополнительно очистить status, если нужно:
    // setStatus(null);
  };

  return (
      <section id="contact" className="full">
        <div className={s.container}>
          <h2 className={s.title}>Заказать консультацию</h2>
          <p className={s.subtitle}>Введите свой контактный телефон, и мы перезвоним вам.</p>

          <form className={s.form} onSubmit={onSubmit} noValidate>
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

            <div className={s.consentRow}>
              <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className={s.consentCheckbox}
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  aria-required="true"
              />
              <label htmlFor="consent" className={s.consentLabel}>
                Я соглашаюсь на обработку персональных данных в соответствии с{' '}
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className={s.link}>
                  Политикой конфиденциальности
                </a>.
              </label>
            </div>

            <button className={s.button} type="submit" disabled={!consent || submitting}>
              {submitting ? 'Отправляем…' : 'Отправить'}
            </button>
          </form>

          {/* Модальное окно с результатом */}
          <Modal
              open={modalOpen}
              onClose={closeModal}
              title={status?.ok ? 'Заявка отправлена' : 'Не удалось отправить'}
              success={!!status?.ok}
          >
            <p>{status?.message}</p>
          </Modal>
        </div>
      </section>
  );
}
