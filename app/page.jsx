import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import Pricing from '../components/Pricing/Pricing';
import Footer from '../components/Footer/Footer';
import CourseContent from "../components/CourseContent/CourseContent";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <CourseContent/>
        <Pricing />
        {/*<ContactForm />*/}
      </main>
      <Footer />
    </>
  );
}
