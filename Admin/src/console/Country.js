
// export default Console
import React, { useEffect,useState } from "react"


const Country = () => {
  const [data,setData]=useState([])
  useEffect(() => {
        fetch("http://127.0.0.1:8000/country/").then((result) => {
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
           <th>Country</th>
           <th>Clicks</th>
          <th>Impressions</th>
         </tr>
      </thead>
       <tbody>
           {data.map(item => (
            <tr>
              <td>{item.country}</td>
              <td>{item.clicks}</td>
              <td>{item.impressions}</td>
              
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  )
}

export default Country
