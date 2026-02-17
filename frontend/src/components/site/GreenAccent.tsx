import { prefersReducedMotion } from '@/lib/animations';

interface GreenAccentProps {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    size?: 'sm' | 'md' | 'lg';
}

export default function GreenAccent({ 
    position = 'top-right',
    size = 'md'
}: GreenAccentProps) {
    const reducedMotion = prefersReducedMotion();

    const positionClasses = {
        'top-left': 'top-8 left-8',
        'top-right': 'top-8 right-8',
        'bottom-left': 'bottom-8 left-8',
        'bottom-right': 'bottom-8 right-8'
    };

    const sizeClasses = {
        'sm': 'w-12 h-12',
        'md': 'w-16 h-16',
        'lg': 'w-24 h-24'
    };

    return (
        <div 
            className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none z-0`}
            aria-hidden="true"
        >
            <div 
                className={`w-full h-full rounded-full bg-gradient-to-br from-green-400/20 to-green-600/20 blur-xl ${!reducedMotion ? 'animate-green-bounce' : ''}`}
            />
        </div>
    );
}
