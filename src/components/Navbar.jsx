import { Button, Container, Form, Nav, Navbar as Appbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import search from '../images/search.png';
const Navbar = () => {
    return (
      <Appbar
        sticky="top"
        style={{ fontFamily:'Roboto Slab', fontWeight: 500, padding:'20px',backgroundColor:"#f5e8e1", display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"4px"}
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
            <Nav.Link to={"/aboutus"} as={NavLink}>
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
              placeholder="Search.."
              className="me-2"
              aria-label="Search"
              style={{ boxShadow:'none', border:'none', backgroundColor:"#fdf7f2", width:'100%'}}

            >
          </Form.Control>
          </Form>
          </div>
          <Button
           style={{ width: "3rem", height: "3rem", position: "relative", border:'none', borderRadius:'50px' }}
           className="me-3 ms-4 bg-dark"
           
          >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="currentColor"
        >
          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
        </svg>
        <div
          style={{
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(25%,25%)",
          }}
          className="rounded-circle bg-dark d-flex justify-content-center align-items-centre"
        >
          {2}
        </div>
        </Button>

        </Container>
      </Appbar>
    );
}
export default Navbar;