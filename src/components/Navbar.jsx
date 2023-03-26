import { Button, Container, Form, Nav, Navbar as Appbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import cart from '../images/cart.png';
import search from '../images/search.png';
import user from '../images/user.png';
const Navbar = () => {
    return (
      <Appbar
        sticky="top"
        style={{ borderBottomWidth:'1px', borderColor:'#dddddd', fontFamily:'Roboto Slab', fontWeight: 500, padding:'20px',backgroundColor:"#f5e8e1", display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"4px"}
        }
      >
        <div style={{fontFamily:'Yesteryear', display:'flex',flexDirection:'row', marginLeft:'30px', fontSize:'40px'}}>
          <span style={{marginRight:'10px'}}>Shahjaz </span>
          <span>Clothing</span>
        </div>
        <Container>
          <Nav className="m-auto">
            <Nav.Link to={"/"} as={NavLink}>
              HOME
            </Nav.Link>
            <Nav.Link to={"/aboutus"} style={{marginInline:'10px'}} as={NavLink}>
              ABOUT US
            </Nav.Link>
            {/* <Nav.Link to={"/cart"} as={NavLink}>
              CART
            </Nav.Link> */}
            <Nav.Link to={"/products"} as={NavLink}>
              PRODUCTS
            </Nav.Link>
          </Nav>
          <div style={{ paddingLeft:'20px', boxShadow:'none', borderRadius: '50px', backgroundColor:"#fdf7f2", display:"flex", alignItems:"center"}}>
          <img src={search} style={{width:'20px', height:'15px'}}/>
          <Form className="searchBar" style={{alignItems:'center', display:'flex', boxShadow:'none'}}>
            <Form.Control
              type="search"
              placeholder="Search ..."
              className="me-2"
              aria-label="Search"
              style={{ boxShadow:'none', border:'none', backgroundColor:"#fdf7f2", width:'100%'}}
            >
          </Form.Control>
          </Form>
          </div>
          <div style={{marginLeft: '20px' }}>
            <img
            src={cart} style={{width:'30px', height:'30px'}}
            />
          </div>
          <div style={{marginLeft: '20px', marginRight:'20px' }}>
            <img
            src={user} style={{width:'30px', height:'30px'}}
            />
          </div>
        {/* <div
          style={{
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(25%,25%)",
          }}
          className="rounded-circle d-flex justify-content-center align-items-centre"
        >

        </div> */}
        </Container>
      </Appbar>
    );
}
export default Navbar;