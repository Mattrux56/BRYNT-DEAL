document.addEventListener('DOMContentLoaded', async () => {
    const components = [
        { selector: '[data-component="header"]', file: 'components/common/header.html' },
        { selector: '[data-component="hero"]', file: 'components/home/hero.html' },
        { selector: '[data-component="kpi-band"]', file: 'components/home/indicadores.html' },
        { selector: '[data-component="methodology"]', file: 'components/home/methodology.html' },
        { selector: '[data-component="value-section"]', file: 'components/home/value_section.html' },
        { selector: '[data-component="plans"]', file: 'components/home/plans.html' },
        { selector: '[data-component="faq"]', file: 'components/common/faq.html' },
        { selector: '[data-component="modal"]', file: 'components/common/modal.html' }
    ];

    for (const component of components) {
        const target = document.querySelector(component.selector);

        if (!target) {
            continue;
        }

        try {
            const response = await fetch(component.file);

            if (!response.ok) {
                continue;
            }

            const html = await response.text();
            target.insertAdjacentHTML('afterend', html);
            target.remove();
        } catch (error) {
            console.error(`No se pudo cargar ${component.file}:`, error);
        }
    }

    document.dispatchEvent(new CustomEvent('components:loaded'));
});
