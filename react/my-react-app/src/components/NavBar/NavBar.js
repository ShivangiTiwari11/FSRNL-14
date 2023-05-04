import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function NavExample() {
  return (
    <>
      
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand >JOB FINDER</Navbar.Brand>
          <Nav className="me-auto">
            <Link style={{margin:"5px"}} to='/'>Home</Link>
            <Link style={{margin:"5px"}} to='/features'>Features</Link>
            <Link style={{margin:"5px"}} to='/pricing'>Pricing</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavExample;