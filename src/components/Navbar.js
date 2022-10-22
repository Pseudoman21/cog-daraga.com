import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../assets/images/cog-logo.png'
function BasicExample () {
  return (
    <Navbar bg='transparent' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <img className='img-fluid' src={Logo} width='40px' alt="COG Logo" /> Daraga
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Tickets</Nav.Link>
            <NavDropdown title='Schedules' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.2'>Dec. 20</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Dec. 22</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Dec. 23</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BasicExample
