import s from './Pricing.module.scss';

export default function Pricing() {
  return (
      <section id="pricing" className={`full ${s.section}`}>
        <div className={s.container}>
          <h2 className={s.title}>Тарифы</h2>

          <p className={s.lead}>
            Стоимость курса «Учет и налоги у ИП в Беларуси». Цены указаны в белорусских рублях.
          </p>

          <table className={s.table}>
            <thead>
            <tr>
              <th>Тариф</th>
              <th>Описание</th>
              <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Без сертификата</td>
              <td>Доступ ко всем урокам и материалам, без выдачи сертификата государственного образца.</td>
              <td><strong>400&nbsp;р</strong></td>
            </tr>
            <tr>
              <td>С сертификатом</td>
              <td>Включает итоговый тест и выдачу сертификата государственного образца.</td>
              <td><strong>500&nbsp;р</strong></td>
            </tr>
            </tbody>
          </table>

          <p className={s.note}>
            По вопросам оплаты и реквизитов свяжитесь с нами — мы оперативно всё подскажем.
          </p>
        </div>
      </section>
  );
}
