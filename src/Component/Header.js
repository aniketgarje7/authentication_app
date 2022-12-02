import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'



const Header=()=> {
   
  
  
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container className='jigar'>
          <Navbar.Brand as={NavLink} to='/'>Header</Navbar.Brand>
          <Nav className="alignRight">
            
            <Nav.Link as={NavLink} to='/signUp'>SignUp</Nav.Link>
            <Nav.Link as={NavLink} to='/profile'>Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header