import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import img from './logo_navbar.png';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <Navbar className="" bg="dark" data-bs-theme="dark">
        <Container className="w-100">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <NavLink to='/' className="align-self-center px-2 py-3" ><Navbar.Brand className="align-self-center"><img src={img} alt="logo" height='100px' width='100px' /></Navbar.Brand></NavLink>
            </div>
            <div>
              <Nav  className="me-auto">
                  <NavLink to='/' className="align-self-center px-2 py-3 text-decoration-none text-white" >Inicio</NavLink>
                  <NavLink to='/category/Tradicionales' className="align-self-center px-2 py-3 text-decoration-none text-white" >Tradicionales</NavLink>
                  <NavLink to='/category/Gourmet' className="align-self-center px-2 py-3 text-decoration-none text-white" >Gourmet</NavLink>
                  <NavLink to='/category/Vegetarianas' className="align-self-center px-2 py-3 text-decoration-none text-white" >Vegetarianas</NavLink>
                  <NavLink to='/category/Bebidas' className="align-self-center px-2 py-3 text-decoration-none text-white" >Bebidas</NavLink>
                  <NavLink to='/Cart' className="align-self-center px-2 py-3 text-decoration-none text-white" ><CartWidget/></NavLink>
              </Nav>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;