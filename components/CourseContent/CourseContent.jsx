import s from './CourseContent.module.scss';

const blocks = [
    { title: 'Первичные учетные документы', items: [
            'Особенности учета у ИП, ПУД, книги',
            'Особенности учета в отдельных видах деятельности',
        ]},
    { title: 'Выбор системы налогообложения' },
    { title: 'Прием наличных денежных средств. Учет кассовых операций' },
    { title: 'Единый налог' },
    { title: 'Заполнение книги и декларации при ЕН' },
    { title: 'ПН' },
    { title: 'Заполнение книги и декларации при ПН' },
    { title: 'Импорт и экспорт' },
    { title: 'НДС' },
    { title: 'Заполнение книги и декларации при НДС, выставление ЭСЧФ' },
    { title: 'НДС на доходы иностранных организаций' },
    { title: 'Сбор за размещение рекламы' },
    { title: 'Маркировка товара' },
    { title: 'Налоги, которые могут возникнуть у ИП' },
    { title: 'Кадры', items: [
            'Прием на работу. Заработная плата',
            'Отчеты за наёмных сотрудников',
        ]},
    { title: 'Оформление бухгалтера. Действия при проверке. Исправление ошибок' },
];

function Block({ b, index }) {
    const number = index + 1;
    const body = b.items?.length ? (
        <details className={s.item}>
            <summary className={s.summary}>
        <span className={s.heading}>
          <span className={s.num}>{number}</span>
            {b.title}
        </span>
                <span className={s.chevron} aria-hidden="true" />
            </summary>
            <ul className={s.sublist}>
                {b.items.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
        </details>
    ) : (
        <div className={`${s.item} ${s.plain}`}>
            <div className={s.summary}>
        <span className={s.heading}>
          <span className={s.num}>{number}</span>
            {b.title}
        </span>
            </div>
        </div>
    );
    return body;
}

export default function CourseContent() {
    const mid = Math.ceil(blocks.length / 2);   // 8 слева, остальное справа
    const left = blocks.slice(0, mid);
    const right = blocks.slice(mid);

    return (
        <section id="course-content" className={`full ${s.section}`}>
            <div className="container">
                <h2 className={s.title}>Программа обучения</h2>

                <div className={s.grid}>
                    <div className={s.col}>
                        {left.map((b, i) => <Block key={i} b={b} index={i} />)}
                    </div>
                    <div className={s.col}>
                        {right.map((b, i) => <Block key={mid + i} b={b} index={mid + i} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
