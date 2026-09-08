document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('modal-overlay');
    const formView = document.getElementById('modal-form-view');
    const successView = document.getElementById('modal-success-view');
    const form = document.getElementById('modal-form');
    const planSelect = document.getElementById('modal-plan-select');

    // Número de WhatsApp de BRYNT DEAL. Reemplazar por el número real antes de publicar.
    const WHATSAPP_NUMBER = '573000000000';

    if (!overlay || !form) {
        return;
    }

    overlay.hidden = true;
    document.body.style.overflow = '';

    function openModal(planName) {
        if (planName && planSelect) {
            planSelect.value = planName;
        }
        overlay.hidden = false;
        document.body.style.overflow = 'hidden';
        formView.hidden = false;
        successView.hidden = true;
    }

    function closeModal() {
        overlay.hidden = true;
        document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-open-modal]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            openModal(trigger.getAttribute('data-plan'));
        });
    });

    document.querySelectorAll('[data-close-modal]').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModal);
    });

    overlay.addEventListener('click', event => {
        if (event.target === overlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !overlay.hidden) {
            closeModal();
        }
    });

    form.addEventListener('submit', event => {
        event.preventDefault();

        const data = new FormData(form);
        const nombre = data.get('nombre')?.toString().trim() || '';
        const empresa = data.get('empresa')?.toString().trim() || '';
        const telefono = data.get('telefono')?.toString().trim() || '';
        const plan = data.get('plan')?.toString().trim() || 'No sé todavía';

        const mensaje = `Hola BRYNT DEAL, soy ${nombre} de ${empresa}. ` +
            `Quiero agendar una demo (plan de interés: ${plan}). Mi WhatsApp de contacto: ${telefono}.`;

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

        window.open(whatsappUrl, '_blank', 'noopener');

        formView.hidden = true;
        successView.hidden = false;
        form.reset();
    });
});
