// import React, { useState } from "react"
// import {
//   Col,
//   Row,
//   Card,
//   CardBody,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
//   CardTitle
// } from "reactstrap"

// //Import Breadcrumb
// // import Breadcrumbs from "../../components/Common/Breadcrumb"
// import Breadcrumbs from "../components/Common/Breadcrumb"

// const Data = () => {
//   const [singlebtn, setSinglebtn] = useState(false)
//   return (
//     <React.Fragment>
//       <div className="page-content">

//           <Breadcrumbs title="UI Elements" breadcrumbItem="Dropdowns" />

//           <Row>
//             <Col lg={6}>
//               <Card>
//                 <CardBody>
//                   <CardTitle className="h4"></CardTitle>
//                   <Row>
//                     <Col sm={6}>
//                       <Dropdown
//                         isOpen={singlebtn}
//                         toggle={() => setSinglebtn(!singlebtn)}
//                       >
//                         <DropdownToggle className="btn btn-secondary" caret>
//                           Dropdown button{" "}
//                           <i className="mdi mdi-chevron-down" />
//                         </DropdownToggle>
//                         <DropdownMenu>
//                           <DropdownItem>Action</DropdownItem>
//                           <DropdownItem>Another action</DropdownItem>
//                           <DropdownItem>Something else here</DropdownItem>
//                         </DropdownMenu>
//                       </Dropdown>
//                     </Col>
//                   </Row>
                 
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//       </div>
//     </React.Fragment>
//   )
// }
// export default Data
import React, { useState } from 'react';

const options = [
  { value: 'https://', label: 'https://' },
  { value: 'http://', label: 'http://' }
];

const Data = () => {
  const [protocol, setProtocol] = useState(options[0].value);
  const [domain, setDomain] = useState('');
  const [path, setPath] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${protocol}${domain}${path}`;
    console.log(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Protocol:
        <select value={protocol} onChange={(event) => setProtocol(event.target.value)}>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      {/* <br /> */}
      <label>
        Domain:
        <input type="text" value={domain} onChange={(event) => setDomain(event.target.value)} />
      </label>
      {/* <br /> */}
      <label>
        Path:
        <input type="text" value={path} onChange={(event) => setPath(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Data;
