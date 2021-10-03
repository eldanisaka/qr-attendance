import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../Context'

export default function Main() {
  const role = localStorage.getItem("role")
  const { currentUser } = useAuth()
  return (
    <>
      <Container style={{height: "75vh"}} fluid className="d-flex justify-content-center align-items-center">
        {currentUser && (
          role ==="student" && <Redirect to={'/scan-qr'}/>
        )}
        {currentUser && (
          role ==="teacher" && <Redirect to={'/make-qr'}/>
        )}
        <NavBar show={false}/>
        <div className="heading breakpoint">
          <div className="react-heading">
           QR Attendance
          </div>
        </div>
      </Container>
      <Container style={{height: "10vh"}}>
        <div className="d-flex justify-content-evenly">
          <a href="/student-login" role="button" className="btn btn-primary">Student</a>
          <a href="/teacher-login" role="button" className="btn btn-primary">Teacher</a>
        </div>
      </Container>
    </>
  )
}
