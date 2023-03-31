
// export default Console
import React, { useEffect,useState } from "react"

import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap"

const Date = () => {
  const [data,setData]=useState([])
  useEffect(() => {
        fetch("http://127.0.0.1:8000/date/").then((result) => {
          result.json().then((resp) => {
            console.log(resp, 'resreafsdfsd')
            setData(resp)
          })
        })
      }, [])
  
  return (
    <div className="table-responsive">
    <table className="table mb-0"> 
       <thead>
         <tr>
           <th>Query</th>
           <th>Clicks</th>
          <th>Impressions</th>
          <th>CTR</th>
          <th>Position</th>
         </tr>
      </thead>
       <tbody>
           {data.map(item => (
            <tr>
              <td>{item.Query}</td>
              <td>{item.Clicks}</td>
              <td>{item.Impressions}</td>
              <td>{item.CTR}</td>
              <td>{item.Position}</td>
              
            </tr>
          ))}
      </tbody>
    </table>
    <Pagination>
      <PaginationItem>
            <PaginationLink href="#">
              Previous
            </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
            Next
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  </div>
  )
}

export default Date
