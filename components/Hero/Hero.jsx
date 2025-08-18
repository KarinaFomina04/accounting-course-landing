import s from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={`${s.hero} full`} id="top">
      <div className={s.container}>
        <h1 className={s.mainText}>Учет и налоги у ИП в Беларуси</h1>
        <p className={s.descriptionText }>
          Авторский курс по учету и налогам у ИП в Беларуси. Курс подойдёт начинающим и действующим ИП,
          кто хочет самостоятельно и без ошибок вести учет. Подойдёт начинающим бухгалтерам, которые хотят
          самостоятельно вести учет у ИП. Курс проходит онлайн. После оплаты вы получаете доступ ко всем
          урокам и просматриваете их в любое удобное для вас время. По окончании курса, после прохождения
          итогового теста, выдается сертификат государственного образца.
        </p>
        <div style={{marginTop:24}}>
          <a href="#pricing" className={s.btnSelectTariff}>Выбрать тариф</a>
        </div>
      </div>
    </section>
  );
}
