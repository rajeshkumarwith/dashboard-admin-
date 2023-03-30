
// export default Console
import React, { useEffect,useState } from "react"


const Device = () => {
  const [data,setData]=useState([])
  useEffect(() => {
        fetch("http://psd2htmlx.com:7001/device/").then((result) => {
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
           <th>Device</th>
           <th>Clicks</th>
          <th>Impressions</th>
         </tr>
      </thead>
       <tbody>
           {data.map(item => (
            <tr>
              <td>{item.device}</td>
              <td>{item.clicks}</td>
              <td>{item.impressions}</td>
              
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  )
}

export default Device
