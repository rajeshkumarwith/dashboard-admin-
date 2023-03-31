
// export default Console
import React, { useEffect, useState } from "react"
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap"

const Page = () => {
  const [data, setData] = useState([])
  const [pre_url, setPreUrl] = useState([])
  const [next_url, setNextURl] = useState([])
  useEffect(() => {
    loadData('http://psd2htmlx.com:7001/page/')
  }, [])


  function loadData(url) {
    fetch(url).then((result) => {
      result.json().then((resp) => {
        console.log(resp, 'resreafsdfsd')
        setData(resp)
        setPreUrl(resp.previous)
        setNextURl(resp.next)


      })
    })
  }
  return (
    <div className="table-responsive">
      <table className="table mb-0">
        <thead>
          <tr>
            <th>Top Pages</th>
            <th>Clicks</th>
            <th>Impressions</th>
            <th>Position</th>
            <th>CTR</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr>
              <td>{item.page}</td>
              <td>{item.clicks}</td>
              <td>{item.impressions}</td>
              <td>{item.position}</td>
              <td>{item.ctr}</td>

            </tr>
          ))}
        </tbody>
      </table>
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          {pre_url ?
            <PaginationLink href="#" onClick={() => loadData(pre_url)}>Previous</PaginationLink>
            :
            <PaginationLink href="#">Previous</PaginationLink>}
        </PaginationItem>
        <PaginationItem>
          {next_url ?
            <PaginationLink href="#" onClick={() => loadData(next_url)}>Next</PaginationLink>
            :
            <PaginationLink href="#" >Next</PaginationLink>}
        </PaginationItem>
      </Pagination>
    </div>
  )
}

export default Page
