import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



function NavigationBar() {
    
    return (
        <Navbar style={{background:"#fd7e14"}} expand="lg">
            <Container>
                <Link className='navbar-brand' style={{color:"white"}} to="/">M-Mart</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" >
                        <Link className='nav-link' to="/" style={{color:"white"}}>Home</Link>
                        <Link className='nav-link' to="/products" style={{color:"white"}}>Products</Link>
                        <Link className='nav-link' to="/login" style={{color:"white"}}>Login</Link>
                        <Link className='ms-4 btn btn-dark' to="/signup">SignUp</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;