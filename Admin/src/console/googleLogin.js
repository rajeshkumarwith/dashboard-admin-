// import axios from 'axios';
// // @param {*} accesstoken This is the accesstoken of the user obtained from Google

// const googleLogin = async (accesstoken) => {
//   let res = await axios.post('http://localhost:8000/rest-auth/google/', {
//     access_token: accesstoken,
//   });
//   console.log(res,'rrrrrrrrrrrr');
//   return res.status;
// };

// export default googleLogin;


import React from 'react';

import { GoogleLogin } from '@react-oauth/google';
// import { useEffect, useState } from 'react';
// const { createProxyMiddleware } = require('http-proxy-middleware');


const Google= () => {


  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);

      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  )
}

export default Google


