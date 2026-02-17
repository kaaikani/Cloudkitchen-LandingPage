import ScrollReveal from '@/components/site/ScrollReveal';
import { OFFERS_BANNER } from '@/data/assets';
import { Leaf, Heart, Sparkles } from 'lucide-react';

export default function OffersNaturalFoodSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                            Offers on Natural Food
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Fresh, organic, and wholesome ingredients in every dish
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="max-w-5xl mx-auto">
                        <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
                            <img
                                src={OFFERS_BANNER.src}
                                alt={OFFERS_BANNER.alt}
                                className="w-full h-auto"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                                <div className="flex items-center gap-2 mb-4">
                                    <Leaf className="w-6 h-6 text-secondary" />
                                    <span className="text-secondary font-semibold text-lg">
                                        100% Natural & Organic
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                                    Special Offer: 15% Off on All Natural Food Items
                                </h3>
                                <p className="text-lg mb-6 opacity-90 max-w-2xl">
                                    Experience the pure taste of nature with our carefully sourced organic ingredients. 
                                    Every dish is prepared with love and the finest natural produce.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <Heart className="w-5 h-5" />
                                        <span>Farm Fresh</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <Sparkles className="w-5 h-5" />
                                        <span>No Preservatives</span>
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
