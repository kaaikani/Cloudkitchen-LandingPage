import { FOOD_CIRCLE_ICONS } from '@/data/assets';

interface FloaterPosition {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    delay: number;
}

const FLOATER_POSITIONS: FloaterPosition[] = [
    { top: '10%', left: '5%', delay: 0 },
    { top: '20%', right: '8%', delay: 1 },
    { bottom: '15%', left: '10%', delay: 2 },
    { top: '60%', right: '5%', delay: 0.5 },
    { bottom: '25%', right: '12%', delay: 1.5 },
    { top: '40%', left: '3%', delay: 2.5 }
];

export default function FoodCircleFloaters() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            {FLOATER_POSITIONS.map((position, index) => {
                const icon = FOOD_CIRCLE_ICONS[index % FOOD_CIRCLE_ICONS.length];
                return (
                    <div
                        key={index}
                        className="absolute w-16 h-16 md:w-20 md:h-20 opacity-20 animate-food-float"
                        style={{
                            top: position.top,
                            bottom: position.bottom,
                            left: position.left,
                            right: position.right,
                            animationDelay: `${position.delay}s`
                        }}
                    >
                        <img
                            src={icon.src}
                            alt=""
                            className="w-full h-full object-contain rounded-full"
                            loading="lazy"
                        />
                    </div>
                );
            })}
        </div>
    );
}
