import { useState } from 'react';
import ScrollReveal from '@/components/site/ScrollReveal';
import { NEW_ARRIVAL_IMAGE } from '@/data/assets';

export default function NewArrivalSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 animate-fade-in-up tracking-tight">
                            New Arrival
                        </h2>
                        <p className="text-xl text-muted-foreground animate-fade-in-up delay-100 font-light italic">
                            Discover our latest culinary creation
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-warm-lg cursor-pointer group"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            tabIndex={0}
                            onFocus={() => setIsHovered(true)}
                            onBlur={() => setIsHovered(false)}
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={NEW_ARRIVAL_IMAGE.src}
                                    alt={NEW_ARRIVAL_IMAGE.alt}
                                    className={`w-full h-full object-cover transition-all duration-700 ${
                                        isHovered ? 'scale-110 rotate-1' : 'scale-100 rotate-0'
                                    }`}
                                    loading="lazy"
                                />
                            </div>
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${
                                    isHovered ? 'opacity-100' : 'opacity-70'
                                }`}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                                    Authentic Tamil Nadu Feast
                                </h3>
                                <p className="text-lg opacity-90">
                                    Experience the rich flavors of traditional home cooking
                                </p>
                            </div>
                            <div
                                className={`absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold transition-transform duration-500 ${
                                    isHovered ? 'scale-110' : 'scale-100'
                                }`}
                            >
                                NEW
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
