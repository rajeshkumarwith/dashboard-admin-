
import React from 'react';
import {
  Button,
  Col,
  Row,

} from "reactstrap";

import logo from './logo'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './googleLogin';
import { GoogleLogin } from '@react-oauth/google';


function Ownership() {
  return (
    <Row className='mt-5'>
      {/* <p className='text-center'>Connect your Google Account and allow access to your Search Console data. </p>
      <p className='text-center'>If your website is verified in your Google Search Console, it will be automatically verified in Ahrefs</p>
      <Col lg={5}>
      </Col>
      <Col lg={6}>
        <div className="App">
          <header className="App-header">
            <GoogleOAuthProvider clientId="286943146870-h21okc0jtogcva4mrmi28h4fpkcaagum.apps.googleusercontent.com">
              
                <Google/>
            </GoogleOAuthProvider>
          </header>
        </div>
      </Col> */}
      <Col lg={3}>
      </Col>
      <Col lg={6}>

        <div className='text-center'>
          <p className='text-center'>Connect your Google Account and allow access to your Search Console data. </p>
          <p className='text-center'>If your website is verified in your Google Search Console, it will be automatically verified in Ahrefs</p>
          <GoogleOAuthProvider clientId="286943146870-h21okc0jtogcva4mrmi28h4fpkcaagum.apps.googleusercontent.com">
            <Button>
              <GoogleLogin
                shape="rectangular"
                ata-text="signup_with"
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);

                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                useOneTap
              />
            </Button>

          </GoogleOAuthProvider>
        </div>
      </Col>
    </Row>
  );
}

export default Ownership









