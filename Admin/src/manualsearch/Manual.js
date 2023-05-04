import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  TabContent,
  TabPane,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  Card,
  Row,
  Col,
  CardBody,
  CardTitle,
  FormGroup,
  Button,

} from "reactstrap"

import { Link } from "react-router-dom"

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"
// import Breadcrumbs from "../components/Common/Breadcrumb"
// import Scope from './scope'
// import Ownership from "./ownership"
import classnames from "classnames"

// import Audit from './audit'
// import Scope from  "./console/navbar"
import Breadcrumbs from  "../components/Common/Breadcrumb"

import Scope from '../console/scope'
import Ownership from "../console/ownership"
import Audit from '../console/audit'

const Navbar = () => {
  const [activeTab, setactiveTab] = useState("1")
  const [activeTabV, setactiveTabV] = useState("15")
  const [activeTabJustify, setactiveTabJustify] = useState("5")
  const [activeTabJustify2, setactiveTabJustify2] = useState("25")
  const [modal_center, setmodal_center] = useState(false)

  const [col1, setcol1] = useState(true)
  const [col2, setcol2] = useState(false)
  const [col3, setcol3] = useState(false)
  const [col5, setcol5] = useState(true)

  function toggle(tab) {
    alert('asdasdasdasdasd')
    if (activeTab !== tab) {
      setactiveTab(tab)
    }
  }
  function toggleV(tab) {
    alert('asdasdasdasdasd')
    if (activeTabV !== tab) {
      setactiveTabV(tab)
    }
  }

  const parentFunction = (value) => {
    // alert('asdfsadfasd')
    setactiveTabJustify(value)

  }


  function abc(){
    //alert('asdasd')
    setactiveTabJustify("5")
  }
  // const parent=()=>{
  //   setactiveTabJustify("6")
  // }
  // function data(){
  //   setactiveTabJustify("5")
  // }
  function toggleCustomJustified(tab) {
    if (activeTabJustify !== tab) {
      setactiveTabJustify(tab)
    }
  }

  function toggleCustomJustified2(tab) {
    if (activeTabJustify2 !== tab) {
      setactiveTabJustify2(tab)
    }
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  function tog_center() {
    setmodal_center(!modal_center)
    removeBodyCss()
  }

  return (
    <React.Fragment>
      <div className="page-content" >
        {/* <h1>Search Console</h1> */}
        <Breadcrumbs title="Search Console" breadcrumbItem="Search Console" />

        <Row>
          <Col lg={12}>
            {/* <Card>
              <CardBody>
                <CardTitle className="h4">Custom Tabs</CardTitle> */}

                <Nav tabs className="nav-tabs-custom nav-justified">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTabJustify === "5",
                      })}
                      onClick={() => {
                        toggleCustomJustified("5")
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                      <span className="d-none d-sm-block">1  Scope</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTabJustify === "6",
                      })}
                      onClick={() => {
                        toggleCustomJustified("6")
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                      <span className="d-none d-sm-block">2 Ownership</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTabJustify === "7",
                      })}
                      onClick={() => {
                        toggleCustomJustified("7")
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                      <span className="d-none d-sm-block">3 Site Audit</span>
                    </NavLink>
                  </NavItem>

                </Nav>

                <TabContent activeTab={activeTabJustify}>
                  <TabPane tabId="5" className="p-1">
                    <Scope parentFunction={parentFunction}/>
                  </TabPane>
                  <TabPane tabId="6" className="p-2" > 
                  <div onClick={() => {
                        abc()
                      }}
                     ></div>
                      <Ownership parentFunction={parentFunction}/>

                    {/* <div onClick={()=>{
                      data()
                    }}>PQRS</div>
                    <Ownership parent={parent} /> */}
                  </TabPane>
                  <TabPane tabId="7" className="p-3">
                    {/* <p className="mb-0"></p> */}
                    <Audit />
                  </TabPane>
                </TabContent>

          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Navbar