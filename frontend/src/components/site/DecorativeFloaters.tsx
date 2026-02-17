import { useEffect, useState } from 'react';
import { INGREDIENT_ICONS } from '@/data/assets';
import { prefersReducedMotion } from '@/lib/animations';

export default function DecorativeFloaters() {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        setShouldAnimate(!prefersReducedMotion());
    }, []);

    if (!shouldAnimate) return null;

    const floaters = [
        { icon: INGREDIENT_ICONS[0], top: '10%', left: '5%', delay: '0s', duration: '6s' },
        { icon: INGREDIENT_ICONS[1], top: '25%', right: '8%', delay: '1s', duration: '7s' },
        { icon: INGREDIENT_ICONS[2], bottom: '20%', left: '3%', delay: '2s', duration: '8s' },
        { icon: INGREDIENT_ICONS[3], bottom: '35%', right: '5%', delay: '1.5s', duration: '6.5s' }
    ];

    return (
        <div className="absolute inset-0 pointer-events-none opacity-8 overflow-hidden">
            {floaters.map((floater, index) => (
                <img
                    key={index}
                    src={floater.icon.src}
                    alt=""
                    className="absolute w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 animate-float"
                    loading="lazy"
                    decoding="async"
                    style={{
                        top: floater.top,
                        bottom: floater.bottom,
                        left: floater.left,
                        right: floater.right,
                        animationDelay: floater.delay,
                        animationDuration: floater.duration
                    }}
                />
            ))}
        </div>
    );
}
