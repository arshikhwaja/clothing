import { Container, Nav, Navbar as Appbar, NavLink} from "react-bootstrap";
const Navbar = () => {
    return (
        <Appbar sticky="top" className="d-flex align-items-center justify-content-between bg-light p-4"> 
            <Container>
                <Nav className="m-auto">
                    <Nav.Link to = {"/"} as = {NavLink}>
                        HOME
                    </Nav.Link>
                    <Nav.Link to = {"/aboutus"} as = {NavLink}>
                        ABOUT US
                    </Nav.Link>
                    <Nav.Link to = {"/cart"} as = {NavLink}>
                        CART
                    </Nav.Link>
                    <Nav.Link to = {"/products"} as = {NavLink}>
                        PRODUCTS
                    </Nav.Link>                  
                </Nav>
            </Container>
        </Appbar> 
    )
}
export default Navbar;