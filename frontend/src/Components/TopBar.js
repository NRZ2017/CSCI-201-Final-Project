import './TopBar.css'
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function TopBar() {
    return (
        <div>
        <Navbar bg="primary" data-bs-theme="dark" id="topBar">
        <Container id = "container">
          <Navbar.Brand>Navigation</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/friends">Friends</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/StartSession">Start Session</Nav.Link>
            <Nav.Link href="/session">Join Session</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}