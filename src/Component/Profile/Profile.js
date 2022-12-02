// import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button,Container ,Row} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import './profile.css'


const  Profile=() => {

 const user = JSON.parse(localStorage.getItem('local'))
 const history = useHistory()
 
 useEffect(()=>
 {  console.log('profile effect')
  if(user===null || (user!==null && Object.keys(user).length<5))
    {
      history.push('/signUp')
    }
 },[user,history])

 
 const logOut = ()=>{
    delete user.token;
    localStorage.setItem('local',JSON.stringify({...user}))
    console.log(user)
    history.push('/signUp')
 }
 
  return (
    <>
    
    
       <Container className='profileContainer'>
       <h3>Profile</h3>
        <Row>Full Name : {user && `${user.fullName}`} </Row>
        <Row>Email : {user && `${user.email}`} </Row>
        <Row>Password : {user && `${user.password}`} </Row>
        <Button onClick={logOut} className='buttonProfile'>LogOut</Button>
       </Container>
      
      
      
    
    
    </>
  )
}

export default Profile