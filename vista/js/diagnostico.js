document.addEventListener('DOMContentLoaded', () => {
    const CONFIG = window.BRYNT_CONFIG || {};
    const WHATSAPP_NUMBER = CONFIG.whatsappNumber || '573000000000';
    const API_ENDPOINT = CONFIG.apiEndpoint || '';
    const LEADS_STORAGE_KEY = 'brynt_deal_leads';
    const QUESTION_STEPS = ['1', '2', '3', '4', '5'];
    const SCREEN_BY_STEP = {
        sector: '1',
        reto: '2',
        profundidad: '3',
        presupuesto: '4'
    };

    const state = {
        sector: null,
        reto: null,
        profundidad: null,
        presupuesto: null,
        presupuestoLabel: null,
        nombre: '',
        empresa: '',
        telefono: '',
        createdAt: null
    };

    const screens = {
        intro: document.getElementById('screen-intro'),
        1: document.getElementById('screen-1'),
        2: document.getElementById('screen-2'),
        3: document.getElementById('screen-3'),
        4: document.getElementById('screen-4'),
        5: document.getElementById('screen-5'),
        result: document.getElementById('screen-result')
    };

    const progressWrap = document.getElementById('diag-progress-wrap');
    const progressFill = document.getElementById('diag-progress-fill');
    const progressLabel = document.getElementById('diag-progress-label');

    function updateProgress(stepKey) {
        if (QUESTION_STEPS.includes(stepKey)) {
            progressWrap.hidden = false;
            const idx = QUESTION_STEPS.indexOf(stepKey) + 1;
            progressFill.style.width = `${(idx / QUESTION_STEPS.length) * 100}%`;
            progressLabel.textContent = `Pregunta ${idx} de ${QUESTION_STEPS.length}`;
            return;
        }

        progressWrap.hidden = true;
    }

    function showScreen(stepKey) {
        const target = screens[stepKey];

        if (target) {
            if (stepKey === 'result') {
                target.hidden = false;
            }
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        updateProgress(stepKey);
    }

    function goToStep(stepKey) {
        showScreen(stepKey);
    }

    function prevStepBefore(stepKey) {
        const idx = QUESTION_STEPS.indexOf(stepKey);
        const prev = QUESTION_STEPS[idx - 1] || 'intro';
        goToStep(prev);
    }

    function setOptionSelection(group, selectedButton) {
        group.querySelectorAll('.diag-option').forEach(button => {
            button.classList.toggle('selected', button === selectedButton);
        });
    }

    function handleOptionSelection(button) {
        const group = button.closest('.diag-options');
        if (!group) {
            return;
        }

        const stepKey = group.getAttribute('data-step');
        setOptionSelection(group, button);

        const value = button.getAttribute('data-value');
        const label = button.getAttribute('data-label') || value;

        if (stepKey === 'sector') state.sector = value;
        if (stepKey === 'reto') state.reto = value;
        if (stepKey === 'profundidad') state.profundidad = value;
        if (stepKey === 'presupuesto') {
            state.presupuesto = Number.parseInt(value, 10);
            state.presupuestoLabel = label;
        }

        const screenNumber = SCREEN_BY_STEP[stepKey];
        const currentIndex = QUESTION_STEPS.indexOf(screenNumber);
        const nextScreen = QUESTION_STEPS[currentIndex + 1] || '5';

        setTimeout(() => goToStep(nextScreen), 140);
    }

    function bindOptionClicks() {
        document.querySelectorAll('.diag-option').forEach(button => {
            button.addEventListener('click', () => handleOptionSelection(button));
        });
    }

    function bindBackButtons() {
        document.querySelectorAll('[data-back]').forEach(button => {
            button.addEventListener('click', () => {
                const screen = button.closest('.diag-screen');
                if (screen) {
                    prevStepBefore(screen.id.replace('screen-', ''));
                }
            });
        });
    }

    function bindStartButton() {
        const btnStart = document.getElementById('btn-start-diag');
        if (btnStart) {
            btnStart.addEventListener('click', () => goToStep('1'));
        }
    }

    function bindContactForm() {
        const contactForm = document.getElementById('diag-contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', async event => {
                event.preventDefault();

                const data = new FormData(contactForm);
                state.nombre = data.get('nombre')?.toString().trim() || '';
                state.empresa = data.get('empresa')?.toString().trim() || '';
                state.telefono = data.get('telefono')?.toString().trim() || '';
                state.createdAt = new Date().toISOString();

                await persistLead();
                renderResult();
                showScreen('result');
            });
        }
    }

    async function persistLead() {
        const leadData = {
            nombre: state.nombre,
            empresa: state.empresa,
            telefono: state.telefono,
            sector: state.sector,
            reto: state.reto,
            profundidad: state.profundidad,
            presupuesto: state.presupuesto,
            presupuestoLabel: state.presupuestoLabel,
            createdAt: state.createdAt
        };

        if (API_ENDPOINT) {
            try {
                const response = await fetch(API_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(leadData)
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                return;
            } catch (error) {
                console.warn('No se pudo enviar a la API, se guardará en localStorage:', error);
            }
        }

        try {
            const stored = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
            const leadList = Array.isArray(stored) ? stored : [];
            leadList.push(leadData);
            localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leadList));
        } catch (error) {
            console.error('No se pudo guardar la información del lead:', error);
        }
    }

    function renderResult() {
        const focusLabel = state.profundidad === 'inteligencia'
            ? 'Inteligencia comercial y crecimiento activo'
            : state.profundidad === 'control'
                ? 'Ordenar y controlar la operación comercial'
                : 'No especificado';

        document.getElementById('result-title').textContent = 'Gracias, tus datos fueron guardados correctamente';

        const summary = document.getElementById('result-summary');
        summary.innerHTML = `
            <div><strong>Nombre:</strong> ${state.nombre || 'No especificado'}</div>
            <div><strong>Empresa:</strong> ${state.empresa || 'No especificado'}</div>
            <div><strong>WhatsApp:</strong> ${state.telefono || 'No especificado'}</div>
            <div><strong>Sector:</strong> ${state.sector || 'No especificado'}</div>
            <div><strong>Principal reto:</strong> ${state.reto || 'No especificado'}</div>
            <div><strong>Enfoque buscado:</strong> ${focusLabel}</div>
            <div><strong>Honorario mensual disponible:</strong> ${state.presupuestoLabel || 'No especificado'}</div>
        `;
    }

    function openWhatsAppDemo() {
        const focusLabel = state.profundidad === 'inteligencia'
            ? 'Inteligencia comercial y crecimiento activo'
            : 'Ordenar y controlar la operación comercial';

        const message = [
            `Hola BRYNT DEAL, quiero agendar una demo.`,
            '',
            `Nombre: ${state.nombre || 'No especificado'}`,
            `Empresa: ${state.empresa || 'No especificado'}`,
            `WhatsApp: ${state.telefono || 'No especificado'}`,
            `Sector: ${state.sector || 'No especificado'}`,
            `Principal reto: ${state.reto || 'No especificado'}`,
            `Enfoque buscado: ${focusLabel}`,
            `Honorario mensual disponible: ${state.presupuestoLabel || 'No especificado'}`,
            '',
            'Estos son los datos capturados desde el cuestionario.'
        ].join('\n');

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener');
    }

    function bindWhatsAppButton() {
        const btnWhatsapp = document.getElementById('btn-agendar-whatsapp');
        if (btnWhatsapp) {
            btnWhatsapp.addEventListener('click', openWhatsAppDemo);
        }
    }

    function initFromQueryParams() {
        const params = new URLSearchParams(window.location.search);
        const sectorParam = params.get('sector');

        if (sectorParam) {
            state.sector = decodeURIComponent(sectorParam);
            const sectorGroup = document.querySelector('.diag-options[data-step="sector"]');
            if (sectorGroup) {
                const match = Array.from(sectorGroup.querySelectorAll('.diag-option'))
                    .find(button => button.getAttribute('data-value') === state.sector);

                if (match) {
                    match.classList.add('selected');
                }
            }
        }

        showScreen('intro');
    }

    bindOptionClicks();
    bindBackButtons();
    bindStartButton();
    bindContactForm();
    bindWhatsAppButton();
    initFromQueryParams();
});
