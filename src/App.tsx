import { useEffect } from 'react';
import { CartProvider } from '@/state/cart';
import { useRouter } from '@/lib/router';
import { updateSEO } from '@/lib/seo';
import HeaderNav from '@/components/site/HeaderNav';
import Footer from '@/components/site/Footer';
import FoodCircleFloaters from '@/components/site/FoodCircleFloaters';
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import AboutPage from '@/pages/AboutPage';
import OrderPage from '@/pages/OrderPage';
import ContactPage from '@/pages/ContactPage';

function AppContent() {
    const { currentRoute } = useRouter();

    useEffect(() => {
        updateSEO(currentRoute);
    }, [currentRoute]);

    const renderPage = () => {
        switch (currentRoute) {
            case '/':
                return <HomePage />;
            case '/menu':
                return <MenuPage />;
            case '/about':
                return <AboutPage />;
            case '/order':
                return <OrderPage />;
            case '/contact':
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <HeaderNav />
            <FoodCircleFloaters />
            <main className="flex-1 pt-20">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <CartProvider>
            <AppContent />
        </CartProvider>
    );
}
