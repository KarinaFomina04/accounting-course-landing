import s from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={s.footer}>
            <div className={`container ${s.inner}`}>
                <div>© {new Date().getFullYear()} KET Accountant</div>
                <div>
                    <a href="#top" className={s.link}>Наверх ↑</a>
                </div>
            </div>
        </footer>
    );
}
