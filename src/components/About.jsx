import { Container, Row, Col, Image } from 'react-bootstrap'

export default function About() {
  return (
    <section id="about">
      <Container className="py-5">
        <h1 className="section-title">About Me</h1>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <Image
              src="/images/profile.jpg"
              alt="Sriramkumar Raja Natarajan"
              roundedCircle
              fluid
              className="about-image"
            />
          </Col>
          <Col xs={12} md={8}>
            <p className="about-text">
              Hey, I’m Sriramkumar Raja Natarajan, 
              a Master’s student in Applied Computer Science with strong programming and technology skills. 
              I’m highly motivated to leverage my technical expertise in a dynamic, 
              challenging environment, contributing effectively to innovative 
              solutions while continuously growing as a developer.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}