document.addEventListener('DOMContentLoaded', () => {
    const CONFIG = window.BRYNT_CONFIG || {};
    const WHATSAPP_NUMBER = CONFIG.whatsappNumber || '573000000000';
    const API_ENDPOINT = CONFIG.apiEndpoint || '';
    const PLANS = CONFIG.plans || {};
    const PLAN_ORDER = CONFIG.planOrder || ['BASICO', 'ESTANDAR', 'PREMIUM', 'CORPORATIVO'];
    const LEADS_STORAGE_KEY = 'brynt_deal_leads';
    const QUESTION_STEPS = ['1', '2', '3', '4', '5'];
    const SCREEN_BY_STEP = {
        sector: '1',
        reto: '2',
        profundidad: '3',
        presupuesto: '4'
    };

    // --- MOTOR DE RECOMENDACIÓN ---
    // El plan recomendado se calcula a partir del presupuesto (la restricción dura),
    // y se enriquece con una justificación personalizada según el reto y el enfoque
    // elegidos. Si el reto principal requiere una capacidad que está en un plan
    // superior al presupuesto indicado, se lo mostramos como una sugerencia aparte
    // en vez de forzar un plan que el usuario no dijo poder pagar.

    // Presupuesto (1-4) -> índice de plan base en PLAN_ORDER
    const TIER_BY_PRESUPUESTO = { 1: 0, 2: 1, 3: 2, 4: 3 };

    // Profundidad -> nivel mínimo de plan (índice) que tiene sentido para ese enfoque
    const TIER_BY_PROFUNDIDAD = {
        control: 0,
        inteligencia: 1
    };

    // Reto -> { tierNeeded: índice del primer plan que resuelve ese reto, feature: texto de la capacidad clave }
    const RETO_INSIGHTS = {
        'Seguimiento disperso (cotizaciones, WhatsApp, llamadas sin trazabilidad)': {
            tierNeeded: 0,
            feature: 'BRYNT TRACE asigna un ID único a cada oportunidad desde el primer contacto, así todo el seguimiento queda en un solo lugar.'
        },
        'Poca visibilidad gerencial sobre el pipeline': {
            tierNeeded: 2,
            feature: 'la Revisión Gerencial de Crecimiento y las reuniones con enfoque gerencial te dan visibilidad completa del pipeline, no solo del resultado final.'
        },
        'Clientes sin inteligencia (poca recurrencia/reactivación)': {
            tierNeeded: 2,
            feature: 'la segmentación ampliada y reactivación te permiten identificar clientes inactivos y priorizar a quién volver a contactar.'
        },
        'Marketing desconectado de ventas': {
            tierNeeded: 2,
            feature: 'las campañas con diseño y seguimiento profundo conectan cada campaña con su resultado real en ventas, no solo con interacciones.'
        },
        'Datos sin acción (reportes que no generan decisiones)': {
            tierNeeded: 1,
            feature: 'la inteligencia comercial avanzada convierte tus reportes de Power BI en causas y acciones concretas, no solo en gráficos.'
        }
    };

    const SECTOR_NOTE = {
        'Industria & Abastecimiento': 'ciclos B2B con ticket alto, donde perder trazabilidad de una cotización cuesta caro',
        'Servicios Técnicos & Mantenimiento': 'cotizaciones y agenda técnica con ciclos de decisión largos',
        'Gestión Empresarial': 'venta consultiva con relaciones B2B que necesitan pipeline estructurado',
        'Salud & Bienestar': 'demanda digital y experiencia de usuario reguladas por el sector',
        'Otro sector': 'un modelo comercial B2B que necesita orden y trazabilidad'
    };

    function planKeyByTierIndex(index) {
        const safeIndex = Math.max(0, Math.min(index, PLAN_ORDER.length - 1));
        return PLAN_ORDER[safeIndex];
    }

    function computeRecommendation(state) {
        const baseTierIndex = TIER_BY_PRESUPUESTO[state.presupuesto] ?? 0;
        const recommendedPlanKey = planKeyByTierIndex(baseTierIndex);

        const retoInfo = RETO_INSIGHTS[state.reto] || null;
        const profundidadTier = TIER_BY_PROFUNDIDAD[state.profundidad] ?? 0;
        const idealTierIndex = Math.max(
            retoInfo ? retoInfo.tierNeeded : 0,
            profundidadTier
        );

        let upsell = null;
        if (idealTierIndex > baseTierIndex) {
            const upsellPlanKey = planKeyByTierIndex(idealTierIndex);
            upsell = {
                planKey: upsellPlanKey,
                plan: PLANS[upsellPlanKey],
                reason: retoInfo ? retoInfo.feature : null
            };
        }

        return {
            planKey: recommendedPlanKey,
            plan: PLANS[recommendedPlanKey],
            retoInfo,
            upsell
        };
    }

    const state = {
        sector: null,
        reto: null,
        profundidad: null,
        presupuesto: null,
        presupuestoLabel: null,
        nombre: '',
        empresa: '',
        telefono: '',
        createdAt: null,
        recommendedPlan: null
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

            const navbar = document.querySelector('.diag-navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const scrollOffset = navbarHeight + 16;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - scrollOffset;

            window.scrollTo({
                top: Math.max(0, targetTop),
                behavior: 'smooth'
            });
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
                state.recommendedPlan = computeRecommendation(state);

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
            planRecomendado: state.recommendedPlan?.planKey || null,
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

    function focusLabelFor(profundidad) {
        return profundidad === 'inteligencia'
            ? 'Inteligencia comercial y crecimiento activo'
            : profundidad === 'control'
                ? 'Ordenar y controlar la operación comercial'
                : 'No especificado';
    }

    function renderResult() {
        const rec = state.recommendedPlan || computeRecommendation(state);
        const plan = rec.plan;
        const sectorNote = SECTOR_NOTE[state.sector] || 'tu tipo de operación comercial';

        document.getElementById('result-eyebrow').textContent = 'PLAN RECOMENDADO';

        const titleEl = document.getElementById('result-title');
        titleEl.innerHTML = plan
            ? `Para tu empresa, recomendamos <span id="result-plan-name">${plan.label}</span>`
            : 'Gracias, tus datos fueron guardados correctamente';

        const rationaleEl = document.getElementById('result-rationale');
        if (plan) {
            const retoText = rec.retoInfo
                ? rec.retoInfo.feature
                : 'BRYNT TRACE ordena tu operación comercial de punta a punta.';
            rationaleEl.textContent = `Con un honorario mensual de ${state.presupuestoLabel || 'el rango indicado'} y un negocio de ${sectorNote}, ${plan.shortLabel || plan.label} es el punto de partida: ${retoText}`;
        } else {
            rationaleEl.textContent = 'Tu información quedó lista para ser revisada y continuar con la agendación por WhatsApp.';
        }

        const priceEl = document.getElementById('result-card-price');
        if (plan) {
            priceEl.innerHTML = plan.price === 'A convenir'
                ? plan.price
                : `${plan.price}<span>/mes</span>`;
        } else {
            priceEl.textContent = 'Guardado';
        }

        const featuresEl = document.getElementById('result-card-features');
        if (plan && Array.isArray(plan.features)) {
            featuresEl.innerHTML = plan.features.map(f => `<li>✓ ${f}</li>`).join('');
        } else {
            featuresEl.innerHTML = `
                <li>✓ Datos capturados correctamente</li>
                <li>✓ Listo para agendar demo</li>
            `;
        }

        // Nota de upsell: si el reto/enfoque elegido pide más de lo que
        // incluye el plan recomendado por presupuesto, lo sugerimos aparte
        // sin forzar el cambio de plan.
        const upsellEl = document.getElementById('result-upsell');
        if (rec.upsell && rec.upsell.plan) {
            upsellEl.hidden = false;
            upsellEl.innerHTML = `
                <strong>Para resolver tu reto por completo:</strong>
                considera ${rec.upsell.plan.label} — ${rec.upsell.reason || 'incluye capacidades adicionales de inteligencia comercial.'}
            `;
        } else {
            upsellEl.hidden = true;
            upsellEl.innerHTML = '';
        }

        const summary = document.getElementById('result-summary');
        summary.innerHTML = `
            <div><strong>Nombre:</strong> ${state.nombre || 'No especificado'}</div>
            <div><strong>Empresa:</strong> ${state.empresa || 'No especificado'}</div>
            <div><strong>WhatsApp:</strong> ${state.telefono || 'No especificado'}</div>
            <div><strong>Sector:</strong> ${state.sector || 'No especificado'}</div>
            <div><strong>Principal reto:</strong> ${state.reto || 'No especificado'}</div>
            <div><strong>Enfoque buscado:</strong> ${focusLabelFor(state.profundidad)}</div>
            <div><strong>Honorario mensual disponible:</strong> ${state.presupuestoLabel || 'No especificado'}</div>
        `;
    }

    function openWhatsAppDemo() {
        const rec = state.recommendedPlan || computeRecommendation(state);
        const planLine = rec.plan ? `Plan recomendado: ${rec.plan.label}` : null;

        const message = [
            `Hola BRYNT DEAL, quiero agendar una demo.`,
            '',
            `Nombre: ${state.nombre || 'No especificado'}`,
            `Empresa: ${state.empresa || 'No especificado'}`,
            `WhatsApp: ${state.telefono || 'No especificado'}`,
            `Sector: ${state.sector || 'No especificado'}`,
            `Principal reto: ${state.reto || 'No especificado'}`,
            `Enfoque buscado: ${focusLabelFor(state.profundidad)}`,
            `Honorario mensual disponible: ${state.presupuestoLabel || 'No especificado'}`,
            ...(planLine ? [planLine] : []),
            '',
            'Estos son los datos capturados desde el diagnóstico.'
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
        const planParam = params.get('plan');

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

        // Si el usuario llegó desde una tarjeta de plan específica, pre-marcamos
        // el rango de presupuesto correspondiente para no volver a preguntarlo desde cero.
        if (planParam) {
            const planIndex = PLAN_ORDER.indexOf(planParam.toUpperCase());
            if (planIndex !== -1) {
                const presupuestoValue = String(planIndex + 1);
                const presupuestoGroup = document.querySelector('.diag-options[data-step="presupuesto"]');
                if (presupuestoGroup) {
                    const match = Array.from(presupuestoGroup.querySelectorAll('.diag-option'))
                        .find(button => button.getAttribute('data-value') === presupuestoValue);
                    if (match) {
                        match.classList.add('selected');
                        state.presupuesto = Number.parseInt(presupuestoValue, 10);
                        state.presupuestoLabel = match.getAttribute('data-label') || match.textContent.trim();
                    }
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
