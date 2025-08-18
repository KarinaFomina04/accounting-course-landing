import s from "./TelegramButton.module.scss";

export default function TelegramButton({ children = "Написать в Telegram" }) {
    const href = process.env.NEXT_PUBLIC_TG_LINK; //username of the Telegram account
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={s.buttonTg}>
            <img src="/svg/tgButton.svg" alt="" width={18} height={18} />
            <span>{children}</span>
        </a>
    );
}
