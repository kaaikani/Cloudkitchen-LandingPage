import { Users, Award, UtensilsCrossed } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/site/ScrollReveal';
import OrnamentalDivider from '@/components/site/OrnamentalDivider';
import GreenAccent from '@/components/site/GreenAccent';
import { COZY_KITCHEN_IMAGE } from '@/data/assets';
import { prefersReducedMotion } from '@/lib/animations';

const STATS = [
    { icon: Award, value: '5+', label: 'Years of Excellence' },
    { icon: Users, value: '10K+', label: 'Happy Customers' },
    { icon: UtensilsCrossed, value: '20+', label: 'Authentic Dishes' }
];

export default function AboutSection() {
    const reducedMotion = prefersReducedMotion();

    return (
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative">
            <GreenAccent position="top-left" size="md" />
            
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 animate-fade-in-up">
                            About Us
                        </h2>
                        <p className="text-lg text-muted-foreground animate-fade-in-up delay-100">
                            Bringing authentic Tamil Nadu flavors to your doorstep
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Image */}
                    <ScrollReveal>
                        <div className="opacity-0 animate-fade-in-up delay-200">
                            <div className="relative overflow-hidden rounded-3xl shadow-warm-lg border-4 border-border/50" style={{ aspectRatio: '16/9' }}>
                                <img
                                    src={COZY_KITCHEN_IMAGE.src}
                                    alt={COZY_KITCHEN_IMAGE.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Content */}
                    <ScrollReveal>
                        <div className="space-y-6 opacity-0 animate-fade-in-up delay-300">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Welcome to our Cloud Kitchen, where tradition meets taste. We are a
                                100% lady-run kitchen dedicated to bringing you the authentic flavors
                                of Tamil Nadu, prepared with love and care in our home.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Every dish is crafted using traditional recipes passed down through
                                generations, with the freshest ingredients sourced daily. We maintain
                                the highest standards of hygiene and quality, ensuring that every meal
                                is not just delicious but also safe and healthy.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <OrnamentalDivider />

                {/* Stats */}
                <ScrollReveal>
                    <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-8">
                        {STATS.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <Card
                                    key={index}
                                    className="opacity-0 animate-scale-bounce border-2 border-border/50"
                                    style={{ animationDelay: reducedMotion ? '0ms' : `${(index + 4) * 150}ms` }}
                                >
                                    <CardContent className="p-4 text-center space-y-2">
                                        <Icon className="w-6 h-6 mx-auto text-primary" />
                                        <div className="text-2xl font-bold text-primary">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {stat.label}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
