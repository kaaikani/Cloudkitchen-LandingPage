import { useState, useRef } from 'react';
import { Plus, Check } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/state/cart';
import type { MenuItem } from '@/data/menu';

interface DishCardProps {
  item: MenuItem;
  priority?: boolean;
}

export default function DishCard({ item, priority = false }: DishCardProps) {
  const { addItem, getItemQuantity } = useCart();

  const [isAdding, setIsAdding] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const quantity = getItemQuantity(item.id);

  const handleAddToCart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (isAdding) return;

    setIsAdding(true);

    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });

    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
      setIsAdding(false);
    }, 800);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-2 border-border/50">
      <div
        className="relative overflow-hidden bg-muted"
        style={{ aspectRatio: '4/3' }}
      >
        <img
          ref={imageRef}
          src={item.image}
          alt={item.name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setImageLoaded(true)}
        />

        {quantity > 0 && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm shadow-lg border-2 border-white">
            {quantity}
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">
          {item.name}
        </h3>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 min-h-[2.5rem]">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            ₹{item.price}
          </span>

          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded border border-border/50">
            {item.category}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          onTouchEnd={handleAddToCart}
          disabled={isAdding}
          className="w-full h-12 text-base group-hover:animate-glow-pulse motion-reduce:animate-none"
        >
          {showCheck ? (
            <>
              <Check className="mr-2 h-5 w-5 animate-tick" />
              Added!
            </>
          ) : (
            <>
              <Plus className="mr-2 h-5 w-5" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
