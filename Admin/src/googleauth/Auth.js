
import React from 'react';
import {
  Button,
  CardTitle,
  Col,
  Row,
  Card,


} from "reactstrap";

// import logo from './logo'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import Google from './GoogleAuth';
import { GoogleLogin } from '@react-oauth/google';
import { Routes, Route } from 'react-router-dom';

import Breadcrumbs from "../components/Common/Breadcrumb"

function Auth({ onSuccess, onFailure }) {
  const onSuccessHandler = (response) => {
    onSuccess(response.tokenObj.access_token);
};

const onFailureHandler = (error) => {
    onFailure(error);
};

  return (
   <React.Fragment>
            {/* <Breadcrumbs title="UI Elements" breadcrumbItem="ownership" /> */}

     <div style={{'marginTop':'250px'}}>
     <Row className='mt-5'>
     
     <Col lg={3}>
     </Col>
     <Col lg={6}>
       <Card>
         <CardTitle>
          <div className='text-center'> 
         <p className='text-center'>Connect your Google Account and allow access to your Search Console data. </p>
         <p className='text-center'>If your website is verified in your Google Search Console, it will be automatically verified</p> 
         <GoogleOAuthProvider clientId="286943146870-h21okc0jtogcva4mrmi28h4fpkcaagum.apps.googleusercontent.com">
          
        <Row>
       <Col lg='3'>
       </Col>
       <Col lg='6'>
         <GoogleLogin
               shape="rectangular"
               ata-text="signup_with"
               // buttonText="Sign in with Google"
               onSuccess={credentialResponse => {
                 console.log(credentialResponse);

               }}
               onError={() => {
                 console.log('Login Failed');
               }}
               useOneTap
               
               // // clientId='286943146870-h21okc0jtogcva4mrmi28h4fpkcaagum.apps.googleusercontent.com'
               // buttonText="Sign in with Google"
               // onSuccess={onSuccessHandler}
               // onFailure={onFailureHandler}

             />
       
           
         </Col>
       <Col lg='3'>
       </Col>
        </Row>

         </GoogleOAuthProvider>
       </div>
         </CardTitle>
       </Card>
      
     </Col>
   </Row>
     </div>
   </React.Fragment>
  );
}

export default Auth









