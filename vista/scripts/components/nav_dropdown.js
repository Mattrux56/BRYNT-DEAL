function initNavDropdowns() {
    const navItems = document.querySelectorAll('.hb-nav-item');

    if (!navItems.length) {
        return;
    }

    const closeAll = (except) => {
        navItems.forEach(item => {
            if (item !== except) {
                item.classList.remove('is-open');
                const trigger = item.querySelector('.hb-nav-trigger');
                if (trigger) {
                    trigger.setAttribute('aria-expanded', 'false');
                }
            }
        });
    };

    navItems.forEach(item => {
        const trigger = item.querySelector('.hb-nav-trigger');

        if (!trigger) {
            return;
        }

        trigger.addEventListener('click', event => {
            event.stopPropagation();
            const isOpen = item.classList.contains('is-open');
            closeAll(item);
            item.classList.toggle('is-open', !isOpen);
            trigger.setAttribute('aria-expanded', String(!isOpen));
        });
    });

    document.addEventListener('click', () => closeAll(null));

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeAll(null);
        }
    });
}

document.addEventListener('DOMContentLoaded', initNavDropdowns);
document.addEventListener('components:loaded', initNavDropdowns);
