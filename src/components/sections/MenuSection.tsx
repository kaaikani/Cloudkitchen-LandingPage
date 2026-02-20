import { MENU_ITEMS, CATEGORIES } from '@/data/menu';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DishCard from '@/components/menu/DishCard';
import ScrollReveal from '@/components/site/ScrollReveal';
import OrnamentalDivider from '@/components/site/OrnamentalDivider';
import DecorativeFloaters from '@/components/site/DecorativeFloaters';
import { prefersReducedMotion } from '@/lib/animations';
import GreenAccent from '@/components/site/GreenAccent';

export default function MenuSection() {
    const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0]);
    const [viewMode, setViewMode] = useState<'filtered' | 'grouped'>('filtered');
    const reducedMotion = prefersReducedMotion();

    const filteredItems = MENU_ITEMS.filter((item) => item.category === selectedCategory);

    // Calculate items per row for priority loading (4 on xl, 3 on lg, 2 on sm, 1 on mobile)
    const getItemsInFirstRow = () => {
        if (typeof window === 'undefined') return 4;
        const width = window.innerWidth;
        if (width >= 1280) return 4; // xl
        if (width >= 1024) return 3; // lg
        if (width >= 640) return 2; // sm
        return 1; // mobile
    };

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <GreenAccent position="bottom-left" size="md" />
            <DecorativeFloaters />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* SEO-friendly heading */}
                <h1 className="sr-only">South Indian Menu - Authentic Tamil Nadu Dishes</h1>
                
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 animate-fade-in-up">
                            Our Menu
                        </h2>
                        <p className="text-lg text-muted-foreground animate-fade-in-up delay-100 max-w-3xl mx-auto">
                            Explore our authentic South Indian menu featuring traditional Tamil Nadu dishes. From crispy dosas and soft idlis to flavorful curries and homemade pickles, every dish is prepared fresh daily with love and care.
                        </p>
                    </div>
                </ScrollReveal>

                {/* View Mode Toggle */}
                <ScrollReveal>
                    <div className="flex justify-center gap-3 mb-8 opacity-0 animate-fade-in-up delay-150">
                        <Button
                            variant={viewMode === 'filtered' ? "primary": 'outline'}
                            onClick={() => setViewMode('filtered')}
                        >
                            Filter by Category
                        </Button>
                        <Button
                            variant={viewMode === 'grouped' ? "primary" : 'outline'}
                            onClick={() => setViewMode('grouped')}
                        >
                            View Full Menu
                        </Button>
                    </div>
                </ScrollReveal>

                {viewMode === 'filtered' ? (
                    <>
                        {/* Category Filter */}
                        <ScrollReveal>
                            <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-fade-in-up delay-200">
                                {CATEGORIES.map((category) => (
                                    <Button
                                        key={category}
                                        variant={selectedCategory === category ? "primary" : 'outline'}
                                        onClick={() => setSelectedCategory(category)}
                                        className="transition-all"
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Menu Grid */}
                        <ScrollReveal stagger>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="opacity-0 animate-fade-in-up"
                                        style={{ animationDelay: reducedMotion ? '0ms' : `${Math.min(index * 50, 500)}ms` }}
                                    >
                                        <DishCard item={item} priority={index < getItemsInFirstRow()} />
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </>
                ) : (
                    <>
                        {/* Grouped by Category View */}
                        <div className="space-y-16">
                            {CATEGORIES.map((category, catIndex) => {
                                const categoryItems = MENU_ITEMS.filter(item => item.category === category);
                                return (
                                    <div key={category}>
                                        <ScrollReveal>
                                            <div className="mb-8">
                                                <h3 className="text-3xl font-serif font-bold text-foreground mb-2 text-center">
                                                    {category}
                                                </h3>
                                                <p className="text-muted-foreground text-center">
                                                    {category === 'Starters' && 'Crispy and flavorful appetizers to start your meal'}
                                                    {category === 'Main Course' && 'Hearty and satisfying traditional South Indian dishes'}
                                                    {category === 'Desserts' && 'Sweet treats to complete your meal'}
                                                    {category === 'Beverages' && 'Refreshing drinks to complement your food'}
                                                    {category === 'Pickles' && 'Homemade pickles to add zest to any meal'}
                                                </p>
                                            </div>
                                        </ScrollReveal>

                                        <ScrollReveal stagger>
                                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                                {categoryItems.map((item, index) => (
                                                    <div
                                                        key={item.id}
                                                        className="opacity-0 animate-fade-in-up"
                                                        style={{ animationDelay: reducedMotion ? '0ms' : `${Math.min(index * 50, 500)}ms` }}
                                                    >
                                                        <DishCard 
                                                            item={item} 
                                                            priority={catIndex === 0 && index < getItemsInFirstRow()} 
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </ScrollReveal>

                                        {catIndex < CATEGORIES.length - 1 && <OrnamentalDivider />}
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
