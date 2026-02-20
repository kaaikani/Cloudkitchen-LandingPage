import { Leaf, Heart, Clock, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/site/ScrollReveal';
import { WHY_CHOOSE_GRID_IMAGES } from '@/data/assets';
import { prefersReducedMotion } from '@/lib/animations';

const FEATURES = [
    {
        icon: Leaf,
        title: 'Fresh Ingredients',
        description: 'Sourced daily from local markets for authentic taste'
    },
    {
        icon: Heart,
        title: 'Made with Love',
        description: 'Every dish prepared with care by our home chef'
    },
    {
        icon: Clock,
        title: 'Quick Delivery',
        description: 'Hot and fresh meals delivered to your doorstep'
    },
    {
        icon: Award,
        title: 'Traditional Recipes',
        description: 'Authentic Tamil Nadu flavors passed through generations'
    }
];

export default function WhyChooseUsSection() {
    const reducedMotion = prefersReducedMotion();

    return (
        <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 animate-fade-in-up">
                            Why Choose Us
                        </h2>
                        <p className="text-lg text-muted-foreground animate-fade-in-up delay-100">
                            Experience the difference of homemade quality
                        </p>
                    </div>
                </ScrollReveal>

                {/* Features Grid */}
                <ScrollReveal>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {FEATURES.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <Card
                                    key={index}
                                    className="opacity-0 animate-fade-in-up hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-2 border-border/50"
                                    style={{ animationDelay: reducedMotion ? '0ms' : `${index * 100}ms` }}
                                >
                                    <CardContent className="p-6 text-center space-y-3">
                                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </ScrollReveal>

                {/* Image Grid */}
                <ScrollReveal>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-300">
                        {WHY_CHOOSE_GRID_IMAGES.map((image, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-2xl shadow-warm aspect-square group border-2 border-border/50"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
