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
