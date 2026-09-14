import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { testimonials } from '../constants/testimonialsData'
import TestimonialCard from './TestimonialCard'

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <span className="sub-label">TESTIMONIOS</span>
        <h2>Lo que dice nuestro equipo y nuestros clientes</h2>
        <p>
          Una mirada real de cómo BRYNT ayuda a equipos comerciales y de crecimiento a operar con más claridad,
          disciplina y resultados medibles.
        </p>
      </div>

      <div className="testimonials-swiper-wrap">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
