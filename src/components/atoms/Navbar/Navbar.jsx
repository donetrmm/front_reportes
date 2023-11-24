import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function Nav() {
  return (
    <Container className='Container-nav'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Nav;