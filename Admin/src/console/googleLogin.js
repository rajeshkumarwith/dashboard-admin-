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


const Google= () => {


  return (
    <GoogleLogin
    shape="rectangular"
    ata-text="signup_with"
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


