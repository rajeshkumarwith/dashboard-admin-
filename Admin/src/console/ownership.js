
import React from 'react';
import {
  Button,
  CardTitle,
  Col,
  Row,
  Card,


} from "reactstrap";

import logo from './logo'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './GoogleAuth';
import { GoogleLogin } from '@react-oauth/google';
import { Routes, Route } from 'react-router-dom';


function Ownership(props) {
  //   const onSuccessHandler = (response) => {
  //     onSuccess(response.tokenObj.access_token);
  // };

  // const onFailureHandler = (error) => {
  //     onFailure(error);
  // };

  return (
    <Row className='mt-5'>

      <Col lg={3}>
      </Col>
      <Col lg={6}>
        <Card>
          <CardTitle>
            <div className='text-center'>
              <h2 className='text-center'>Verify ownership</h2>
              <p className='text-center mt-4 '>Connect your Google Account and allow access to your Search Console data. </p>
              <p className='text-center'>If your website is verified in your Google Search Console, it will be automatically verified</p>
              <GoogleOAuthProvider clientId="286943146870-h21okc0jtogcva4mrmi28h4fpkcaagum.apps.googleusercontent.com">

                <Row>
                  <Col lg='4'>
                  </Col>
                  <Col lg='6'>
                    <div className='text-center' style={{'marginTop':'20px'}}>
                      <GoogleLogin
                        shape="rectangular"
                        ata-text="signup_with"
                        buttonText="Sign in with Google"
                        onSuccess={credentialResponse => {
                          console.log(credentialResponse);
                          props.parentFunction("7")

                          alert('succussfully login')

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

                    </div>
                        <div style={{'marginTop':'50px'}}>

                        </div>
                  </Col>
                  <Col lg='1'>
                  </Col>
                </Row>

              </GoogleOAuthProvider>
            </div>
          </CardTitle>
        </Card>

      </Col>
    </Row>
  );
}

export default Ownership









