import PropTypes from 'prop-types'
import TestimonialQuoteIcon from './TestimonialQuoteIcon'

export default function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card-top">
        <div className="testimonial-initials" aria-label={item.name}>
          {item.name
            .split(' ')
            .slice(0, 2)
            .map((part) => part[0])
            .join('')
            .toUpperCase()}
        </div>

        <div className="testimonial-meta">
          <h3>{item.name}</h3>
          <p>{item.role}</p>
        </div>
      </div>

      <div className="testimonial-quote-wrap">
        <TestimonialQuoteIcon />
        <blockquote className="testimonial-quote">“{item.quote}”</blockquote>
      </div>
    </article>
  )
}

TestimonialCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  }).isRequired,
}
