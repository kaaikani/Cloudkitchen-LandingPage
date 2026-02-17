import { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import ScrollReveal from '@/components/site/ScrollReveal';
import GreenAccent from '@/components/site/GreenAccent';
import { validateContactForm, type FormErrors } from '@/lib/validation';
import { ROYAL_PARCHMENT_BG, ROYAL_ORNAMENTAL_FRAME, ROYAL_WAX_SEAL } from '@/data/assets';

const WHATSAPP_NUMBER = '919876543210';
const PHONE_NUMBER = '+919876543210';
const EMAIL_ADDRESS = 'contact@cloudkitchen.com';

type SendMethod = 'whatsapp' | 'email';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [sendMethod, setSendMethod] = useState<SendMethod>('whatsapp');
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const validationErrors = validateContactForm(formData, sendMethod);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);

            if (sendMethod === 'whatsapp') {
                // Build WhatsApp message
                let message = `*Contact Message from Cloud Kitchen Website*\n\n`;
                message += `*Name:* ${formData.name}\n`;
                if (formData.phone) {
                    message += `*Phone:* ${formData.phone}\n`;
                }
                message += `\n*Message:*\n${formData.message}`;

                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            } else {
                // Build mailto link
                const subject = `Contact from ${formData.name}`;
                let body = `Name: ${formData.name}\n`;
                if (formData.phone) {
                    body += `Phone: ${formData.phone}\n`;
                }
                body += `Email: ${formData.email}\n\n`;
                body += `Message:\n${formData.message}`;

                const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoUrl;
            }

            // Reset form
            setTimeout(() => {
                setFormData({ name: '', phone: '', email: '', message: '' });
                setIsSubmitting(false);
            }, 1000);
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
            <GreenAccent position="top-right" size="md" />
            
            {/* Royal Background */}
            <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `url(${ROYAL_PARCHMENT_BG.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            
            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 animate-fade-in-up">
                            Contact Us
                        </h1>
                        <p className="text-lg text-muted-foreground animate-fade-in-up delay-100">
                            Reach out to us via WhatsApp or Email for inquiries, orders, or catering services
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Royal Contact Form */}
                    <ScrollReveal>
                        <div className="relative opacity-0 animate-fade-in-up delay-200">
                            {/* Ornamental Frame */}
                            <div 
                                className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{
                                    backgroundImage: `url(${ROYAL_ORNAMENTAL_FRAME.src})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                            
                            <Card className="border-2 border-primary/30 shadow-warm-lg relative bg-gradient-to-br from-background via-background to-muted/20">
                                <CardHeader className="text-center pb-2">
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={ROYAL_WAX_SEAL.src}
                                            alt=""
                                            className="w-16 h-16 opacity-60"
                                        />
                                    </div>
                                    <CardTitle className="text-2xl font-serif">Send Us a Message</CardTitle>
                                    <p className="text-sm text-muted-foreground italic">
                                        Choose your preferred method of contact
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Send Method Selection */}
                                        <div className="space-y-3">
                                            <Label className="text-base font-semibold">Contact Method</Label>
                                            <RadioGroup value={sendMethod} onValueChange={(value) => setSendMethod(value as SendMethod)}>
                                                <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-border hover:border-green-600 transition-colors cursor-pointer">
                                                    <RadioGroupItem value="whatsapp" id="whatsapp" />
                                                    <Label htmlFor="whatsapp" className="flex items-center gap-2 cursor-pointer flex-1">
                                                        <SiWhatsapp className="h-5 w-5 text-green-600" />
                                                        <div>
                                                            <div className="font-medium">WhatsApp Message</div>
                                                            <div className="text-xs text-muted-foreground">Quick mobile messaging</div>
                                                        </div>
                                                    </Label>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-border hover:border-primary transition-colors cursor-pointer">
                                                    <RadioGroupItem value="email" id="email" />
                                                    <Label htmlFor="email" className="flex items-center gap-2 cursor-pointer flex-1">
                                                        <Mail className="h-5 w-5 text-primary" />
                                                        <div>
                                                            <div className="font-medium">Email</div>
                                                            <div className="text-xs text-muted-foreground">Traditional correspondence</div>
                                                        </div>
                                                    </Label>
                                                </div>
                                            </RadioGroup>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="name">Your Name *</Label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                placeholder="Enter your full name"
                                                className={errors.name ? 'border-destructive' : ''}
                                            />
                                            {errors.name && (
                                                <p className="text-sm text-destructive">{errors.name}</p>
                                            )}
                                        </div>

                                        {sendMethod === 'whatsapp' && (
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number (Optional)</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, phone: e.target.value })
                                                    }
                                                    placeholder="10-digit mobile number"
                                                    className={errors.phone ? 'border-destructive' : ''}
                                                />
                                                {errors.phone && (
                                                    <p className="text-sm text-destructive">{errors.phone}</p>
                                                )}
                                            </div>
                                        )}

                                        {sendMethod === 'email' && (
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    placeholder="your.email@example.com"
                                                    className={errors.email ? 'border-destructive' : ''}
                                                />
                                                {errors.email && (
                                                    <p className="text-sm text-destructive">{errors.email}</p>
                                                )}
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Your Message *</Label>
                                            <Textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, message: e.target.value })
                                                }
                                                placeholder="Tell us how we can help you..."
                                                rows={5}
                                                className={errors.message ? 'border-destructive' : ''}
                                            />
                                            {errors.message && (
                                                <p className="text-sm text-destructive">{errors.message}</p>
                                            )}
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full font-semibold"
                                            disabled={isSubmitting}
                                        >
                                            <Send className="mr-2 h-5 w-5" />
                                            {isSubmitting 
                                                ? 'Sending...' 
                                                : sendMethod === 'whatsapp' 
                                                    ? 'Send via WhatsApp' 
                                                    : 'Send via Email'
                                            }
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </ScrollReveal>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Highly Visible Phone Number */}
                        <ScrollReveal>
                            <Card className="border-2 border-primary/50 opacity-0 animate-fade-in-up delay-300 bg-gradient-to-br from-primary/5 to-background">
                                <CardContent className="py-8">
                                    <div className="text-center space-y-4">
                                        <Phone className="h-12 w-12 text-primary mx-auto" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                                Call Us Directly
                                            </h3>
                                            <a 
                                                href={`tel:${PHONE_NUMBER}`}
                                                className="text-3xl font-bold text-primary hover:text-accent transition-colors"
                                            >
                                                {PHONE_NUMBER}
                                            </a>
                                            <p className="text-sm text-muted-foreground mt-2">
                                                Available 7 days a week, 9:00 AM - 9:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        {/* WhatsApp Quick Contact */}
                        <ScrollReveal>
                            <Card className="border-2 border-green-600/30 opacity-0 animate-fade-in-up delay-400 bg-gradient-to-br from-green-50 to-background dark:from-green-950 dark:to-background">
                                <CardContent className="py-8">
                                    <div className="text-center space-y-4">
                                        <SiWhatsapp className="h-12 w-12 text-green-600 mx-auto" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                                WhatsApp Us
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                Get instant responses to your queries
                                            </p>
                                            <Button
                                                asChild
                                                className="bg-green-600 hover:bg-green-700 text-white"
                                            >
                                                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                                                    <SiWhatsapp className="mr-2 h-5 w-5" />
                                                    Chat on WhatsApp
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        {/* Email Contact */}
                        <ScrollReveal>
                            <Card className="border-2 border-border/50 opacity-0 animate-fade-in-up delay-500">
                                <CardContent className="py-8">
                                    <div className="text-center space-y-4">
                                        <Mail className="h-12 w-12 text-primary mx-auto" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                                Email Us
                                            </h3>
                                            <a 
                                                href={`mailto:${EMAIL_ADDRESS}`}
                                                className="text-lg font-medium text-primary hover:text-accent transition-colors"
                                            >
                                                {EMAIL_ADDRESS}
                                            </a>
                                            <p className="text-sm text-muted-foreground mt-2">
                                                We'll respond within 24 hours
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        {/* Business Hours */}
                        <ScrollReveal>
                            <Card className="border-2 border-border/50 opacity-0 animate-fade-in-up delay-600">
                                <CardHeader>
                                    <CardTitle className="text-center">Business Hours</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-center">
                                        <p className="text-sm">
                                            <span className="font-semibold">Monday - Sunday:</span> 9:00 AM - 9:00 PM
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Orders accepted throughout the day
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
