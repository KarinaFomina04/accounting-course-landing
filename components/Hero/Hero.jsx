import s from './Hero.module.scss';

export default function Hero() {
  return (
      <section className={`${s.hero} full`} id="top" aria-labelledby="hero-title">
        <div className={s.container}>
          <p className={s.kicker}>АВТОРСКИЙ КУРС</p>
          <h1 id="hero-title" className={s.title}>
            Учет и налоги у ИП в Беларуси
          </h1>
          <p className={s.tagline}>
            Об учете и налогах у ИП простым языком
          </p>
          <p className={s.lead}>
            Курс от практикующего главного бухгалтера.
          </p>
          <div className={s.columns}>
            <div className={s.card}>
              <h2 className={s.cardTitle}>Кому подойдет</h2>
              <ul className={s.list}>
                <li>Новым и действующим ИП без бухгалтерского бэкграунда.</li>
                <li>Новичкам и опытным бухгалтерам, которые хотят освоить учет у ИП.</li>
              </ul>
            </div>
            <div className={s.card}>
              <h2 className={s.cardTitle}>После курса вы научитесь</h2>
              <ul className={s.list}>
                <li>Самостоятельно вести учет.</li>
                <li>Рассчитывать налоги.</li>
                <li>Сдавать отчетность, избегая штрафов и лишних затрат на аутсорсинг.</li>
              </ul>
            </div>
          </div>
          <ul className={s.badges} aria-label="Параметры курса">
            <li><span>✓</span> Продолжительность: полтора месяца</li>
            <li><span>✓</span> Формат: онлайн</li>
            <li><span>✓</span> Доступ к платформе: 6 месяцев</li>
            <li><span>✓</span> Доступ  к просмотру уроков и выполнение домашнего задания 24/7</li>
            <li><span>✓</span> Сертификат гособразца и шаблоны документов</li>
            <li><span>✓</span> Персональная поддержка во время обучения</li>
          </ul>

          <div className={s.ctaRow}>
            {/*<a href="#pricing" className={s.btnSelectTariff}>Выбрать тариф</a>*/}
            {/*<a href="#program" className={s.btnGhost}>Посмотреть программу</a>*/}
          </div>
        </div>
      </section>
  );
}