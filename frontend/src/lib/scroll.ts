export function smoothScrollTo(elementId: string) {
    const container = document.getElementById('slides-container');
    const element = document.getElementById(elementId);
    
    if (!container || !element) return;

    element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

export function getActiveSection(sections: string[]): string {
    const container = document.getElementById('slides-container');
    if (!container) return sections[0];

    const scrollPosition = container.scrollTop + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
            return sections[i];
        }
    }

    return sections[0];
}
