import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import AboutExpandedSections from '@/components/sections/AboutExpandedSections';
import RawMaterialsCycleSection from '@/components/sections/RawMaterialsCycleSection';
import OrnamentalDivider from '@/components/site/OrnamentalDivider';
import DecorativeFloaters from '@/components/site/DecorativeFloaters';
import GreenAccent from '@/components/site/GreenAccent';

export default function AboutPage() {
    return (
        <div className="relative">
            <GreenAccent position="bottom-right" size="lg" />
            <DecorativeFloaters />
            
            {/* SEO-friendly heading */}
            <h1 className="sr-only">About Us - Authentic South Indian Cloud Kitchen</h1>
            
            <AboutSection />
            <OrnamentalDivider />
            <WhyChooseUsSection />
            <OrnamentalDivider />
            <RawMaterialsCycleSection />
            <OrnamentalDivider />
            <AboutExpandedSections />
            <OrnamentalDivider />
        </div>
    );
}
