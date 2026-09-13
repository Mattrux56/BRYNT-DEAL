window.BRYNT_CONFIG = {
    whatsappNumber: '573000000000',
    apiEndpoint: '',
    plans: {
        BASICO: {
            label: 'BÁSICO',
            price: '$850.000',
            shortLabel: 'Básico',
            features: [
                'Seguimiento comercial',
                'Power BI / KPI',
                'Reunión mensual de resultados',
                'Gestión de clientes nuevos, activos y recurrentes',
                'BRYNT TRACE (trazabilidad)'
            ]
        },
        ESTANDAR: {
            label: 'ESTÁNDAR',
            price: '$1.750.000',
            shortLabel: 'Estándar',
            features: [
                'Todo lo de Básico',
                'Inteligencia comercial avanzada',
                'Lectura de ventas perdidas y potencial de productos'
            ]
        },
        PREMIUM: {
            label: 'PREMIUM',
            price: '$3.200.000',
            shortLabel: 'Premium',
            features: [
                'Todo lo de Estándar',
                'Segmentación ampliada, inactividad y reactivación',
                'Revisión gerencial de crecimiento',
                'Diseño y seguimiento de campañas'
            ]
        },
        CORPORATIVO: {
            label: 'CORPORATIVO',
            price: 'A convenir',
            shortLabel: 'Corporativo',
            features: [
                'Todo lo de Premium',
                'Integraciones avanzadas y automatización a medida',
                'Acompañamiento para operaciones complejas / multi-sede'
            ]
        }
    },
    planOrder: ['BASICO', 'ESTANDAR', 'PREMIUM', 'CORPORATIVO']
};
