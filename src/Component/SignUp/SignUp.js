import React from 'react'
import { Button, Container,Form } from 'react-bootstrap'
import './signUp.css'
import { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// import {Link} from 'react-router-dom'


const SignUp=()=> {
   
  const history = useHistory()
  const [userData,setUserData] = useState({}) 
  const [flag,setFlag] = useState(false)
  const [feedback,setFeedback] = useState(false)
 let user = JSON.parse(localStorage.getItem('local'))
  
 useEffect(()=>{
    if(user!==null &&  Object.keys(user).length===5 ){
      history.push('/profile')
    }
   
  },[user,history])
 
  // function for change
   const handleOnChange=(e)=>{
      const {name,value} = e.target
     setUserData({
     ...userData,[name]:value
     })
     console.log(userData)
    
     console.log(user)
 }
  //  funciton for signup
 const handleSignUp =(e)=>
 {
       e.preventDefault()
       let user = {...userData}
       setFlag(true)
       if(Object.keys(user).length===4)
       {
        errorHandling()
       }
  }
    // function for valdition
   const errorHandling = ()=>
   {
       let a = 0;
          userData.fullName.length<3?a=0:a++
          userData.email.length<3?a=0:a++
          userData.password.length<3?a=0:a++
          userData.confirmPassword!==userData.password?a=0:a++
       
      if(a===4)
      {   setFeedback(true)
          setTimeout(()=>{
          assignToken()},1000)
       }
    }
  
    // function for token
   const assignToken = ()=>
   {
            let user = {...userData}
            user.token=Math.random().toString(36).substring(2,10)
           localStorage.setItem('local', JSON.stringify({...user}))
           history.push('./profile')
           console.log(user)
  }
  
 
  return (
     <>
      <Container className='containerSignUp'  >
        <Form bg='dark' variant='dark' >
        <h1>SignUp</h1>
        <Form.Control name='fullName' type="text" placeholder="Fullname" 
        onChange={handleOnChange} autoComplete='off' />
        
        <Form.Control  name='email' type="email" placeholder="Email"
         onChange={handleOnChange} autoComplete='off' />
       
        
        <Form.Control  name='password' type="password" placeholder="Password" 
        onChange={handleOnChange} autoComplete='off' />
      
       
        <Form.Control  name='confirmPassword' type="password" placeholder="Confirm Password" 
        onChange={handleOnChange} autoComplete='off' />
        
        {flag &&  
        (feedback?<div style={{color:'green',fontSize:'30px'}}>successfully Signed Up! </div>: 
                <p style={{color:'red'}}>All field are required with valid input (input should have atleast 3 charachter)</p>)}
        
        <Button onClick={handleSignUp} className='signUpButton'>SignUp</Button>
         </Form>
      </Container>
     </>
  )
}

export default SignUp