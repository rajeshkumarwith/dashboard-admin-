// import React, { useState } from "react"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import {
//   TabContent,
//   TabPane,
//   Collapse,
//   NavLink,
//   NavItem,
//   Nav,
//   Card,
//   Row,
//   Col,
//   CardBody,
//   CardTitle,
//   FormGroup,
//   Button,

// } from "reactstrap"

// import { Link } from "react-router-dom"

// //Import Breadcrumb
// // import Breadcrumbs from "../../components/Common/Breadcrumb"
// import Breadcrumbs from "../components/Common/Breadcrumb"
// import Scope from './scope'
// import Ownership from "./ownership"
// import classnames from "classnames"

// import Audit from './audit'
// // import Scope from  "./console/navbar"

// const Navbar = () => {
//   const [activeTab, setactiveTab] = useState("1")
//   const [activeTabV, setactiveTabV] = useState("15")
//   const [activeTabJustify, setactiveTabJustify] = useState("5")
//   const [activeTabJustify2, setactiveTabJustify2] = useState("25")
//   const [modal_center, setmodal_center] = useState(false)

//   const [col1, setcol1] = useState(true)
//   const [col2, setcol2] = useState(false)
//   const [col3, setcol3] = useState(false)
//   const [col5, setcol5] = useState(true)

//   function toggle(tab) {
//     alert('asdasdasdasdasd')
//     if (activeTab !== tab) {
//       setactiveTab(tab)
//     }
//   }
//   function toggleV(tab) {
//     alert('asdasdasdasdasd')
//     if (activeTabV !== tab) {
//       setactiveTabV(tab)
//     }
//   }

//   const parentFunction = (value) => {
//     // alert('asdfsadfasd')
//     setactiveTabJustify(value)

//   }


//   function abc(){
//     //alert('asdasd')
//     setactiveTabJustify("5")
//   }
//   // const parent=()=>{
//   //   setactiveTabJustify("6")
//   // }
//   // function data(){
//   //   setactiveTabJustify("5")
//   // }
//   function toggleCustomJustified(tab) {
//     if (activeTabJustify !== tab) {
//       setactiveTabJustify(tab)
//     }
//   }

//   function toggleCustomJustified2(tab) {
//     if (activeTabJustify2 !== tab) {
//       setactiveTabJustify2(tab)
//     }
//   }

//   function removeBodyCss() {
//     document.body.classList.add("no_padding")
//   }

//   function tog_center() {
//     setmodal_center(!modal_center)
//     removeBodyCss()
//   }

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Breadcrumbs title="UI Elements" breadcrumbItem="Tabs & Accordions" />

//         <Row>
//           <Col lg={12}>
//             {/* <Card>
//               <CardBody>
//                 <CardTitle className="h4">Custom Tabs</CardTitle> */}

//                 <Nav tabs className="nav-tabs-custom nav-justified">
//                   <NavItem>
//                     <NavLink
//                       style={{ cursor: "pointer" }}
//                       className={classnames({
//                         active: activeTabJustify === "5",
//                       })}
//                       onClick={() => {
//                         toggleCustomJustified("5")
//                       }}
//                     >
//                       <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
//                       <span className="d-none d-sm-block">1  Scope</span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       style={{ cursor: "pointer" }}
//                       className={classnames({
//                         active: activeTabJustify === "6",
//                       })}
//                       onClick={() => {
//                         toggleCustomJustified("6")
//                       }}
//                     >
//                       <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
//                       <span className="d-none d-sm-block">2 Ownership</span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       style={{ cursor: "pointer" }}
//                       className={classnames({
//                         active: activeTabJustify === "7",
//                       })}
//                       onClick={() => {
//                         toggleCustomJustified("7")
//                       }}
//                     >
//                       <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
//                       <span className="d-none d-sm-block">3 Site Audit</span>
//                     </NavLink>
//                   </NavItem>

//                 </Nav>

//                 <TabContent activeTab={activeTabJustify}>
//                   <TabPane tabId="5" className="p-1">
//                     <Scope parentFunction={parentFunction}/>
//                   </TabPane>
//                   <TabPane tabId="6" className="p-2" > 
//                   <div onClick={() => {
//                         abc()
//                       }}
//                      ></div>
//                       <Ownership parentFunction={parentFunction}/>

//                     {/* <div onClick={()=>{
//                       data()
//                     }}>PQRS</div>
//                     <Ownership parent={parent} /> */}
//                   </TabPane>
//                   <TabPane tabId="7" className="p-3">
//                     {/* <p className="mb-0"></p> */}
//                     <Audit />
//                   </TabPane>
//                 </TabContent>

//           </Col>
//         </Row>
//       </div>
//     </React.Fragment>
//   )
// }

// export default Navbar

// import React, { Routes, Route, useNavigate, useState } from "react"
import React, { useState,useHistory } from 'react'
import { CardTitle } from "reactstrap"


import {

  Card,
  Row,
  Col,
  // CardTitle,
  CardBody,
  Button,


} from "reactstrap"
import Breadcrumbs from "../components/Common/Breadcrumb"
import { useNavigate } from "react-router-dom"

import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './GoogleAuth';
import { GoogleLogin } from '@react-oauth/google';
import Ownership from "./ownership";
// import {Routes, Route, useNavigate} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


function Navbar(props) {
  console.log(props.history)
  
  return (
    <>
      <React.Fragment>
        <div style={{'marginTop':'120px'}}> 
          <h1>Search Console</h1>
        </div>
        <div className="page-content">
          <Row>
            <Col lg='2'>
            </Col>
            <Col lg='4'>
              <Card>
                <CardBody>
                  <div>
                    <h3>Google Search Console</h3>
                    <p className="mt-4 fs-4">Import from GSC</p>
                    <Row>
                      <Col lg='1'>
                      </Col>
                      <Col lg='5'>
                        <p>Automatic ownership Verification</p>
                        <p>Import Multiple Project at once</p>
                        <p>Edit project settings later</p>
                      </Col>
                    </Row>


                    <Button style={{ 'width': "200px", 'height': "50px", 'marginTop': '10px', }} 
                    color="primary" type="submit">
                      <GoogleOAuthProvider clientId="286943146870-h21okc0jtogcva4mrmi28h4fpkcaagum.apps.googleusercontent.com">
           
           <Row>
          <Col lg='3'>
          </Col>
          <Col lg='6'>
            <GoogleLogin
                  // shape="rectangular"
                  // ata-text="signup_with"
                  // buttonText="Sign in with Google"
                  buttonText='Import'
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
  
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                  // useOneTap
  
                />
          
              
            </Col>
          <Col lg='3'>
          </Col>
           </Row>
  
            </GoogleOAuthProvider>
                      Import
                    </Button>


                    <p className="mt-4">we'll ask you to connect your Google Account and select with project to import</p>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg='4'>
              <Card>
                <CardBody>
                  <h4 className='fs-4' style={{ 'marginTop': '50px', }}>Add Manually</h4>
                  <Row>
                    <Col lg='1'>
                    </Col>
                    <Col lg='6'>
                      <Row>
                        <Col lg='1'>
                        </Col>
                        <Col lg='10'>
                          <p className="mt-3">Manually ownership Verification required</p>
                          <p>Add one project at time</p>
                          <p>Fully configure during creation</p>
                        </Col>
                      </Row>
                    </Col>
                    <Row>
                      <Col lg='1'>
                      </Col>
                      <Col lg='2'>
                        <Button type='buton' onClick={()=>props.history.push('/manual')} 
                          className='mt-4' style={{ 'width': '200px', 'height': '50px', 'marginTop': '5px', }} color='primary'>

                          Add Manually
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='4'>
                        <div style={{ 'width': '200px', 'height': '50px', 'marginTop': '25px', }}>
                          {/* <p className="text-center" style={{'marginTop':'60px',}}>hello</p> */}
                        </div>
                      </Col>
                    
                    </Row>
                   
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg='2'></Col>
            {/* <Col lg='1'>
            </Col> */}
          </Row>
        </div>
      </React.Fragment>
    </>
  )
}
export default Navbar