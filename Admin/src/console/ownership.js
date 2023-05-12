
import React, { useState, useEffect } from 'react';
import {
  Button,
  CardTitle,
  Col,
  Row,
  Card,
  CardBody,


} from "reactstrap";

import axios from 'axios';
import logo from './logo'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './GoogleAuth';
import { GoogleLogin } from '@react-oauth/google';
import { useHistory } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Breadcrumbs from '../components/Common/Breadcrumb';
import { BASE_URL } from './BaseUrl';


function Ownership(props) {
  const [response, setResponse] = useState(null);

  const handleClick = () => {
    fetch(`${BASE_URL}/token/`)
      .then(response => response.json())
      .then(data => setResponse(data));
      if (response>=400){
        response.json().then((data)=>
        console.log(data,'dddddddddddd'))
      }else{
        props.parentFunction("7")

      }
      
       
  };

  return (
    <>
      <React.Fragment>
        <Breadcrumbs title="Ownership" breadcrumbItem="Goggle Ownership" />
        <Row>
          <Col lg='3'>
          </Col>
          <Col lg='6'>
            <Card>
              <CardBody>
                <CardTitle>
                  <div className='text-center'>
                    <h2 className='text-center'>Verify ownership</h2>
                    <p className='text-center mt-3 '>Connect your Google Account and allow access to your Search Console data. </p>
                    <p className='text-center'>If your website is verified in your Google Search Console, it will be automatically verified</p>
                    <div className='text-center mt-4' >
                      {/* <Button onSubmit={handleLogin}  style={{'width':'150px','height':'50px'}} color='primary' className='text-center'>
                        Google login
                      </Button>
                       */}
                      <Button color='primary' onClick={handleClick}>Google Login</Button>
                      {response &&
                        <div>
                          {/* <p>Access Token: {response.AccessToken}</p>
                          <p>Refresh Token: {response.RefreshToken}</p> */}
                        </div>
                      }
                    </div>
                  </div>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col lg='3'>
          </Col>
        </Row>
      </React.Fragment>


    </>
  );
}

export default Ownership








// <Row className='mt-5'>

// <Col lg={3}>
// </Col>
// <Col lg={6}>
//   <Card>
//     <CardTitle>
//       <div className='text-center'>
//         <h2 className='text-center'>Verify ownership</h2>
//         <p className='text-center mt-4 '>Connect your Google Account and allow access to your Search Console data. </p>
//         <p className='text-center'>If your website is verified in your Google Search Console, it will be automatically verified</p>
//         <GoogleOAuthProvider clientId="286943146870-h21okc0jtogcva4mrmi28h4fpkcaagum.apps.googleusercontent.com">

//           <Row>
//             <Col lg='4'>
//             </Col>
//             <Col lg='6'>
//               <div className='text-center' style={{ 'marginTop': '20px' }}>
//                 <GoogleLogin
//                   shape="rectangular"
//                   ata-text="signup_with"
//                   buttonText="Sign in with Google"
//                   onSuccess={credentialResponse => {
//                     console.log(credentialResponse);
//                     props.parentFunction("7")

//                     alert('succussfully login')

//                   }}
//                   onError={() => {
//                     console.log('Login Failed');
//                   }}
//                   useOneTap

//                 // // clientId='286943146870-h21okc0jtogcva4mrmi28h4fpkcaagum.apps.googleusercontent.com'
//                 // buttonText="Sign in with Google"
//                 // onSuccess={onSuccessHandler}
//                 // onFailure={onFailureHandler}

//                 />

//               </div>
//               <div style={{ 'marginTop': '50px' }}>

//               </div>
//             </Col>
//             <Col lg='1'>
//             </Col>
//           </Row>

//         </GoogleOAuthProvider>
//       </div>
//     </CardTitle>
//   </Card>

// </Col>
// </Row>