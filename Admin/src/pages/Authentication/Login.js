import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react"

import { Row, Col, Alert, Container } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// actions
import { loginUser, apiError, socialLogin } from "../../store/actions"
import { BASE_URL } from '../../console/BaseUrl'

function Login(props){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit = () => {
    // event.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    fetch(`${BASE_URL}/login/`, {
      method: 'POST',
      body: formData,
    })
      .then((response ) => {
        if(response.status >=400 ){
          response.json()
          .then((data) => {
            console.log(data)
          })
          alert('User not found')

        }else{
          response.json()
          .then((data) => {
            localStorage.setItem("authUser", JSON.stringify(data))
            props.history.push('/dashboard')
            alert('login success')
          })
          
          
        }
      })
      // .then((data) => {
      //   console.log('Success:', data);
      //   // props.history.push('/dashboard')
      // })
      .catch((error) => {
        console.error('Error:', error);
      });
    };
  
  return (
    <>
     <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Welcome Back !</h5>
                    <p className="text-white-50 mb-0">Sign in to continue to Doddle HQ.</p>
                    {/* <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link> */}
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      // onValidSubmit={(e, v) => {
                      //   handleValidSubmit(e, v)
                      // }}
                      onSubmit={handleSubmit}
                    >
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          value="admin@themesbrand.com"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          value="123456"
                          type="password"
                          required
                          placeholder="Enter Password"
                          onChange={(e) =>setPassword(e.target.value)}
                        />

                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/page-recoverpw" className="text-muted"><i
                          className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
                      </div>
                    </AvForm>

                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>Don't have an account ? <Link to="/pages-register"
                  className="fw-medium text-primary"> Signup now </Link> </p>
                <p>© {new Date().getFullYear()} Doddle HQ. Crafted with <i
                  className="mdi mdi-heart text-danger"></i> by Themesbrand
                        </p>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
    </>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
)

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func
}




