import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import OrnamentalDivider from '@/components/site/OrnamentalDivider';
import NewArrivalSection from '@/components/sections/NewArrivalSection';
import MenuBookSection from '@/components/sections/MenuBookSection';
import CircularCalloutsSection from '@/components/sections/CircularCalloutsSection';
import OffersNaturalFoodSection from '@/components/sections/OffersNaturalFoodSection';
import RawMaterialsCycleSection from '@/components/sections/RawMaterialsCycleSection';

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <OrnamentalDivider />
            <WhyChooseUsSection />
            <OrnamentalDivider />
            <NewArrivalSection />
            <OrnamentalDivider />
            <MenuBookSection />
            <OrnamentalDivider />
            <CircularCalloutsSection />
            <OrnamentalDivider />
            <OffersNaturalFoodSection />
            <OrnamentalDivider />
            <RawMaterialsCycleSection />
        </div>
    );
}
