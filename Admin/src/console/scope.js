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
  Label
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { useHistory } from 'react-router-dom';

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"
import Breadcrumbs from "../components/Common/Breadcrumb"
import Data from "./dropdown"
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
  const [project, setProject] = useState('');
  const history=useHistory();

  function loadData(url) {
    fetch(url).then((result) => {
      result.json().then((resp) => {
        console.log(resp, 'resreafsdfsd')
        setProject(resp)
        history.push('/dashboard')

      })
    })
  }


  function handelSubmit(props) {
    // console.log(project, "gfhfghgfhfgh")
    loadData(`http://127.0.0.1:8000/verify/?project=${project}`)
  }

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

                <AvForm onSubmit={() => handelSubmit()}> 
 
                 <Container> 
                    <Row> 
                       <Col sm={1} className="me-2" >
                        <select className="p-1" id="dropdown">
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
                          onChange={(e) => setProject(e.target.value)}
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
                    onChange={(e) => setProject(e.target.value)}
                  />

                  <div className="form-check mb-3">
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                  <Button color="primary" type="submit">
                    Submit form
                  </Button>
                </AvForm> 
                {/* <AvForm className="needs-validation" onSubmit={() => handelSubmit()}>
                  <Row>
                    <Col md="12">
                      <div className="mb-3">
                        <Label htmlFor="validationCustom01" value={project}>project</Label>
                        <AvField
                          className="mb-4"
                          name="project name"
                          type="project name"
                          placeholder="project name"
                          errorMessage="Enter project name"
                          validate={{ required: { value: true } }}
                          onChange={(e) => setProject(e.target.value)}
                        />
                      </div>
                    </Col> */}
                    {/* <Col md="6">
                      <div className="mb-3">
                        <Label htmlFor="validationCustom02" value={project}>project</Label>
                        <AvField
                          className="mb-4"
                          name="project name"
                          type="project name"
                          placeholder="project name"
                          errorMessage="Enter project name"
                          validate={{ required: { value: true } }}
                          onChange={(e) => setProject(e.target.value)}
                        />
                      </div> */}
                    {/* </Col> */}
                  {/* </Row> */}

                  {/* <div className="form-check mb-3">
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                  <Button color="primary" type="submit">
                    Submit form
                  </Button> */}
                {/* </AvForm> */}
                {/* <FormGroup className="mb-5" >
                  <div style={{
                    textAlign: 'center',
                    marginVertical: 6
                  }}>
                    <Button type="submit" color="primary" className="mb-5"
                    >
                      Continue
                    </Button>
                  </div>
                </FormGroup> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Scope





