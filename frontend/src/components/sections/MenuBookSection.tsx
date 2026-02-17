import { useState } from 'react';
import { router } from '@/lib/router';
import ScrollReveal from '@/components/site/ScrollReveal';
import { MENU_BOOK_COVER, MENU_BOOK_PAGE } from '@/data/assets';

export default function MenuBookSection() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        router.navigate('/menu');
    };

    return (
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                            Our Menu Book
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Explore our authentic Tamil Nadu dishes
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="max-w-3xl mx-auto perspective-1000">
                        <div
                            className="relative cursor-pointer book-container"
                            onMouseEnter={() => setIsFlipped(true)}
                            onMouseLeave={() => setIsFlipped(false)}
                            onClick={handleClick}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleClick();
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label="Open menu book"
                        >
                            <div
                                className={`book-flip transition-all duration-700 ${
                                    isFlipped ? 'flipped' : ''
                                }`}
                            >
                                {/* Front Cover */}
                                <div className="book-face book-front">
                                    <div className="relative rounded-lg overflow-hidden shadow-warm-lg border-4 border-accent/30">
                                        <img
                                            src={MENU_BOOK_COVER.src}
                                            alt={MENU_BOOK_COVER.alt}
                                            className="w-full h-auto"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                                    </div>
                                </div>

                                {/* Inner Page */}
                                <div className="book-face book-back">
                                    <div className="relative rounded-lg overflow-hidden shadow-warm-lg border-4 border-accent/30">
                                        <img
                                            src={MENU_BOOK_PAGE.src}
                                            alt={MENU_BOOK_PAGE.alt}
                                            className="w-full h-auto"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-xl font-semibold shadow-lg">
                                                Click to View Full Menu
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
