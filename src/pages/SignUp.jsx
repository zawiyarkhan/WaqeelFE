import React, { useState } from 'react';
import Axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [role, setRole] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        Axios.post("http://localhost:3000/SignUp", {
          email,
          password,
          role
  },
  {withCredentials: true, credentials: 'include'})
      .then((response) => {
          console.log(response)
      })
      .catch((err) => {
          console.log(err.message);
      })
        navigate('/updateLawyer', {replace: true})
    }

    

  return (
    <form onSubmit={handleSubmit}>
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Wakeel</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Create an Account</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='email' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='pass' type='password' size="lg" value={password} onChange={(e) => setPass(e.target.value)}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Role' id='role' type='text' size="lg" value={role} onChange={(e) => setRole(e.target.value)}/>


            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' type='submit'>Login</MDBBtn>
            {/* <p className='ms-5'>Already have an Account? <a href="#!" class="link-info">Login</a></p> */}

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </form>
  );
}

export default SignUp;