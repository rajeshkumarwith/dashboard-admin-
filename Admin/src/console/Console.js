// import React, { useState, useEffect } from "react"
// // import ReactDOM from 'react-dom';

// import {
//   TabContent,
//   TabPane,
//   Collapse,
//   NavLink,
//   NavItem,
//   Nav,
//   Card,
//   Row,
//   Col,
//   CardBody,
//   Table,
// } from "reactstrap"

// import { Link } from "react-router-dom"

// //Import Breadcrumb
// // import Breadcrumbs from "../../components/Common/Breadcrumb"

// import Breadcrumbs from "../components/Common/Breadcrumb"

// // import React,{useEffect,useState} from 'react'
// // function App() {
// //   const [users,setUser]=useState([])
// //   useEffect(()=>{
// //     fetch("http://127.0.0.1:8000/profile/").then((result)=>{
// //       result.json().then((resp)=>{
// //         console.log(resp,'resreafsdfsd')
// //         setUser(resp.results)
// //       })
// //     })
// //   },[])
// //   console.log(users)

// // }



// import classnames from "classnames"

// const Console = () => {
//   const [users, setUser] = useState([])
//   const [data,setData]=useState([])
//   const [activeTab, setactiveTab] = useState("1")
//   const [activeTabV, setactiveTabV] = useState("15")
//   const [activeTabJustify, setactiveTabJustify] = useState("5")
//   const [activeTabJustify2, setactiveTabJustify2] = useState("25")
//   const [col1, setcol1] = useState(true)
//   const [col2, setcol2] = useState(false)
//   const [col3, setcol3] = useState(false)
//   const [col5, setcol5] = useState(true)
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/profile/").then((result) => {
//       result.json().then((resp) => {
//         console.log(resp, 'resreafsdfsd')
//         setUser(resp.results)
//       })
//     })
//   }, [])
//   useEffect(()=>{
//     fetch("https://127.0.0.1:8000/search").then((result)=>{
//       result.json().then((resp)=>{
//         console.log(resp,'resresr')
//         setData(resp)
//       })
//     })
//   })

//   function toggle(tab) {
//     if (activeTab !== tab) {
//       setactiveTab(tab)
//     }
//   }
//   function toggleV(tab) {
//     if (activeTabV !== tab) {
//       setactiveTabV(tab)
//     }
//   }

//   function toggleCustomJustified(tab) {
//     if (activeTabJustify !== tab) {
//       setactiveTabJustify(tab)
//     }
//   }

//   function toggleCustomJustified2(tab) {
//     if (activeTabJustify2 !== tab) {
//       setactiveTabJustify2(tab)
//     }
//   }
//   return (
//     <React.Fragment>
//       <div className="page-content">

//         <Breadcrumbs title="UI Elements" breadcrumbItem="Tabs & Accordions" />

//         <Row>
//           <Col lg={12}>
//             <Card>
//               <CardBody>
//                 {/* <CardTitle className="h4">Default Tabs</CardTitle> */}
//                 {/* <p className="card-title-desc">Use the tab JavaScript plugin—include it individually or through the compiled <code className="highlighter-rouge">bootstrap.js</code> file—to extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus.</p> */}


                
//                 <Nav tabs>
//                   <NavItem>
//                     <NavLink
//                       style={{ cursor: "pointer" }}
//                       className={classnames({
//                         active: activeTab === "1",
//                       })}
//                       onClick={() => {
//                         toggle("1")
//                       }}
//                     >
//                       <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
//                       <span className="d-none d-sm-block">Home</span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       style={{ cursor: "pointer" }}
//                       className={classnames({
//                         active: activeTab === "2",
//                       })}
//                       onClick={() => {
//                         toggle("2")
//                       }}
//                     >
//                       <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
//                       <span className="d-none d-sm-block">Profile</span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       style={{ cursor: "pointer" }}
//                       className={classnames({
//                         active: activeTab === "3",
//                       })}
//                       onClick={() => {
//                         toggle("3")
//                       }}
//                     >
//                       <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
//                       <span className="d-none d-sm-block">Messages</span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       style={{ cursor: "pointer" }}
//                       className={classnames({
//                         active: activeTab === "4",
//                       })}
//                       onClick={() => {
//                         toggle("4")
//                       }}
//                     >
//                       <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
//                       <span className="d-none d-sm-block">Settings</span>
//                     </NavLink>
//                   </NavItem>
//                 </Nav>
// {/* 
//                 <TabContent activeTab={activeTab} className="p-3 text-muted">
//                   <TabPane tabId="1">
//                   <div className="table-responsive">
//                         <Table className="table mb-0">
//                           <thead>
//                             <tr>
//                               <th>Top queries</th>
//                               <th>Clicks</th>
//                               <th>Impressions</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                               {users.map(item => (
//                                 <tr>
//                                   <td>{item.keys}</td>
//                                   <td>{item.clicks}</td>
//                                   <td>{item.impressions}</td>
                                  
//                                 </tr>
//                               ))}
//                           </tbody>
//                         </Table>
//                       </div>
//                     </TabPane>
//                   <TabPane tabId="2" className="p-3">
//                     {users.map((item, i) =>
//                       <p className='mb-0'>{item.impressions}</p>
//                     )}
//                   </TabPane>
//                   <TabPane tabId="3" className="p-3">
//                     {users.map((item, i) =>
//                       <p className="mb-0">{item.clicks}</p>
//                     )}
//                   </TabPane>
//                   <TabPane tabId="4" className="p-3">
//                     {/* <p className="mb-0"></p> */}
//                     {/* {users.map((item, i) =>
//                       <p className="mb-0">{item.position}</p>
//                     )} */}
//                   {/* </TabPane>
//                 </TabContent>
//               </CardBody>
//             </Card> */}
//           {/* </Col> */} 
//           <TabContent activeTab={activeTab} className="p-3 text-muted">
//                   <TabPane tabId="1">
//                     <p className="mb-0">
//                       Raw denim you probably haven't heard of them jean shorts Austin.
//                       Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
//                       cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
//                       butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
//                       qui irure terry richardson ex squid. Aliquip placeat salvia cillum
//                       iphone. Seitan aliquip quis cardigan american apparel, butcher
//                       voluptate nisi qui.
//                                             </p>
//                   </TabPane>
//                   <TabPane tabId="2" className="p-3">
//                     <p className="mb-0">
//                       Food truck fixie locavore, accusamus mcsweeney's marfa nulla
//                       single-origin coffee squid. Exercitation +1 labore velit, blog
//                       sartorial PBR leggings next level wes anderson artisan four loko
//                       farm-to-table craft beer twee. Qui photo booth letterpress,
//                       commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
//                       vinyl cillum PBR. Homo nostrud organic, assumenda labore
//                       aesthetic magna delectus.
//                                             </p>
//                   </TabPane>
//                   <TabPane tabId="3" className="p-3">
//                     <p className="mb-0">
//                       Etsy mixtape wayfarers, ethical wes anderson tofu before they
//                       sold out mcsweeney's organic lomo retro fanny pack lo-fi
//                       farm-to-table readymade. Messenger bag gentrify pitchfork
//                       tattooed craft beer, iphone skateboard locavore carles etsy
//                       salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
//                       Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
//                       mi whatever gluten yr.
//                       </p>
//                   </TabPane>
//                   <TabPane tabId="4" className="p-3">
//                     <p className="mb-0">
//                       Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
//                       before they sold out master cleanse gluten-free squid scenester freegan
//                       cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf
//                       cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR,
//                       banh mi before they sold out farm-to-table VHS.
//                       </p>
//                   </TabPane>
//                 </TabContent>
//               </CardBody>
//             </Card>
//           </Col>

//         </Row>
//       </div>
//     </React.Fragment>
//   )
// }



// export default Console
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
const Console = () => {
  const [users, setUser] = useState([])
  const [pre_url, setPreUrl] = useState(null)
  const [next_url, setNextURl] = useState(null)

  const [data,setData]=useState([])
  const [activeTab, setactiveTab] = useState("1")
  const [activeTabV, setactiveTabV] = useState("15")
  const [activeTabJustify, setactiveTabJustify] = useState("5")
  const [activeTabJustify2, setactiveTabJustify2] = useState("25")
  const [col1, setcol1] = useState(true)
  const [col2, setcol2] = useState(false)
  const [col3, setcol3] = useState(false)
  const [col5, setcol5] = useState(true)
  useEffect(() => {
    loadData('http://127.0.0.1:8000/profile/')
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

  console.log(next_url,'nnnnnnnnnnnn')
  console.log(pre_url,'ppppppppppp')
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
                             </tr>
                          </thead>
                           <tbody>
                               {users.map(item => (
                                <tr>
                                  <td>{item.keys}</td>
                                  <td>{item.clicks}</td>
                                  <td>{item.impressions}</td>
                                  
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
                    <Device/>
                  </TabPane>
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
