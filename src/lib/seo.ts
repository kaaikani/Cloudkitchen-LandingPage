// SEO utility for dynamic metadata updates

interface RouteMetadata {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
}

const ROUTE_METADATA: Record<string, RouteMetadata> = {
    '/': {
        title: 'Cloud Kitchen - Authentic South Indian Home-Style Food',
        description: 'Experience authentic South Indian cuisine made with love. Fresh ingredients, traditional recipes, and homemade taste delivered to your door. Order dosa, idli, sambar rice, and more.',
        ogTitle: 'Cloud Kitchen - Authentic South Indian Home-Style Food',
        ogDescription: 'Experience authentic South Indian cuisine made with love. Fresh ingredients, traditional recipes, and homemade taste delivered to your door.'
    },
    '/menu': {
        title: 'Our Menu - Cloud Kitchen | South Indian Dishes',
        description: 'Browse our complete menu of authentic South Indian dishes including starters, main courses, desserts, beverages, and pickles. Fresh ingredients, traditional recipes, homemade quality.',
        ogTitle: 'Our Menu - Cloud Kitchen',
        ogDescription: 'Browse our complete menu of authentic South Indian dishes. Fresh ingredients, traditional recipes, homemade quality.'
    },
    '/about': {
        title: 'About Us - Cloud Kitchen | Our Story & Values',
        description: 'Learn about our journey, values, and commitment to authentic South Indian cuisine. Meet our team of dedicated women entrepreneurs bringing homemade taste to your table.',
        ogTitle: 'About Us - Cloud Kitchen',
        ogDescription: 'Learn about our journey, values, and commitment to authentic South Indian cuisine. Meet our dedicated team bringing homemade taste to your table.'
    },
    '/order': {
        title: 'Place Your Order - Cloud Kitchen | Easy Delivery',
        description: 'Order authentic South Indian food for delivery. Select your location, choose from our menu, and place your order via WhatsApp. We deliver across Tamil Nadu cities including Chennai, Coimbatore, Madurai, and more.',
        ogTitle: 'Place Your Order - Cloud Kitchen',
        ogDescription: 'Order authentic South Indian food for delivery. Select your location and place your order via WhatsApp for quick service.'
    },
    '/contact': {
        title: 'Contact Us - Cloud Kitchen | Get in Touch',
        description: 'Contact Cloud Kitchen for orders, inquiries, or catering services. Reach us via WhatsApp or email. We\'re here to serve you authentic South Indian cuisine with love.',
        ogTitle: 'Contact Us - Cloud Kitchen',
        ogDescription: 'Contact Cloud Kitchen for orders, inquiries, or catering services. Reach us via WhatsApp or email for quick response.'
    }
};

export function updateSEO(route: string): void {
    const metadata = ROUTE_METADATA[route] || ROUTE_METADATA['/'];

    // Update document title
    document.title = metadata.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', metadata.description);
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', metadata.ogTitle || metadata.title);
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', metadata.ogDescription || metadata.description);
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.setAttribute('content', metadata.ogTitle || metadata.title);
    }

    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
        twitterDescription.setAttribute('content', metadata.ogDescription || metadata.description);
    }
}
