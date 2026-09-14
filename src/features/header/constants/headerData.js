import logoHeaderImg from '../../../assets/logos_img/Logo_header.png'
import paraEmpresasImg from '../../../assets/header_img/ParaEmpresas.png'
import paraCompradoresImg from '../../../assets/header_img/ParaCompradores.png'

export const headerBrand = {
  logoSrc: logoHeaderImg,
  alt: 'BRYNT DEAL',
  tagline: 'Commercial Growth as a Service',
  href: '#inicio',
}

export const headerNavigation = [
  { label: 'Inicio', type: 'simple' },
  {
    label: 'Quienes somos',
    type: 'dropdown',
    items: ['Nuestra historia', 'Misión y visión', 'Valores', 'Equipo'],
  },
  {
    label: 'Commercial Growth',
    type: 'dropdown',
    cards: [
      {
        eyebrow: 'PARA EMPRESAS',
        title: 'Quiero hacer crecer mi empresa',
        description:
          'Conecta con aliados, accede a asesoría especializada y acelera tu crecimiento comercial.',
        cta: 'Conocer más',
        image: paraEmpresasImg,
      },
      {
        eyebrow: 'PARA COMPRADORES',
        title: 'Busco una solución',
        description:
          'Encuentra productos y servicios confiables para llevar tus proyectos al siguiente nivel.',
        cta: 'Explorar soluciones',
        image: paraCompradoresImg,
      },
    ],
  },
  {
    label: 'Talleres',
    type: 'dropdown',
    items: ['Agenda', 'Formatos', 'Inscripción', 'Certificaciones'],
  },
  {
    label: 'Linea etica',
    type: 'dropdown',
    items: ['Código', 'Política', 'Procedimientos', 'Canales de contacto'],
  },
  {
    label: 'Propuesta de valor',
    type: 'dropdown',
    items: ['Beneficios', 'Diferenciadores', 'Casos', 'Planes'],
  },
]
