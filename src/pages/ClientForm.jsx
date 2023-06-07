import React from 'react';
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

function ClientForm() {
  return (
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Complete your Application</h2>

          
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Full Name' id='form1' type='text'/>
            </MDBCol>

          <MDBInput wrapperClass='mb-4' label='age' id='form1' type='number'/>
          <MDBInput wrapperClass='mb-4' label='Contact' id='form1' type='tel'/>
          <MDBInput wrapperClass='mb-4' label='City' id='form1' type='text'/>


          <MDBBtn className='w-50 mb-4' size='sm'>Ready</MDBBtn>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default ClientForm;