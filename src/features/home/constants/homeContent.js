import fondoInicioImg from '../../../assets/images/fondo_inicio.jpg'

export const heroContent = {
  backgroundImage: fondoInicioImg,
  eyebrow: 'Datos que impulsan negocios',
  title: {
    first: 'Indicadores que demuestran',
    accent: 'crecimiento real',
    full: 'Indicadores que demuestran crecimiento real',
  },
  subtitle:
    'Trazabilidad, conversión y recaudo en un solo lugar. Datos reales para decisiones más grandes.',
  highlights: [
    { icon: '📊', label: 'Más visibilidad' },
    { icon: '🎯', label: 'Más conversión' },
    { icon: '👥', label: 'Más crecimiento' },
  ],
  overlayText: ['Empresas', 'que avanzan', 'con datos,', 'llegan más lejos.'],
}

export const kpis = [
  {
    icon: '👥',
    label: 'Clientes activos',
    value: '24',
    delta: '+14%',
    note: 'vs. mes anterior',
  },
  {
    icon: '🛒',
    label: 'Ventas cerradas por la web',
    value: '$1.280M',
    delta: '+32%',
    note: 'vs. mes anterior',
  },
  {
    icon: '🎯',
    label: 'Oportunidades trazadas',
    value: '482',
    delta: '+18%',
    note: 'vs. mes anterior',
  },
  {
    icon: '📈',
    label: 'Conversión comercial',
    value: '27%',
    delta: '+6 p.p.',
    note: 'vs. mes anterior',
  },
  {
    icon: '🪙',
    label: 'Recaudo conciliado',
    value: '94%',
    delta: '+4 p.p.',
    note: 'vs. mes anterior',
  },
]

export const methodologyPillars = [
  {
    icon: '🛡️',
    value: '100%',
    title: 'Trazabilidad y seguimiento',
    description: 'Cada oportunidad identificada con GUID único',
  },
  {
    icon: '⚡',
    value: 'Auto',
    title: 'Sincronización con Power Automate',
    description: 'SharePoint + Power BI en tiempo real',
  },
  {
    icon: '💰',
    value: 'CaaS',
    title: 'Modelo Enfocado en Recaudo',
    description: 'Comisiones solo sobre ventas atribuibles y recaudadas',
  },
]

export const methodologySteps = [
  {
    number: '01',
    title: 'Estructura y Control',
    tag: 'VISIBILIDAD TOTAL DEL EMBUDO',
    description:
      'Le damos a tu equipo la estructura necesaria para dar seguimiento puntual a cada cliente y asegurar que no se escape ninguna oportunidad.',
    items: [
      '✓ Segregación y trazabilidad de cada cotización',
      '✓ Seguimiento claro a clientes recurrentes y nuevos',
      '✓ Alerta temprana sobre brechas frente a la meta',
    ],
    box: '0% cotizaciones en el olvido o sin seguimiento',
  },
  {
    number: '02',
    title: 'Inteligencia de Datos',
    tag: 'DE INFORMACIÓN A DECISIONES',
    description:
      'Conectamos la información dispersa de tus canales (WhatsApp, Excel, facturación) en tableros estratégicos para decidir con certeza.',
    items: [
      '✓ Integración de fuentes dispersas en una sola vista',
      '✓ Tableros interactivos en Power BI en tiempo real',
      '✓ Análisis de causalidad en ventas ganadas y perdidas',
    ],
    box: '1 solo tablero centralizado para gerencia',
  },
  {
    number: '03',
    title: 'Trazabilidad y Retorno',
    tag: 'MEDICIÓN EFECTIVA DE CANALES',
    description:
      'Trazamos el recorrido completo desde la primera interacción hasta el recaudo final para saber qué acciones realmente venden.',
    items: [
      '✓ Identificación exacta del canal que produjo la venta',
      '✓ Medición real del retorno en campañas comerciales',
      '✓ Conciliación y seguimiento enfocado en recaudo',
    ],
    box: '100% visibilidad del origen de tus ingresos',
  },
]

export const valueCards = [
  {
    icon: '🍱',
    badge: 'Fundacional',
    badgeClass: 'blue',
    title: 'Orden comercial',
    text: 'Embudo, seguimiento, responsables, próximas acciones y disciplina sobre oportunidades.',
  },
  {
    icon: '📊',
    badge: 'KPI',
    badgeClass: 'gray',
    title: 'Medición',
    text: 'Ventas proyectadas vs. reales, conversión, ticket, ciclo y desempeño por producto/servicio.',
  },
  {
    icon: '🛡️',
    badge: 'Trazabilidad',
    badgeClass: 'dark',
    title: 'Trazabilidad',
    text: 'Origen del lead, campaña, cotización, venta, recaudo y resultado con trazabilidad completa.',
  },
  {
    icon: '☀️',
    badge: 'Analytics',
    badgeClass: 'purple',
    title: 'Inteligencia',
    text: 'Ventas perdidas, potencial de productos, recurrencia, inactividad, tendencias y oportunidades ocultas.',
  },
  {
    icon: '👥',
    badge: 'Gerencial',
    badgeClass: 'green',
    title: 'Dirección',
    text: 'Reuniones de resultados, revisión gerencial, planes de acción y recomendaciones estratégicas.',
  },
  {
    icon: '📈',
    badge: 'Expansión',
    badgeClass: 'red',
    title: 'Crecimiento',
    text: 'Campañas, reactivación, captación y priorización basadas en información real y trazable.',
  },
]

export const faqItems = [
  {
    q: '¿Cuánto tiempo toma implementar BRYNT TRACE?',
    a: 'Entre 2 y 4 semanas para dejar el flujo lead → TRACE ID → Power BI funcionando de extremo a extremo, según el número de canales de entrada.',
  },
  {
    q: '¿Es compatible con mi CRM (HubSpot, Salesforce, etc.)?',
    a: 'En Fase 1 trabajamos sobre Microsoft 365 / SharePoint como fuente maestra. Si ya usas HubSpot o Salesforce, evaluamos una integración o sincronización puntual sin duplicar tu operación.',
  },
  {
    q: '¿Qué acceso a datos necesita BRYNT para operar?',
    a: 'Solo lectura y escritura sobre los campos comerciales del embudo (leads, cotizaciones, estados y resultados). No accedemos a tu contabilidad ni a datos técnicos u operativos internos.',
  },
  {
    q: '¿Reemplaza mi equipo comercial actual?',
    a: 'No. BRYNT no sustituye tu operación técnica ni comercial; ordena, mide y acompaña. Tu equipo sigue vendiendo, facturando y recaudando.',
  },
  {
    q: '¿Cómo se calculan las comisiones?',
    a: 'Solo sobre operaciones atribuibles a un Lead ID de BRYNT, conciliadas contra venta y recaudo verificado. Nunca sobre ventas que no pasaron por el sistema.',
  },
  {
    q: '¿Puedo cambiar de plan más adelante?',
    a: 'Sí. Puedes subir de PYMES a PREMIUM sin perder el historial de trazabilidad ya construido en BRYNT TRACE.',
  },
]

export const pricingComparisonRows = [
  ['Seguimiento comercial', '✓', '✓'],
  ['Power BI / KPI', '✓', '✓'],
  ['Reunión mensual de resultados', '✓', '+ Gerencial'],
  ['Gestión clientes nuevos, activos y recurrentes', '✓', '✓'],
  ['BRYNT TRACE (trazabilidad)', '✓', '✓'],
  ['Inteligencia comercial avanzada', '✕', '✓'],
  ['Segmentación ampliada / reactivación', '✕', '✓'],
  ['Ventas perdidas — causalidad e ingresos potenciales', '✕', '✓'],
  ['Potencial / tendencia por producto-servicio', '✕', '✓'],
  ['Análisis PQRS', '✕', '✓'],
  ['Campañas con diseño y seguimiento profundo', '✕', '✓'],
  ['Revisión Gerencial de Crecimiento', '✕', '✓'],
]
