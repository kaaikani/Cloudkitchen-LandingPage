import ContactSection from '@/components/sections/ContactSection';
import GreenAccent from '@/components/site/GreenAccent';

export default function ContactPage() {
    return (
        <div className="relative">
            <GreenAccent position="bottom-left" size="lg" />
            <ContactSection />
        </div>
    );
}
