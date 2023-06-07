import React, { useState } from 'react';
import Axios from 'axios'; 
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function LawyerForm() {

    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [currentFirm, setFirm] = useState('')
    const [city, setCity] = useState('')
    const [highestEducationDegree, setDegree] = useState('')
    const [accredationInstitute, setAccredation] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();

        Axios.put("http://localhost:3000/updateLawyer", {
          name,
          contact,
          currentFirm,
          city,
          highestEducationDegree,
          accredationInstitute

  },
  {withCredentials: true, credentials: 'include'})
      .then((response) => {
          console.log(response)
      })
      .catch((err) => {
          console.log(err.message);
      })
    
    }
  return (
    <form onSubmit={handleSubmit} action="#">
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Complete your Application</h2>

          
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Full Name' id='form1' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </MDBCol>

          <MDBInput wrapperClass='mb-4' label='Contact' id='form1' type='tel' value={contact} onChange={(e) => setContact(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Firm' id='form1' type='text' value={currentFirm} onChange={(e) => setFirm(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Accredation Institute' id='form1' type='text' value={accredationInstitute} onChange={(e) => setAccredation(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Highest Education Degree' id='form1' type='text' value={highestEducationDegree} onChange={(e) => setDegree(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='City' id='form1' type='text' value={city} onChange={(e) => setCity(e.target.value)}/>


          <MDBBtn className='w-50 mb-4' size='sm' type='submit'>Ready</MDBBtn>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </form>
  );
}

export default LawyerForm;