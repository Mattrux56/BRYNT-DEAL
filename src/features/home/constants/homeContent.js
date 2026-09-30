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

export const bryntConfig = {
  whatsappNumber: '573000000000',
  apiEndpoint: '',
  plans: {
    PYMES: {
      label: 'PYMES',
      price: '$850.000',
      shortLabel: 'PYMES',
      features: [
        'Seguimiento comercial',
        'Power BI / KPI',
        'Reunión mensual de resultados',
        'Gestión de clientes nuevos, activos y recurrentes',
        'BRYNT TRACE (trazabilidad)',
      ],
    },
    PREMIUM: {
      label: 'PREMIUM',
      price: '$3.200.000',
      shortLabel: 'Premium',
      features: [
        'Todo lo de PYMES',
        'Inteligencia comercial avanzada',
        'Segmentación ampliada, inactividad y reactivación',
        'Revisión gerencial de crecimiento',
        'Diseño y seguimiento de campañas',
      ],
    },
  },
  planOrder: ['PYMES', 'PREMIUM'],
  planOptions: [
    { value: 'PYMES', label: 'PYMES' },
    { value: 'PREMIUM', label: 'Premium' },
  ],
}

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
