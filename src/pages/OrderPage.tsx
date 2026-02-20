import OrderSection from '@/components/sections/OrderSection';
import GreenAccent from '@/components/site/GreenAccent';

export default function OrderPage() {
    return (
        <div className="relative">
            <GreenAccent position="top-left" size="lg" />
            <OrderSection />
        </div>
    );
}
