import { Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const appIdentifier = encodeURIComponent(
        typeof window !== 'undefined' ? window.location.hostname : 'cloud-kitchen'
    );

    return (
        <footer className="bg-muted/30 border-t border-border mt-20">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center text-sm text-muted-foreground">
                    <p className="flex items-center justify-center gap-2">
                        © {currentYear} Cloud Kitchen. Built By AVS Ecom HUB
                        <Heart className="h-4 w-4 text-primary fill-primary" /> {''}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
