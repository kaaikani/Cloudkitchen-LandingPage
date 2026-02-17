import { useEffect, useRef, useState, type ReactNode } from 'react';
import { prefersReducedMotion } from '@/lib/animations';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    stagger?: boolean;
    staggerDelay?: number;
    visible ?: "opacity-100" ; 
}

export default function ScrollReveal({
    children,
    className = '',
    stagger = false,
    staggerDelay = 100
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const reducedMotion = prefersReducedMotion();

    useEffect(() => {
        // Show immediately when animations are reduced or IntersectionObserver is unavailable.
        if (reducedMotion || typeof IntersectionObserver === 'undefined') {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Unobserve after revealing to improve performance
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [reducedMotion]);

    return (
        <div ref={ref} className={className}>
            {isVisible && children}
        </div>
    );
}
