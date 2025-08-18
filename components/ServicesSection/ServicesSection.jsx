import s from './ServicesSection.module.scss';

const items = [
  { title: "Видеоуроки", text: "Доступ к структурированным урокам по всем разделам учёта и налогов у ИП." },
  { title: "Шаблоны и формы", text: "Готовые шаблоны документов и образцы заполнения." },
  { title: "Персональная поддержка", text: "Ответы на вопросы в закрытом чате/почте в процессе обучения." },
 // { title: "Домашние задания", text: "Практика с проверкой и разбором типичных ошибок." },
  { title: "Итоговый тест", text: "Проверка знаний и рекомендация по дальнейшему развитию." },
  { title: "Обновления курса", text: "Актуализация материалов при изменении законодательства." },
];

export default function ServicesSection() {
  return (
    <section id="services">
      <div className={`${s.container} full`}>
        <h2 className={s.title}>Услуги и возможности курса</h2>
        <p className={s.lead}>
          Для получения более подробной информации свяжитесь с нами по телефону или почте
          либо закажите обратный звонок.
        </p>
        <div className={s.cards}>
          {items.map((it, i) => (
            <div key={i} className={s.card}>
              <div className={s.num}>{i+1}</div>
              <h3 className={s.cardTitle}>{it.title}</h3>
              <p className={s.cardText}>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
