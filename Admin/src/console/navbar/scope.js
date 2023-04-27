import React, { useState } from "react"

import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Container,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"
import Breadcrumbs from "../components/Common/Breadcrumb"
import Data from "./dropdown"
import KeywordSelector from './KeywordSelector'
const options = [
  { value: 'https://', label: 'https://' },
  { value: 'http://', label: 'http://' }
];

const Scope = () => {
  const [singlebtn, setSinglebtn] = useState(false)
  const [fnm, setfnm] = useState(false)
  const [lnm, setlnm] = useState(false)
  const [unm, setunm] = useState(false)
  const [city, setcity] = useState(false)
  const [stateV, setstateV] = useState(false)
  const [protocol, setProtocol] = useState(options[0].value);
  const [domain, setDomain] = useState('');
  const [path, setPath] = useState('');

  const handlSubmit = (event) => {
    event.preventDefault();

    const url = `${protocol}${domain}${path}`;
    console.log(url);
  };

  function handleSubmit(e) {
    e.preventDefault()

    var fnm = document.getElementById("validationTooltip01").value
    var lnm = document.getElementById("validationTooltip02").value
    var unm = document.getElementById("validationTooltipUsername").value
    var city = document.getElementById("validationTooltip03").value
    var stateV = document.getElementById("validationTooltip04").value

    if (fnm === "") {
      setfnm(false)
    } else {
      setfnm(true)
    }

    if (lnm === "") {
      setlnm(false)
    } else {
      setlnm(true)
    }

    if (unm === "") {
      setunm(false)
    } else {
      setunm(true)
    }

    if (city === "") {
      setcity(false)
    } else {
      setcity(true)
    }

    if (stateV === "") {
      setstateV(false)
    } else {
      setstateV(true)
    }

    var d1 = document.getElementsByName("validate")

    document.getElementById("tooltipForm").classList.add("was-validated")

    for (var i = 0; i < d1.length; i++) {
      d1[i].style.display = "block"
    }
  }

  //for change tooltip display propery
  function changeHandeler(event, eleId) {
    if (event.target.value !== "")
      document.getElementById(eleId).style.display = "none"
    else document.getElementById(eleId).style.display = "block"
  }

  return (
    <React.Fragment>
      <div className="page-content" style={{
        display: "flex",
        alignItems: "center",
        height: "100%"
      }}>
        <Breadcrumbs title="Form" breadcrumbItem="Form Validation" />
        <Row>
          <Col lg="8">
            {/* <Data /> */}
            <Card>

              <CardBody>
                <CardTitle className="margin-auto"></CardTitle>
                <h3 style={{ textAlign: "center" }}>
                  Create a Project</h3>
                <CardSubtitle className="mb-3" style={{ textAlign: "center" }}>
                  Set up your website to start analyzing it.

                </CardSubtitle>

                <AvForm>
                
                    <Container>
                    <Row>
                      <Col sm={1} className="me-2" >
                        <select className="p-1"  id="dropdown">
                          <option value="N/A">https</option>
                          <option value="1">https</option>
                          <option value="2">http</option>
                        </select>

                      </Col>
                      <Col sm={7} >
                        <AvField 
                          className="p-1"
                          name="Domain or path"
                          placeholder="Type Something"
                          type="text"
                          errorMessage="Enter Domain path"
                          validate={{ required: { value: true } }}
                        />

                      </Col>
                      <Col sm={1} >
                        <select className="p-1" id="dropdown">
                          <option value="N/A">SubDomain</option>
                          <option value="1">Exact URL</option>
                          <option value="2">Domain</option>
                          <option value="3">SubDomains</option>
                        </select>

                      </Col>
                      </Row>

                    </Container>
                  <p className='mb-5'>We recommend using the “http + https” protocol along with the non-www version of your domain.
                    You’ll get the most complete backlink profile and accurate tracking data this way.</p>
                  <AvField
                    className="mb-4"
                    name="project name"
                    type="project name"
                    placeholder="project name"
                    errorMessage="Enter project name"
                    validate={{ required: { value: true } }}
                  />
                  
                  <FormGroup className="mb-5" >
                    <div style={{
                      textAlign: 'center',
                      marginVertical: 8
                    }}>
                      <Button type="submit" color="primary" className="mb-5"
                      >
                        Continue
                      </Button>
                    </div>

                  </FormGroup>
                </AvForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Scope





