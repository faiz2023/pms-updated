import {React,useEffect,useId,useState} from 'react'
// import '/home/fathau/AMS Git versions/hizana/Ams-react-version-0.1/src/Index.css';
import { BsPersonFill, BsLockFill } from 'react-icons/bs'
import { Link,useNavigate } from 'react-router-dom'

import { Container, Col, Row, InputGroup, Form, Button } from 'react-bootstrap'

function Login() {
    const [Email, setEmail] = useState()
    //console.log(email)
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    
    const navigate = useNavigate ();

    async function loginUser(e){
      e.preventDefault()
  
       const response = await fetch('http://localhost:3003/Login',{
        method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify({
            Email,
            password,
          }),
       
        })   
        const data = await response.json()
        // console.log(data)
        if(data.user && data.user.role_opt == "Admin"){
        
          localStorage.setItem('token', JSON.stringify(data.user))
          alert("login successful")
          navigate('/dashboard')

        }else{
          setError('Your email is not verified')
        }
        console.log(data)
    }

    
  

  return (
    <>
      <Container fluid className="main-bg bg">
        <Container style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          <Row className="box ">
            <Col md="4" className=" bg-left"></Col>

            <Col md="6" className="text-center text-login text-white">
              <div>
                <h1 className="fs-1 fw-bold mb-3 ">WELCOME</h1>
                <p>Sign In to your account</p>
              </div>

              <div className="text-center">
                <Form className="p-1" onSubmit={loginUser}>
                  <InputGroup className="mt-1 " style={{ width: '100%', height: '45px' }}>
                    <span className="input-group-text bg-light">
                      <BsPersonFill style={{ color: '#213b50' }} />
                    </span>
                    <Form.Control type="text" value={Email} placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} />
                  </InputGroup>

                  <InputGroup className="mt-3" style={{ width: '100%', height: '45px' }}>
                    <span className="input-group-text bg-light">
                      <BsLockFill style={{ color: '#213b50' }} />
                    </span>
                    
                    <Form.Control type="password" value={password} placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} />
                    
                  </InputGroup>
                  <p>{error == "" ? '' : error}</p>
                
                  <div className="my-2">
                    <a href="" style={{textDecoration:'none'}}>
                      Forgot password?
                    </a>
                  </div>

                  <Row className="justify-content-center">
                    {/* <Link to="/dashboard"> */}
                      <Button
                       type='submit'
                        className="fw-bold "
                        style={{
                          width: '50%',
                          backgroundColor: 'white',
                          color: '#213b50',
                          borderRadius: '20px',
                          border: '0px',
                        }}
                      >
                        LOGIN
                      </Button>
                    {/* </Link> */}
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}


export default Login
