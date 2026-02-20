import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from '@/lib/router';

const NAV_ITEMS = [
    { id: '/', label: 'Home' },
    { id: '/menu', label: 'Menu' },
    { id: '/about', label: 'About' },
    { id: '/order', label: 'Order' },
    { id: '/contact', label: 'Contact' }
];

const PHONE_NUMBER = '+919876543210';

export default function HeaderNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { currentRoute, navigate } = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        navigate(id);
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-background/95 backdrop-blur-md shadow-md'
                    : 'bg-transparent'
            }`}
        >
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo + Brand */}
                    <button
                        onClick={() => handleNavClick('/')}
                        className="flex items-center gap-3 group"
                    >
                        <img
                        src="/assets/generated/food-circle-vada.dim_256x256.png"
                        alt="Cloud Kitchen Logo"
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary shadow-lg animate-logo-glow"
                        />

                        <span className="text-xl md:text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                            Cloud Kitchen
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`text-base font-medium transition-colors hover:text-primary ${
                                    currentRoute === item.id
                                        ? 'text-primary font-semibold'
                                        : 'text-foreground/80'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 md:gap-3">
                        {/* Phone Number - Highly Visible */}
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/30"
                        >
                            <Phone className="h-4 w-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">
                                {PHONE_NUMBER}
                            </span>
                        </a>

                        {/* Mobile Phone Icon */}
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="Call us"
                        >
                            <Phone className="h-5 w-5 text-primary" />
                        </a>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 pb-4 space-y-2 animate-fade-in-up">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                                    currentRoute === item.id
                                        ? 'bg-primary text-primary-foreground font-semibold'
                                        : 'hover:bg-muted text-foreground'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        
                        {/* Mobile Phone Number */}
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/30"
                        >
                            <Phone className="h-5 w-5 text-primary" />
                            <span className="font-semibold text-primary">
                                Call: {PHONE_NUMBER}
                            </span>
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}
