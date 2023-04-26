
// // import React from 'react';


// // import { GoogleOAuthProvider } from '@react-oauth/google';
// // import Google from './googleLogin';


// // function Ownership() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         {/* <img src={logo} className="App-logo" alt="logo" /> */}

// //         <GoogleOAuthProvider clientId="286943146870-h21okc0jtogcva4mrmi28h4fpkcaagum.apps.googleusercontent.com">
// //           <Google />
// //         </GoogleOAuthProvider>
// //       </header>
// //     </div>
// //   );
// // }

// // export default Ownership













import React, { useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
} from "reactstrap"

import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"
import Breadcrumbs from "../components/Common/Breadcrumb"
import Audit from './audit'
import Scope from './scope'


import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './googleLogin';


// // interface ChildProps {
// //     parentFunction: Function
// // }

// // interface ChildProps{
// //     parent:Function
// // }

const Ownership = (props) => {
  // const [activeTab, setactiveTab] = useState("1")
  // const [activeTabV, setactiveTabV] = useState("15")
  const [modal_standard, setmodal_standard] = useState(false)
  const [modal_large, setmodal_large] = useState(false)
  const [modal_xlarge, setmodal_xlarge] = useState(false)
  const [modal_small, setmodal_small] = useState(false)
  const [modal_center, setmodal_center] = useState(false)
  const [modal_scroll, setmodal_scroll] = useState(false)
  const [modal_fullscreen, setmodal_fullscreen] = useState(false)
  const [modal_backdrop, setmodal_backdrop] = useState(false)
  const [activeTabJustify, setactiveTabJustify] = useState("5")
  const [activeTabJustify2, setactiveTabJustify2] = useState("25")
  const [col1, setcol1] = useState(true)
  const [col2, setcol2] = useState(false)
  const [col3, setcol3] = useState(false)


  function tog_standard() {
    setmodal_standard(!modal_standard)
    removeBodyCss()
  }

  function tog_fullscreen() {
    setmodal_fullscreen(!modal_fullscreen)
    removeBodyCss()
  }

  function tog_backdrop() {
    setmodal_backdrop(!modal_backdrop)
    removeBodyCss()
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  function tog_large() {
    setmodal_large(!modal_large)
    removeBodyCss()
  }

  function tog_xlarge() {
    setmodal_xlarge(!modal_xlarge)
    removeBodyCss()
  }

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  function tog_center() {
    setmodal_center(!modal_center)
    removeBodyCss()

  }

  function tog_scroll() {
    setmodal_scroll(!modal_scroll)
    removeBodyCss()
  }

  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="UI Elements" breadcrumbItem="Modals" />
        <h1 className="text-center">Verify ownership</h1>
        <p className="text-center">To use Ahrefs and check your website for free, please prove that you own your website.</p>
        {/* <h3 className="mt-2 text-center">To use Ahrefs and check your website for free, please prove that you own your website.</h3>
                <div style={{
                    margin: "auto",
                    display: "table",
                }}>
                    <a className="text-center" href='search-console'> Enter a valid URL.</a>to start verification.
                </div> */}
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <Row>
                  <Col lg={12}>
                    <div className="accordion" id="accordionExample">
                      {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button"
                            onClick={() => {
                              setcol1(!col1)
                            }}
                            style={{ cursor: "pointer" }}>
                            Accordion Item #1
                          </button>
                        </h2>

                      </div> */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button"
                            onClick={() => {
                              setcol2(!col2)
                            }}
                            style={{ cursor: "pointer", backgroundColor: '#00ff00' }}>
                            Google Search Console (recommendent)
                          </button>
                        </h2>
                        <Collapse id="collapseTwo" className="accordion-collapse" isOpen={col2}>
                          <div className="accordion-body">
                            Connect your Google Account and allow access to your Search Console data.
                            If your website is verified in your Google Search Console, it will be automatically verified in Ahrefs.
                          </div>
                          <div className="accordion-body">
                            <div className="App">
                              <header className="App-header">
                                {/* <img src={logo} className="App-logo" alt="logo" /> */}

                                <GoogleOAuthProvider clientId="286943146870-h21okc0jtogcva4mrmi28h4fpkcaagum.apps.googleusercontent.com">
                                  <Google />
                                </GoogleOAuthProvider>
                              </header>
                            </div>
                          </div>
                        </Collapse>
                      </div>
                      {/* <div className="accordion-item">
                       
                      </div> */}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Ownership


// import React from 'react';


// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Google from './googleLogin';


// function Ownership() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}

//         <GoogleOAuthProvider clientId="286943146870-h21okc0jtogcva4mrmi28h4fpkcaagum.apps.googleusercontent.com">
//           <Google />
//         </GoogleOAuthProvider>
//       </header>
//     </div>
//   );
// }

// export default Ownership







