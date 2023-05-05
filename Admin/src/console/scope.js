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
import { BASE_URL } from "./BaseUrl";
//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"
import Breadcrumbs from "../components/Common/Breadcrumb"
import Data from "./dropdown"
import Select from "react-select";


const options = [
  { value: 'https://', label: 'https://' },
  { value: 'http://', label: 'http://' }
];


// interface ChildProps {
//   parentFunction: Function
// }
const optionGroup = [
  {
    label: "select",
    options: [
      { label: "https://", value: "https://" },
      { label: "https://", value: "https://" },
    ],
  },
  // {
  //   label: "Camping",
  //   options: [
  //     { label: "Tent", value: "Tent" },
  //     { label: "Flashlight", value: "Flashlight" },
  //     { label: "Toilet Paper", value: "Toilet Paper" },
  //   ],
  // },
];

const DomainGroup = [
  {
    label: "SubDomain",
    options: [
      { label: "Exact URL", value: "Exact URL" },
      { label: "Domain", value: "Domain" },
      { label: "SubDomains", value: "SubDomains" }
    ]
  }
];

const Scope = (props) => {
  const [singlebtn, setSinglebtn] = useState(false)
  const [fnm, setfnm] = useState(false)
  const [lnm, setlnm] = useState(false)
  const [unm, setunm] = useState(false)
  const [city, setcity] = useState(false)
  const [stateV, setstateV] = useState(false)
  const [protocol, setProtocol] = useState(options[0].value);
  const [domain, setDomain] = useState('');
  const [path, setPath] = useState('');
  // const [user, setUser] = useState('');
  const [project,setProject]=useState('');
  const history = useHistory();
  const [selectedGroup, setselectedGroup] = useState(null);
  // const [selectedMulti, setselectedMulti] = useState(null);
  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }


  function handelSubmit() {
    const formData = new FormData();
    formData.append('project', project);

    fetch(`${BASE_URL}/verify/`, {
      method: 'POST',
      body: formData,
    })
      .then((response ) => {
        if(response.status >=400 ){
          response.json()
          .then((data) => {
            console.log(data)
            // alert(data.message)
            // alert('not verify')
          })
          

        }else{
          // response.json()
          // .then((data) => {
          //   // props.history.push('/dashboard')
           

          // })
          alert('verify domain')
          props.parentFunction("6")
          
          
        }
      })
     
      .catch((error) => {
        
        console.error('Error:', error);
      });

  }

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
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
      {/* <Breadcrumbs title="Search Console" breadcrumbItem="Goggle Console" /> */}
      <div className="mt-5 text-center"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   height: "100%",}}
      >

        <Row>
          <Col lg="2">
          </Col>
          <Col lg="8">
            {/* <Data /> */}
            <Card className="text-center">

              <CardBody>
                <CardTitle className="margin-auto"></CardTitle>
                <h3 style={{ textAlign: "center" }}>
                  Create a Project</h3>
                <CardSubtitle className="mb-3" style={{ textAlign: "center" }}>
                  Set up your website to start analyzing it.

                </CardSubtitle>

                <AvForm onValidSubmit={() => handelSubmit()}>

                  <Container>
                    <Row>
                      <Col sm={2} className="" >
                        {/* <form> 
                          <div className="mb-3">
                             <Label>Single Select</Label>
                             <Select
                              value={selectedGroup}
                              onChange={() => {
                                handleSelectGroup();
                              }}
                              options={optionGroup}
                              classNamePrefix="select2-selection" 
                            />
                          </div>

                         </form> */}
                      </Col>
                      <Col sm={8} >
                        <AvField
                          className="p-2"
                          name="Domain or path"
                          placeholder="Domain URL"
                          type="text"
                          errorMessage="Enter Domain path"
                          validate={{ required: { value: true } }}
                          onChange={(e) => setProject(e.target.value)}
                        />

                      </Col>
                      <Col sm={2} >
                        {/* <div className="mb-3">
                          <Select
                            value={selectedGroup}
                            onChange={() => {
                              handleSelectGroup();
                            }}
                            options={DomainGroup}
                            classNamePrefix="select2-selection"
                          />
                        </div> */}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="2">
                      </Col>
                      <Col lg='8'>
                        <p className='mb-4'>We recommend using the “http + https” protocol along with the non-www version of your domain.
                          You’ll get the most complete backlink profile and accurate tracking data this way.</p>


                        <AvField
                          className="p-2"
                          name="project name"
                          type="project name"
                          placeholder="project name"
                          errorMessage="Enter project name"
                          value={toTitleCase(project.split(".")[0])}
                          validate={{ required: { value: true } }}
                          onChange={(e) => setProject(e.target.value)}
                        />
                        <div className="form-check mb-2">
                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                        <Button color="primary" type="submit">
                          Submit form
                        </Button>
                      </Col>
                    </Row>
                  </Container>

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

// import {
//   Row,
//   Col,

// } from "reactstrap"
// import GoogleAuth from './GoogleAuth';

// function App() {
//   return (
//     <div className="mt-4">
//     <Row>
//     <Col lg='3'>
//      </Col>
//      <Col lg='6'>
//      <GoogleAuth>
//       </GoogleAuth>
//      </Col>
//      <Col lg='3'>
//      </Col>
//     </Row>
//     </div>
//   );
// }

// export default App