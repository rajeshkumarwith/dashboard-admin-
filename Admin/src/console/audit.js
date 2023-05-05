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
import { BASE_URL } from "./BaseUrl";


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
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [data,setData]=useState([]);
  // const [dataCount, setDataCount]=useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedMulti, setselectedMulti] = useState(null);
  const [keyword, setkeyword]=useState(null);
  

  useEffect(() => {
    loaddata(`${BASE_URL}/api/list/`)
    loadpage(`${BASE_URL}/api/manual/`)
    // loaddata('http://127.0.0.1:8000/api/list/')
    // loadpage('http://127.0.0.1:8000/api/manual/')
  }, []);
  function loaddata(url) {
    fetch(url).then((result) => {
      result.json().then((resp) => {
        console.log(resp,'sssssssssssssss')
        const formattedOptions = resp.map(items => ({
          value: items.id,
          label: items.keyword
        }));
        console.log(formattedOptions,'ffffffffffffffff')
        setItems(formattedOptions)
        
      })
    })
  }
  function loadpage(url){
    fetch(url).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp,'rrrrrrrrrrrrrrrrr')
        setData(resp)
      })
    })
  }

  const handleChange = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  // function handleMulti(selectedMulti) {
  //   setselectedMulti(selectedMulti);
  // }
  function handlesubmit(){
    loadpage(`${BASE_URL}/api/manual/?keyword=${keyword}`)
  }

  // const Search = key => {
  //   const newResults = dataCount.filter(crypto => crypto.name.includes(key));
  //   console.log('newResults', newResults);
  //   setData(newResults);
  // };

  // const cryptoJsx = data.map(crypto => (
  //   <div key={crypto.id}>{crypto.id}</div>
  // ));

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
                      <label className="control-label">Select keywords</label>
                      {/* <Select
                        value={selectedItem}
                        isMulti={true}
                        onChange={() => {
                          handleChange();
                        }}
                        options={items}
                        classNamePrefix="select2-selection"
                        // onChange={(e)=>setUser{e.target.value}}
                      /> */}
                      
                      <Select
                        value={selectedItem}
                        isMulti={true}
                        onChange={() => {
                          handleChange();
                        }}
                        options={items}
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
                      <label className="control-label" value={keyword} >Munnualy Keywords</label>
                      <div className="col-lg-12">
                      {/* onChange={(e) => setEndDate(e.target.value)}  */}
                        <textarea id="txtAddress1Billing"     onChange={(e) =>setData(e.target.value)}         placeholder="Manualy  search" name="txtAddress1Billing"
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
// import {
//   Button,
//   CardTitle,
//   Col,
//   Row,
//   CardBody,
//   Card,


// } from "reactstrap";
// import axios from 'axios';

// const options = [
//   { value: 'apple', label: 'Apple' },
//   { value: 'banana', label: 'Banana' },
//   { value: 'orange', label: 'Orange' },
//   { value: 'pear', label: 'Pear' },
//   { value: 'grape', label: 'Grape' },
// ];

// const ItemSelect = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [option, setOption] = useState([]);
//   const handleMultiSelectChange = (selectedOptions) => {
//     setSelectedOptions(selectedOptions);
//   };
//   // const [items, setItems] = useState([]);


//   return (
//     <div>
//       <Row>
//         <Col lg='3'>
//         </Col>
//         <Col lg='6'>
//           <Card>
//             <CardBody>
//               <Select
//                 options={options}
//                 isMulti
//                 onChange={handleMultiSelectChange}
//                 value={selectedOptions}
//               />
//               {/* <select multiple>
//                 {items.map((item) => (
//                   <option key={item.id} value={item.id}>
//                     {item.keyword}
//                   </option>
//                 ))}
//               </select> */}
//             </CardBody>
//           </Card>
//         </Col>
//         <Col lg='3'>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default ItemSelect;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Row,
//   Col,
//   Card,
//   CardBody,

// } from "reactstrap"
// function ItemSelect() {
//   const [items, setItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);

//   useEffect(() => {
//     // fetch('http://127.0.0.1:8000/list/').then((response) => {
//     //   console.log(response,'rrrrrrrrrrrrrrrr')
//     //   setItems(response);
//     // });
//     loaddata(`http://127.0.0.1:8000/list/`)
//   }, []);
//   function loaddata(url) {
//     fetch(url).then((result) => {
//       result.json().then((resp) => {
//         setItems(resp)
//       })
//     })
//   }
//   const handleChange = (event) => {
//     setSelectedItem(event.target.value);
//   };

//   return (
//     // <div>
//     //   <select value={selectedItem} onChange={handleChange}>
//     //     {/* <option value="">--Select an item--</option> */}
//     //     {items.map((item) => (
//     //       <option key={item.id} value={item.keyword}>
//     //         {item.keyword}
//     //       </option>
//     //     ))}
//     //   </select>
//     //   {selectedItem && (
//     //     <p>You have selected {items.find((item) => item.id === selectedItem).keyword}</p>
//     //   )}
//     // </div>
//     // <div>
//       <Row>
//         <Col lg='3'>
//         </Col>
//         <Col lg='6'>
//           <Card>
//             <CardBody>
//               <div>
       
//       <select value={selectedItem} onChange={handleChange}>
//         {/* <option value="">--Select an item--</option> */}
//         {items.map((item) => (
//           <option key={item.id} value={item.keyword}>
//             {item.keyword}
//           </option>
//         ))}
//       </select>
//       {/* {selectedItem && (
//         <p>You have selected {items.find((item) => item.id === selectedItem).keyword}</p>
//       )} */}



//               </div>
//             </CardBody>
//           </Card>
//         </Col>
//         <Col lg='3'>
//         </Col>
//       </Row>
    
//   );
// }

// export default ItemSelect;
