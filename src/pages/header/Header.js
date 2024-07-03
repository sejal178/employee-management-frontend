import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header=()=>{
    return(
        <>
        <Navbar bg="primary" varient="dark">
            <Container>
                <Navbar.Brand>
                    <strong>
                        Employee Management System
                    </strong>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className="nav-link">
                        Employees
                    </Nav.Link>
                    <Nav.Link as={Link} to="/employee" className="nav-link">
                       Post Employees
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}
export default Header;