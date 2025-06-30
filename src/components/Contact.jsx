export default function Contact() {
  return (
    <section id="contact">
      <div className="container py-5">
        <h1 className="section-title">Contact</h1>
        <p style={{ color: '#fff', lineHeight: 1.6, maxWidth: 600, margin: '0 auto' }}>
          <strong>Address:</strong> Bonhoefferstraße 13/413, 69123 Heidelberg, Germany<br/>
          <strong>Phone:</strong> +49 1575 1677491<br/>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:sriramnraja@yahoo.com"
            style={{ color: '#5dade2', textDecoration: 'underline' }}
          >
            sriramnraja@yahoo.com
          </a><br/>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/sriramkumar-raja-natarajan"
            target="_blank" rel="noopener noreferrer"
            style={{ color: '#5dade2', textDecoration: 'underline' }}
          >
            /in/sriramkumar-raja-natarajan
          </a><br/>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/sriraminhdb"
            target="_blank" rel="noopener noreferrer"
            style={{ color: '#5dade2', textDecoration: 'underline' }}
          >
            /sriraminhdb
          </a>
        </p>
      </div>
    </section>
  )
}