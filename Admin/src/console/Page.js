
// export default Console
import React, { useEffect,useState } from "react"


const Page = () => {
  const [data,setData]=useState([])
  useEffect(() => {
        fetch("http://psd2htmlx.com:7001/page/").then((result) => {
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
           <th>Top Pages</th>
           <th>Clicks</th>
          <th>Impressions</th>
         </tr>
      </thead>
       <tbody>
           {data.map(item => (
            <tr>
              <td>{item.page}</td>
              <td>{item.clicks}</td>
              <td>{item.impressions}</td>
              
            </tr>
          ))}
      </tbody>
    </table>
    <h1>my name is rajesh kumar</h1>
  </div>
  )
}

export default Page
