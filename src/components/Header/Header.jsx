import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Img from"../img/timesgroup.png"
import {useState} from"react";

function Header({setsearch}) {
    const[values,setvalue]=useState("")
    console.log(values,"this is the")
  return (
    <Navbar bg="light" expand="lg" className='Navbar'>
      <Container fluid >
        <img src={Img}/>
        <Navbar.Brand href="#" className='nav'><a>News Today</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><b>Home</b></Nav.Link>
            <Nav.Link href="#action2"><b>About</b></Nav.Link>
            <Nav.Link href="#action2"><b>Contact</b></Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><b>Action</b></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={(e)=>setvalue(e.target.value)}
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={()=>setsearch(values)}>Search</Button> 
            <Button variant="outline-success" className='btn'>Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;