// Lightweight hash-based router for multi-page navigation
type RouteChangeListener = (route: string) => void;

class Router {
    private listeners: Set<RouteChangeListener> = new Set();
    private currentRoute: string = '/';

    constructor() {
        // Initialize from hash or default to home
        this.currentRoute = this.getRouteFromHash();
        
        // Listen to hash changes
        window.addEventListener('hashchange', () => {
            this.currentRoute = this.getRouteFromHash();
            this.notifyListeners();
            this.scrollToTop();
        });
    }

    private getRouteFromHash(): string {
        const hash = window.location.hash.slice(1);
        return hash || '/';
    }

    private notifyListeners() {
        this.listeners.forEach(listener => listener(this.currentRoute));
    }

    private scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    subscribe(listener: RouteChangeListener): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    navigate(route: string) {
        window.location.hash = route;
    }

    getCurrentRoute(): string {
        return this.currentRoute;
    }
}

export const router = new Router();

export function useRouter() {
    const [currentRoute, setCurrentRoute] = React.useState(router.getCurrentRoute());

    React.useEffect(() => {
        return router.subscribe(setCurrentRoute);
    }, []);

    return {
        currentRoute,
        navigate: (route: string) => router.navigate(route)
    };
}

// Import React for hooks
import * as React from 'react';
