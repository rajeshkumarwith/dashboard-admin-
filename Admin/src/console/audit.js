import React, { useEffect, useState } from "react";
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
      { label: "rajesh", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
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

const FormAdvanced = () => {
  const [selectedMulti, setselectedMulti] = useState(null);
  const [user, setUser] = useState(null);
  // const [selectedItems, setSelectedItems] = useState(null)

  useEffect(() => {
    loaddata(`http://127.0.0.1:8000/keyword`)
  }, [])

  function loaddata(url) {
    fetch(url).then((results) => {
      results.json().then((resp) => {
        setUser(resp)
      })
    })
  }
  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }
  function handlesubmit() {
    let url = `http://127.0.0.1:8000/keyword/?keyword=$(keyword)`
    loaddata(url)

  }

  
  // const itemOptions = user.map((item) => ({ value: item.keyword, label: item.id }));
  return (
    <React.Fragment>
      <Row >
        <Col lg={2}>

        </Col>
        <Col lg={6}>
          <Card>
            <CardBody>

              <form className="mt-4">
                <Row>
                  <Col lg='1'>
                  </Col>
                  <Col lg="10">
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
                        // onChange={(e)=>setUser{e.target.value}}
                      />
                      {/* <Select
                        isMulti
                        options={itemOptions}
                        value={itemOptions.filter((option) => selectedItems.includes(option.value))}
                        onChange={handleSelectChange}
                      /> */}
                    </div>
                  </Col>
                  <Col lg='1'>
                  </Col>

                </Row>

                <Row className="mb-3">
                  <Col lg='1'>
                  </Col>
                  <Col lg='10'>
                    <div className="text-center">
                      <label className="control-label">Munnualy Select Queries</label>
                      <div className="col-lg-12">
                        <textarea id="txtAddress1Billing" name="txtAddress1Billing"
                          rows="4" className="form-control"></textarea>
                      </div>
                    </div>
                  </Col>
                  <Col lg='1'>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button color="primary" type="submit">
                    Submit form
                  </Button>
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



// import React, { useEffect, useState } from 'react';
// import Select from 'react-select';
// import axios from 'axios';

// const ItemSelect = () => {
//   const [items, setItems] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);

//   useEffect(() => {
//     axios.get('/api/items/')
//       .then((response) => setItems(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   const handleSelectChange = (selectedOptions) => {
//     setSelectedItems(selectedOptions.map((option) => option.value));
//   };

//   const itemOptions = items.map((item) => ({ value: item.id, label: item.name }));

//   return (
    // <Select
    //   isMulti
    //   options={itemOptions}
    //   value={itemOptions.filter((option) => selectedItems.includes(option.value))}
    //   onChange={handleSelectChange}
    // />
//   );
// };

// export default ItemSelect;
