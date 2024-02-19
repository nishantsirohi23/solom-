import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarExample = () => {
    return(
       <>    
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  
  
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
       
        Solomay
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/logout">Logout</Nav.Link>

        <Nav.Link as={Link} to="/login">Login</Nav.Link>

        </Nav>
        <Nav>
        <Nav.Link as={Link} to="/restaurants">Restaurant</Nav.Link>
       


        </Nav>
      </Navbar.Collapse>
    </Navbar>
 
</nav>

        <section>
                        <Outlet></Outlet>
            </section> 
       </> 
    )
}
export default NavBarExample