document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll(
        '.methodology-section, .value-section, .trace-sectors-section, .pricing-section, .pillars-card, .step-card, .value-card, .sector-card, .plan-card, .comparison-table-wrapper, .dashboard-preview-section, .testimonial-card, .faq-section, .faq-item'
    );

    revealElements.forEach((element, index) => {
        element.classList.add('reveal-on-scroll');
        element.style.setProperty('--reveal-delay', `${(index % 4) * 90}ms`);
    });

    if (!('IntersectionObserver' in window)) {
        revealElements.forEach(element => element.classList.add('is-revealed'));
        return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealElements.forEach(element => revealObserver.observe(element));
});
