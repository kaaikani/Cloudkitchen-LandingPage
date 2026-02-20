export const ANIMATION_DURATION = {
    fast: 300,
    normal: 600,
    slow: 1000
};

export const ANIMATION_EASING = {
    easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.6, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

let cachedReducedMotion: boolean | null = null;

export function prefersReducedMotion(): boolean {
    if (cachedReducedMotion !== null) {
        return cachedReducedMotion;
    }
    
    if (typeof window === 'undefined') {
        return false;
    }
    
    cachedReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return cachedReducedMotion;
}

export function getAnimationDuration(duration: keyof typeof ANIMATION_DURATION): number {
    return prefersReducedMotion() ? 1 : ANIMATION_DURATION[duration];
}
