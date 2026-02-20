import { useState, useEffect } from "react";
import { HERO_CAROUSEL, INGREDIENT_ICONS } from "@/data/assets";
import { Button } from "@/components/ui/button";
import { router } from "@/lib/router";
import { prefersReducedMotion } from "@/lib/animations";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % HERO_CAROUSEL.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-accent/10">
      {/* Floating Ingredients */}
      {!reducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          {INGREDIENT_ICONS.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt=""
              className="absolute w-16 h-16 md:w-24 md:h-24 opacity-20 animate-float"
              loading="lazy"
              decoding="async"
              style={{
                top: `${15 + index * 20}%`,
                left: `${10 + index * 20}%`,
                animationDelay: `${index * 1.5}s`,
              }}
            />
          ))}

          {INGREDIENT_ICONS.map((icon, index) => (
            <img
              key={`right-${index}`}
              src={icon.src}
              alt=""
              className="absolute w-16 h-16 md:w-24 md:h-24 opacity-20 animate-float"
              loading="lazy"
              decoding="async"
              style={{
                top: `${20 + index * 18}%`,
                right: `${5 + index * 15}%`,
                animationDelay: `${index * 1.2 + 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground">
              <span className="text-primary">100% Homemade</span>
              <br />
              Tamil Nadu Flavours
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground">
              Prepared with Love by a Woman Entrepreneur
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                className="text-lg px-8 py-6"
                onClick={() => router.navigate("/menu")}
              >
                Explore Homemade Menu
              </Button>

              <Button
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => router.navigate("/order")}
              >
                Order Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 bg-card/50 rounded-lg border">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Fresh Daily Cooking
                </div>
              </div>

              <div className="text-center p-4 bg-card/50 rounded-lg border">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">
                  No Preservatives
                </div>
              </div>

              <div className="text-center p-4 bg-card/50 rounded-lg border">
                <div className="text-2xl font-bold text-primary">⭐</div>
                <div className="text-sm text-muted-foreground">
                  Trusted Local Taste
                </div>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative h-[400px] md:h-[500px]">
            {HERO_CAROUSEL.map((dish, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <img
                  src={dish.src}
                  alt={dish.alt}
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "sync" : "async"}
                />
              </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {HERO_CAROUSEL.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-primary w-8"
                      : "bg-white/50 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
