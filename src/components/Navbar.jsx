import { Navbar as BSNavbar, Container, Nav } from 'react-bootstrap'

export default function Navbar() {
  const links = [
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <BSNavbar expand="lg" bg="light" className="shadow-sm fixed-top">
      <Container>
        <BSNavbar.Brand href="#about">Sriramkumar Raja Natarajan</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="main-nav" />
        <BSNavbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {links.map(l => (
              <Nav.Link key={l.id} href={`${l.id}`}>{l.label}</Nav.Link>
            ))}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}
