import { useState } from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ScrollReveal from '@/components/site/ScrollReveal';
import OrnamentalDivider from '@/components/site/OrnamentalDivider';
import GreenAccent from '@/components/site/GreenAccent';
import { useCart } from '@/state/cart';

const DELIVERY_AREAS = [
    'Chennai',
    'Coimbatore',
    'Madurai',
    'Tiruchirappalli',
    'Salem',
    'Tirunelveli',
    'Erode',
    'Vellore',
    'Thoothukudi',
    'Thanjavur'
];

const PHONE_NUMBER = '+919876543210';
const WHATSAPP_NUMBER = '919876543210';

export default function OrderSection() {
    const { items, totalPrice } = useCart();
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [otherLocation, setOtherLocation] = useState<string>('');
    const [locationError, setLocationError] = useState<string>('');

    const handleWhatsAppOrder = () => {
        // Validate location
        const finalLocation = selectedLocation === 'other' ? otherLocation : selectedLocation;
        
        if (!finalLocation || finalLocation.trim().length === 0) {
            setLocationError('Please select or enter your delivery location');
            return;
        }

        setLocationError('');

        // Build WhatsApp message
        let message = `*New Order from Cloud Kitchen*\n\n`;
        message += `*Delivery Location:* ${finalLocation}\n\n`;

        if (items.length > 0) {
            message += `*Order Items:*\n`;
            items.forEach((item) => {
                message += `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}\n`;
            });
            message += `\n*Total: ₹${totalPrice}*\n`;
        }

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const isOrderDisabled = items.length === 0 || (!selectedLocation || (selectedLocation === 'other' && !otherLocation.trim()));

    return (
        <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative">
            <GreenAccent position="bottom-right" size="md" />
            
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 animate-fade-in-up">
                            Place Your Order
                        </h1>
                        <p className="text-lg text-muted-foreground animate-fade-in-up delay-100">
                            Select your delivery location and order authentic South Indian food via WhatsApp
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Left Column: Location Selection & Cart */}
                    <div className="space-y-6">
                        {/* Delivery Location Selection */}
                        <ScrollReveal>
                            <Card className="border-2 border-primary/50 opacity-0 animate-fade-in-up delay-200">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-primary" />
                                        Select Delivery Location
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="location">Choose your area *</Label>
                                        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                                            <SelectTrigger id="location" className={locationError ? 'border-destructive' : ''}>
                                                <SelectValue placeholder="Select delivery area" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {DELIVERY_AREAS.map((area) => (
                                                    <SelectItem key={area} value={area}>
                                                        {area}
                                                    </SelectItem>
                                                ))}
                                                <SelectItem value="other">Other Area</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {selectedLocation === 'other' && (
                                        <div className="space-y-2 animate-fade-in-up">
                                            <Label htmlFor="otherLocation">Enter your location</Label>
                                            <Input
                                                id="otherLocation"
                                                value={otherLocation}
                                                onChange={(e) => setOtherLocation(e.target.value)}
                                                placeholder="Enter your city or area"
                                                className={locationError ? 'border-destructive' : ''}
                                            />
                                        </div>
                                    )}

                                    {locationError && (
                                        <p className="text-sm text-destructive">{locationError}</p>
                                    )}

                                    <div className="pt-2 text-sm text-muted-foreground">
                                        <p className="font-medium mb-2">We deliver to:</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {DELIVERY_AREAS.map((area) => (
                                                <div key={area} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {area}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        {/* Cart Summary */}
                        <ScrollReveal>
                            <div className="opacity-0 animate-fade-in-up delay-300">
                                {items.length > 0 ? (
                                    <Card className="border-2 border-primary/50">
                                        <CardHeader>
                                            <CardTitle>Your Cart</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                {items.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className="flex justify-between text-sm"
                                                    >
                                                        <span>
                                                            {item.name} x{item.quantity}
                                                        </span>
                                                        <span className="font-semibold">
                                                            ₹{item.price * item.quantity}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="border-t pt-2 flex justify-between font-bold text-lg">
                                                <span>Total</span>
                                                <span className="text-primary">₹{totalPrice}</span>
                                            </div>

                                            {/* Green WhatsApp Order Button */}
                                            <Button
                                                onClick={handleWhatsAppOrder}
                                                disabled={isOrderDisabled}
                                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-lg"
                                                size="lg"
                                            >
                                                <SiWhatsapp className="mr-2 h-6 w-6" />
                                                Place Order on WhatsApp
                                            </Button>

                                            {isOrderDisabled && items.length > 0 && (
                                                <p className="text-xs text-center text-muted-foreground">
                                                    Please select your delivery location to continue
                                                </p>
                                            )}
                                        </CardContent>
                                    </Card>
                                ) : (
                                    <Card className="border-2 border-border/50">
                                        <CardContent className="py-12 text-center">
                                            <p className="text-muted-foreground mb-4">
                                                Your cart is empty. Add items from the menu to get started!
                                            </p>
                                            <Button
                                                onClick={() => window.location.hash = '/menu'}
                                                variant="outline"
                                            >
                                                Browse Menu
                                            </Button>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        </ScrollReveal>

                        {/* Payment Options - Text Only with Animation */}
                        <ScrollReveal>
                            <Card className="border-2 border-border/50 opacity-0 animate-fade-in-up delay-400">
                                <CardHeader>
                                    <CardTitle>Payment Options</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3 text-sm text-muted-foreground">
                                        <p className="animate-payment-text">
                                            ðŸ’³ <span className="font-medium">Cash on Delivery</span> - Pay when you receive your order
                                        </p>
                                        <p className="animate-payment-text delay-100">
                                            ðŸ“± <span className="font-medium">UPI Payment</span> - Google Pay, PhonePe, Paytm accepted
                                        </p>
                                        <p className="animate-payment-text delay-200">
                                            ðŸ’° <span className="font-medium">Bank Transfer</span> - Direct bank transfer available
                                        </p>
                                        <p className="text-xs pt-2 text-center">
                                            Payment details will be shared after order confirmation
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        {/* Highly Visible Phone Number */}
                        <ScrollReveal>
                            <div className="opacity-0 animate-fade-in-up delay-500">
                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="flex items-center justify-center gap-3 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border-2 border-primary/30"
                                >
                                    <Phone className="h-6 w-6 text-primary" />
                                    <div className="text-center">
                                        <div className="text-xs text-muted-foreground">Call us directly</div>
                                        <div className="text-xl font-bold text-primary">{PHONE_NUMBER}</div>
                                    </div>
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Quick Contact (Logo Style) */}
                    <ScrollReveal>
                        <div className="opacity-0 animate-fade-in-up delay-300">
                            <Card className="border-2 border-border/50 bg-gradient-to-br from-background to-muted/30">
                                <CardContent className="py-12">
                                    <div className="text-center space-y-6">
                                        {/* Logo/Emblem Area */}
                                        <div className="flex justify-center">
                                            <div className="relative">
                                                <img
                                                src="/assets/generated/food-circle-vada.dim_256x256.png"
                                                alt="Cloud Kitchen"
                                                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl animate-logo-glow"
                                                />

                                                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl -z-10" />
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                                                Cloud Kitchen
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Authentic South Indian Home-Style Food
                                            </p>
                                        </div>

                                        <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full" />

                                        <div className="space-y-3 pt-4">
                                            <h4 className="text-lg font-semibold text-foreground">
                                                Quick Contact
                                            </h4>
                                            
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start text-left h-auto py-4 border-2 hover:border-green-600 hover:bg-green-50 dark:hover:bg-green-950"
                                                asChild
                                            >
                                                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                                                    <MessageCircle className="mr-3 h-6 w-6 text-green-600" />
                                                    <div>
                                                        <div className="font-semibold text-base">WhatsApp</div>
                                                        <div className="text-sm text-muted-foreground">
                                                            Chat with us instantly
                                                        </div>
                                                    </div>
                                                </a>
                                            </Button>

                                            <Button
                                                variant="outline"
                                                className="w-full justify-start text-left h-auto py-4 border-2 hover:border-primary hover:bg-primary/5"
                                                asChild
                                            >
                                                <a href={`tel:${PHONE_NUMBER}`}>
                                                    <Phone className="mr-3 h-6 w-6 text-primary" />
                                                    <div>
                                                        <div className="font-semibold text-base">Call Us</div>
                                                        <div className="text-sm text-primary font-medium">
                                                            {PHONE_NUMBER}
                                                        </div>
                                                    </div>
                                                </a>
                                            </Button>
                                        </div>

                                        <div className="pt-6 text-xs text-muted-foreground">
                                            <p>Available 7 days a week</p>
                                            <p>9:00 AM - 9:00 PM</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </ScrollReveal>
                </div>

                <OrnamentalDivider />
            </div>
        </section>
    );
}

