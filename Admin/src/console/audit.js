import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Row,
} from "reactstrap";


import "@vtaits/react-color-picker/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";

import Select from "react-select";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb";



const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];

const FormAdvanced = () => {
  const [selectedMulti, setselectedMulti] = useState(null);

 
  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  return (
    <React.Fragment>
      
        <Row >
         <Col lg={2}>
         
         </Col>
         <Col  lg={6}>
            <Card>
              <CardBody>

                <form className="mt-4">
                  <Row>
                    <div className="text-center mb-3">
                      <label className="control-label">Multiple Select Queries</label>
                      <Select
                        value={selectedMulti}
                        isMulti={true}
                        onChange={() => {
                          handleMulti();
                        }}
                        options={optionGroup}
                        classNamePrefix="select2-selection"
                      />
                    </div>
                    

                  </Row>
                  
                  <Row className="mb-3">
                  <div className="text-center">
                  <label className="control-label">Munnualy Select Queries</label>
                    <div className="col-lg-12">
                      <textarea id="txtAddress1Billing" name="txtAddress1Billing"
                        rows="4" className="form-control"></textarea>
                    </div>
                  </div>
                  </Row>
                  <div className="text-center">
                  <Button type='submit'>submit</Button>
                  </div>
                  
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </React.Fragment>
  );
};

export default FormAdvanced;
