import { Star, TrendingUp, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/site/ScrollReveal';
import OrnamentalDivider from '@/components/site/OrnamentalDivider';
import {
    ABOUT_WORKING_AREA,
    ABOUT_HOTEL_LOOK,
    ABOUT_GROWTH_CHART,
    ABOUT_STORY_GROWTH_VEGGIES,
    ABOUT_WOMEN_WORKERS
} from '@/data/assets';
import { prefersReducedMotion } from '@/lib/animations';

const REVIEWS = [
    {
        name: 'Priya Sharma',
        rating: 5,
        comment: 'The most authentic South Indian food I have tasted outside my home! The idlis are so soft and the sambar is perfect.',
        location: 'Chennai'
    },
    {
        name: 'Rajesh Kumar',
        rating: 5,
        comment: 'Amazing homemade quality. You can taste the love and care in every dish. The pickles are exceptional!',
        location: 'Bangalore'
    },
    {
        name: 'Lakshmi Iyer',
        rating: 5,
        comment: 'Finally found a place that makes dosas like my grandmother used to. Fresh, crispy, and delicious!',
        location: 'Coimbatore'
    },
    {
        name: 'Arun Venkat',
        rating: 5,
        comment: 'The filter coffee is outstanding! Reminds me of home. Great food, great service, highly recommended.',
        location: 'Madurai'
    }
];

export default function AboutExpandedSections() {
    const reducedMotion = prefersReducedMotion();

    return (
        <div className="space-y-20">
            {/* Working Area Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                                Our Working Area
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                A clean, organized, and hygienic kitchen where every dish is prepared with care and attention to detail
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto">
                            <div className="relative overflow-hidden rounded-3xl shadow-warm-lg border-4 border-border/50" style={{ aspectRatio: '16/9' }}>
                                <img
                                    src={ABOUT_WORKING_AREA.src}
                                    alt={ABOUT_WORKING_AREA.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <OrnamentalDivider />

            {/* Hotel Look & Growth Section */}
            <section className="py-12 bg-gradient-to-b from-muted/20 to-background">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                                Our Cloud Kitchen Facility
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Modern infrastructure meets traditional cooking methods in our state-of-the-art cloud kitchen
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <ScrollReveal>
                            <div className="relative overflow-hidden rounded-3xl shadow-warm-lg border-4 border-border/50" style={{ aspectRatio: '16/9' }}>
                                <img
                                    src={ABOUT_HOTEL_LOOK.src}
                                    alt={ABOUT_HOTEL_LOOK.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                    Our Growth Journey
                                </h3>
                                <div className="relative overflow-hidden rounded-2xl shadow-warm border-2 border-border/50" style={{ aspectRatio: '3/2' }}>
                                    <img
                                        src={ABOUT_GROWTH_CHART.src}
                                        alt={ABOUT_GROWTH_CHART.alt}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <p className="mt-4 text-muted-foreground">
                                    From a small home kitchen to serving thousands of happy customers, our journey has been fueled by passion, quality, and your love.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <OrnamentalDivider />

            {/* Happy Customer Reviews Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                                Happy Customer Reviews
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Hear what our satisfied customers have to say about their experience with our authentic South Indian cuisine
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {REVIEWS.map((review, index) => (
                                <Card
                                    key={index}
                                    className="opacity-0 animate-fade-in-up hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-2 border-border/50"
                                    style={{ animationDelay: reducedMotion ? '0ms' : `${index * 100}ms` }}
                                >
                                    <CardContent className="p-6 space-y-3">
                                        <div className="flex gap-1 mb-2">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                            ))}
                                        </div>
                                        <p className="text-sm text-muted-foreground italic">
                                            "{review.comment}"
                                        </p>
                                        <div className="pt-2 border-t border-border">
                                            <p className="font-semibold text-sm">{review.name}</p>
                                            <p className="text-xs text-muted-foreground">{review.location}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <OrnamentalDivider />

            {/* Our Story & Growth Section */}
            <section className="py-12 bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                                Our Story & Growth
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                A journey rooted in tradition, nurtured by passion, and grown with fresh ingredients
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto">
                            <div className="relative overflow-hidden rounded-3xl shadow-warm-lg border-4 border-border/50" style={{ aspectRatio: '16/9' }}>
                                <img
                                    src={ABOUT_STORY_GROWTH_VEGGIES.src}
                                    alt={ABOUT_STORY_GROWTH_VEGGIES.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="mt-8 prose prose-lg max-w-none">
                                <p className="text-muted-foreground text-center">
                                    Like the fresh vegetables that form the foundation of our dishes, our business has grown organically from humble beginnings. 
                                    Each ingredient tells a story of careful selection, each recipe carries generations of wisdom, and every meal represents our commitment to authentic, homemade quality.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <OrnamentalDivider />

            {/* Our Workers Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                                Our Team of Women Entrepreneurs
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Empowering homemakers and women entrepreneurs who bring authentic home-cooked flavors to your table
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <ScrollReveal>
                            <div className="relative overflow-hidden rounded-3xl shadow-warm-lg border-4 border-border/50" style={{ aspectRatio: '16/9' }}>
                                <img
                                    src={ABOUT_WOMEN_WORKERS.src}
                                    alt={ABOUT_WOMEN_WORKERS.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Skilled Homemakers</h3>
                                        <p className="text-muted-foreground">
                                            Our team consists of talented homemakers who have mastered traditional South Indian cooking through years of experience and family recipes.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Heart className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Women Empowerment</h3>
                                        <p className="text-muted-foreground">
                                            We provide opportunities for women to become entrepreneurs, turning their culinary skills into sustainable livelihoods while preserving traditional cooking methods.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Growing Together</h3>
                                        <p className="text-muted-foreground">
                                            As our business grows, so do the opportunities for our team members. We believe in shared success and continuous learning.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
