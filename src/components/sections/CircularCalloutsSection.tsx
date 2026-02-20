import { prefersReducedMotion } from '@/lib/animations';
import ScrollReveal from '@/components/site/ScrollReveal';
import { CALLOUT_RECIPES, CALLOUT_SIGNATURE, CALLOUT_CATERING } from '@/data/assets';

const CIRCULAR_CALLOUTS = [
    {
        image: CALLOUT_RECIPES.src,
        title: 'Traditional Recipes',
        description: 'Authentic Tamil Nadu recipes passed down through generations, prepared with traditional methods and love.'
    },
    {
        image: CALLOUT_SIGNATURE.src,
        title: 'Signature Dishes',
        description: 'Our special homemade dishes that capture the true essence of Tamil Nadu cuisine with every bite.'
    },
    {
        image: CALLOUT_CATERING.src,
        title: 'Outdoor Catering',
        description: 'Professional catering services for your events, bringing authentic homemade flavors to your celebrations.'
    }
];

export default function CircularCalloutsSection() {
    const reducedMotion = prefersReducedMotion();

    return (
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {CIRCULAR_CALLOUTS.map((callout, index) => (
                            <div
                                key={index}
                                className="text-center space-y-4 opacity-0 animate-fade-in-up group"
                                style={{ animationDelay: reducedMotion ? '0ms' : `${index * 150}ms` }}
                            >
                                <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full shadow-warm border-4 border-border/50">
                                    <img
                                        src={callout.image}
                                        alt={callout.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-foreground">
                                    {callout.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                                    {callout.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
