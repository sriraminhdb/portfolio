import { Container, Row, Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap'

const contacts = [
  {
    id: 'whatsapp',
    icon: '/icons/whatsapp.svg',
    href: 'wa.me/4915751677491',
    tooltip: 'Contact via WhatsApp'
  },
  {
    id: 'email',
    icon: '/icons/email.svg',
    href: 'mailto:sriramnraja@yahoo.com',
    tooltip: 'Send an Email'
  },
  {
    id: 'linkedin',
    icon: '/icons/linkedin.svg',
    href: 'https://www.linkedin.com/in/sriramkumar-raja-natarajan',
    tooltip: 'Connect via LinkedIn'
  },
  {
    id: 'github',
    icon: '/icons/github.svg',
    href: 'https://github.com/sriraminhdb',
    tooltip: 'Check my GitHub'
  },
]

export default function Contact() {
  return (
     <section id="contact">
      <Container className="py-5">
        <h1 className="section-title">Contact</h1>
        <Row className="justify-content-center">
          {contacts.map(c => (
            <Col xs="auto" key={c.id} className="text-center">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id={`tooltip-${c.id}`}>{c.tooltip}</Tooltip>}
              >
                <a href={c.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={c.icon}
                    alt={c.id}
                    className="contact-icon"
                    rounded
                  />
                </a>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}