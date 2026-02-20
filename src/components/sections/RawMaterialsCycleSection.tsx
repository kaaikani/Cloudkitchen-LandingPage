import { useEffect, useState } from 'react';
import ScrollReveal from '@/components/site/ScrollReveal';
import { RAW_MATERIALS_CYCLE } from '@/data/assets';
import { prefersReducedMotion } from '@/lib/animations';

export default function RawMaterialsCycleSection() {
    const [activeStep, setActiveStep] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        setShouldAnimate(!prefersReducedMotion());
    }, []);

    useEffect(() => {
        if (!shouldAnimate) return;

        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % RAW_MATERIALS_CYCLE.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [shouldAnimate]);

    return (
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                            Our Raw Materials Journey
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            From farm to kitchen, we source the finest ingredients directly from local farmers and organic farms
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="max-w-5xl mx-auto">
                        <div className="relative">
                            {/* Cycle container */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
                                {RAW_MATERIALS_CYCLE.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`text-center transition-all duration-700 ${
                                            shouldAnimate && activeStep === index
                                                ? 'scale-110 z-10'
                                                : 'scale-100'
                                        }`}
                                    >
                                        <div
                                            className={`relative mb-4 mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden transition-all duration-700 ${
                                                shouldAnimate && activeStep === index
                                                    ? 'shadow-warm-lg ring-4 ring-primary'
                                                    : 'shadow-warm ring-2 ring-primary/30'
                                            }`}
                                        >
                                            <img
                                                src={step.src}
                                                alt={step.alt}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-700 ${
                                                    shouldAnimate && activeStep === index
                                                        ? 'opacity-0'
                                                        : 'opacity-60'
                                                }`}
                                            />
                                        </div>
                                        <div
                                            className={`transition-all duration-500 ${
                                                shouldAnimate && activeStep === index
                                                    ? 'text-primary font-bold'
                                                    : 'text-foreground'
                                            }`}
                                        >
                                            <div className="text-sm font-semibold mb-1 text-muted-foreground">
                                                Step {index + 1}
                                            </div>
                                            <h3 className="text-lg font-serif font-semibold">
                                                {step.label}
                                            </h3>
                                        </div>
                                    </div>
                                ))}

                                {/* Connecting arrows (hidden on mobile) */}
                                <svg
                                    className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
                                    style={{ zIndex: -1 }}
                                >
                                    <defs>
                                        <marker
                                            id="arrowhead"
                                            markerWidth="10"
                                            markerHeight="10"
                                            refX="9"
                                            refY="3"
                                            orient="auto"
                                        >
                                            <polygon
                                                points="0 0, 10 3, 0 6"
                                                fill="oklch(var(--primary) / 0.3)"
                                            />
                                        </marker>
                                    </defs>
                                    <path
                                        d="M 120 96 Q 200 96 280 96"
                                        stroke="oklch(var(--primary) / 0.3)"
                                        strokeWidth="2"
                                        fill="none"
                                        markerEnd="url(#arrowhead)"
                                    />
                                    <path
                                        d="M 440 96 Q 520 96 600 96"
                                        stroke="oklch(var(--primary) / 0.3)"
                                        strokeWidth="2"
                                        fill="none"
                                        markerEnd="url(#arrowhead)"
                                    />
                                    <path
                                        d="M 760 96 Q 840 96 920 96"
                                        stroke="oklch(var(--primary) / 0.3)"
                                        strokeWidth="2"
                                        fill="none"
                                        markerEnd="url(#arrowhead)"
                                    />
                                </svg>
                            </div>

                            {/* Progress indicator */}
                            {shouldAnimate && (
                                <div className="flex justify-center gap-2 mt-12">
                                    {RAW_MATERIALS_CYCLE.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveStep(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                activeStep === index
                                                    ? 'bg-primary w-8'
                                                    : 'bg-primary/30 hover:bg-primary/50'
                                            }`}
                                            aria-label={`Go to step ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
