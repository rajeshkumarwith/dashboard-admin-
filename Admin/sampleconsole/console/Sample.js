import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../helpers/BaseUrl'
import { get } from '../helpers/api_helper';

import {
  Row,
  Col,
  Button,
  Label,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

function Sample() {
  // const [startDate, setStartDate] = useState('');
  const [data, setData] = useState([])
  // const [endDate, setEndDate] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');


  function loadData(url) {
    fetch(url).then((result) => {
      result.json().then((resp) => {
        console.log(resp, 'resreafsdfsd')
        setData(resp.results)
        // setPreUrl(resp.previous)
        // setNextURl(resp.next )
      })
    })
  }

  function handleSubmit() {
    console.log(start_date, start_date, "gfhfghgfhfgh")
    loadData(`http://127.0.0.1:8000/filter/?start_date=${start_date}&end_date=${end_date}`)


  }

  // function getData(){
  //   get(`${BASE_URL}/date/?start_date=${start_date}&end_date=${end_date}`).then((resp) => console.log(resp))
  // }

  return (
    <div>
      <AvForm className="needs-validation" onSubmit={() => handleSubmit()}>
        <Row>
          <Col md="6">
            <div className="mb-3">
              <Label htmlFor="validationCustom01" value={start_date}>start_date</Label>
              <AvField
                name="start_date"
                placeholder="start_date"
                type="date"
                errorMessage="Enter start_date"
                className="form-control"
                validate={{ required: { value: true } }}
                id="validationCustom01"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
          </Col>
          <Col md="6">
            <div className="mb-3">
              <Label htmlFor="validationCustom02" value={end_date}>end_date</Label>
              <AvField
                name="end_date"
                placeholder="end_date"
                type="date"
                errorMessage="Enter end_date"
                className="form-control"
                validate={{ required: { value: true } }}
                id="validationCustom02"
                onChange={(e) => setEndDate(e.target.value)} 
              />
            </div>
          </Col>
        </Row>
       
        <div className="form-check mb-3">
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
        <Button color="primary" type="submit">
          Submit form
        </Button>
      </AvForm>
      {/* <form action="#" onSubmit={() => handleSubmit()}>
        <label>Start Date:</label>
        <input type="date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
        <label>End Date:</label>
        <input type="date" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
        <button type="submit">Search</button>
      </form> */}
      <div className="table-responsive">
        <table className="table mb-0">
          <thead>
            <tr>
              <th>Top queries</th>
              <th>Clicks</th>
              <th>Impressions</th>
              <th>Position</th>
              <th>CTR</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr>
                <td>{item.keys}</td>
                <td>{item.device}</td>
                <td>{item.clicks}</td>
                <td>{item.impressions}</td>
                <td>{item.position}</td>
                <td>{item.ctr}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

// export default Sample;


// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function UserData() {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [userData, setUserData] = useState(null);

// //   // Handle form submission
// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     axios.get(`/api/users/${username}/${email}/`)
// //       .then((response) => {
// //         setUserData(response.data);
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Username:
// //           <input
// //             type="text"
// //             value={username}
// //             onChange={(event) => setUsername(event.target.value)}
// //           />
// //         </label>
// //         <label>
// //           Email:
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(event) => setEmail(event.target.value)}
// //           />
// //         </label>
// //         <button type="submit">Submit</button>
// //       </form>
// //       {userData && (
// //         <div>
// //           <p>Username: {userData.username}</p>
// //           <p>Email: {userData.email}</p>
// //           <p>First Name: {userData.first_name}</p>
// //           <p>Last Name: {userData.last_name}</p>
// //           {/* display other fields as needed */}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default UserData;
