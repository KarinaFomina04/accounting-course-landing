import CourseContent from "../../components/CourseContent/CourseContent";
import ContactForm from "../../components/ContactForm/ContactForm";

export const metadata = {
    title: 'Контакты',
};

export default function Page() {
    return (
        <>
            <main>
                <ContactForm />
            </main>
        </>
    );
}