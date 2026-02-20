import { ImgHTMLAttributes } from 'react';

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    priority?: boolean;
    aspectRatio?: string;
}

export default function SmartImage({ 
    priority = false, 
    aspectRatio,
    className = '',
    ...props 
}: SmartImageProps) {
    const containerStyle = aspectRatio 
        ? { aspectRatio } 
        : undefined;

    return (
        <div 
            className={`relative overflow-hidden ${className}`}
            style={containerStyle}
        >
            <img
                {...props}
                loading={priority ? 'eager' : 'lazy'}
                decoding={priority ? 'sync' : 'async'}
                fetchPriority={priority ? 'high' : 'low'}
                className="w-full h-full object-cover"
            />
        </div>
    );
}
