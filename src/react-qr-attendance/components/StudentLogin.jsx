import React,{ useState } from 'react'
import { Container } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useAuth } from "../Context"
import GoogleButton from 'react-google-button'
import NavBar from './NavBar'

export default function Signup() {
  const [loading, setLoading] = useState(false)
  const [redirectPossible, setRedirectPossible] = useState(false)
  const { signinWithGoogle, currentUser } = useAuth()
  async function handleSigninWithGoogle(e){
    e.preventDefault()
    try{
      setLoading(true)
      await signinWithGoogle()
      console.log("logged in")
      setRedirectPossible(true)
      setLoading(false)
    }catch(err){
      console.log("error")
      alert("There was an error signing in!!")
    }
  }
  return (
    <Container className="main login p-0 m-0" fluid style={{height: "100vh"}}>
      {redirectPossible && <Redirect to="/scan-qr" />}
      {currentUser && <Redirect to="/scan-qr" />}
      <NavBar show={false}/>
      <Container className="main row">
        <div className="main heading breakpoint" style={{color: "#c7ccec"}}>QR Attendance</div>
        <GoogleButton
          onClick={handleSigninWithGoogle}
          disabled={loading}
          className="style-button"
        />
      </Container>
    </Container>
  )
}