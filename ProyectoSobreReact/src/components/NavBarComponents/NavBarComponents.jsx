import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CarWidget/CartWidgetComponent';

import { useCollectionItems } from '../../hooks/useCollectionItems';



const NavBarComponent = () => {

  const {items} = useCollectionItems("category")
 
  return (

    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand> <Link to="/"> SG pack</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">          
          
            
             <NavDropdown title = "Categorias" id="basic-nav-dropdown" >

            {items.map((category) => {
              return (
                <div key={category.slug} >  
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </div>
              )             
            })}             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
       < CartWidgetComponent />
      </Container>      
    </Navbar>

  )

}

export default NavBarComponent