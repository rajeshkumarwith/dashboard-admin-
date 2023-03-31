import React, { useEffect,useState } from "react"

import {
  TabContent,
  TabPane,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  Card,
  Row,
  Col,
  CardBody,
  CardTitle,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap"

import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"

import classnames from "classnames"
import Page from './Page'
import Country from './Country'
import Device from './Device'
import Date from './Date'
const Console = () => {
  const [users, setUser] = useState([])
  const [pre_url, setPreUrl] = useState(null)
  const [next_url, setNextURl] = useState(null)

  // const [data,setData]=useState([])
  const [activeTab, setactiveTab] = useState("1")
  const [activeTabV, setactiveTabV] = useState("15")
  const [activeTabJustify, setactiveTabJustify] = useState("5")
  const [activeTabJustify2, setactiveTabJustify2] = useState("25")
  const [col1, setcol1] = useState(true)
  const [col2, setcol2] = useState(false)
  const [col3, setcol3] = useState(false)
  const [col5, setcol5] = useState(true)
  useEffect(() => {
    loadData('http://psd2htmlx.com:7001/kewords/')
      }, [])


  function loadData(url){
    fetch(url).then((result) => {
          result.json().then((resp) => {
            console.log(resp, 'resreafsdfsd')
            setUser(resp.results)
            setPreUrl(resp.previous)
            setNextURl(resp.next )
            

          })
        })
  }
  function toggle(tab) {
    if (activeTab !== tab) {
      setactiveTab(tab)
    }
  }
  function toggleV(tab) {
    if (activeTabV !== tab) {
      setactiveTabV(tab)
    }
  }

  function toggleCustomJustified(tab) {
    if (activeTabJustify !== tab) {
      setactiveTabJustify(tab)
    }
  }

  function toggleCustomJustified2(tab) {
    if (activeTabJustify2 !== tab) {
      setactiveTabJustify2(tab)
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="UI Elements" breadcrumbItem="Tabs & Accordions" />

        <Row>
          <Col lg={6}>
            <Card>
              <CardBody>
                <CardTitle className="h4">Default Tabs</CardTitle>

                <Nav tabs>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab === "1",
                      })}
                      onClick={() => {
                        toggle("1")
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                      <span className="d-none d-sm-block">QUERIES</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab === "2",
                      })}
                      onClick={() => {
                        toggle("2")
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                      <span className="d-none d-sm-block">PAGE</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab === "3",
                      })}
                      onClick={() => {
                        toggle("3")
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                      <span className="d-none d-sm-block">Country</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab === "4",
                      })}
                      onClick={() => {
                        toggle("4")
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                      <span className="d-none d-sm-block">DEVICE</span>
                    </NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab === "5",
                      })}
                      onClick={() => {
                        toggle("5")
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                      <span className="d-none d-sm-block">Date</span>
                    </NavLink>
                  </NavItem> */}
                </Nav>

                <TabContent activeTab={activeTab} className="p-3 text-muted">
                  <TabPane tabId="1">
                    {/* <p className="mb-0"></p> */}
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
                               {users.map(item => (
                                <tr>
                                  <td>{item.keys}</td>
                                  <td>{item.clicks}</td>
                                  <td>{item.impressions}</td>
                                  <td>{item.position}</td>
                                  <td>{item.ctr}</td>
                                  
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                      <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                          {pre_url?
                          <PaginationLink href="#" onClick={()=> loadData(pre_url)}>Previous</PaginationLink>
                          :
                          <PaginationLink href="#">Previous</PaginationLink>}
                        </PaginationItem>
                        <PaginationItem>
                        {next_url?
                          <PaginationLink href="#" onClick={()=> loadData(next_url)}>Next</PaginationLink>
                          :
                          <PaginationLink href="#" >Next</PaginationLink>}
                        </PaginationItem>
                      </Pagination>
                  </TabPane>
                  <TabPane tabId="2" className="p-3">
                    {/* <p className="mb-0"></p> */}
                    < Page />
                  </TabPane>
                  <TabPane tabId="3" className="p-3">
                    {/* <p className="mb-0"></p> */}
                    <Country/>
                  </TabPane>
                  <TabPane tabId="4" className="p-3">
                    {/* <p className="mb-0"></p> */}
                    < Device/>
                  </TabPane>
                  {/* <TabPane tabId="5" className="p-3">
                    <div>
                      <table>
                        <tr>
                          <th>
                          Name
                          </th>
                          <th>
                            email
                          </th>
                        </tr>
                        <tr>
                          <td>
                            <td>

                            </td>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </TabPane> */}
                </TabContent>
              </CardBody>
            </Card>
          </Col>

        </Row>

      </div>
    </React.Fragment>
  )
}

export default Console
