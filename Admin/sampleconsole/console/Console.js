import React, { useEffect, useState } from "react"

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
  Modal,
  Button,
  Label,
} from "reactstrap"

import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"
import Sort from "./Sort"
//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"

import classnames from "classnames"
// import Page from './Page'
// import Country from './Country'
// import Device from './Device'
// import Date from './Date'
// import Sample from './Sample'
import { BASE_URL } from '../helpers/BaseUrl'

const Console = () => {
  const [users, setUser] = useState([])
  const [page, setPage] = useState([])
  const [sort, setSort] = useState(['impressions'])
  const [pre_url, setPreUrl] = useState(null)
  const [next_url, setNextURl] = useState(null)
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  // const [data,setData]=useState([])
  const [modal_center, setmodal_center] = useState(false)
  const [activeTab, setactiveTab] = useState("1")
  const [activeTabV, setactiveTabV] = useState("15")

  useEffect(() => {
    // loadData('http://psd2htmlx.com:7001/kewords/')z
    loadData(`${BASE_URL}/kewords/`)
    loadPageData(`${BASE_URL}/pages/`)
  }, [])


  function loadData(url) {
    fetch(url).then((result) => {
      result.json().then((resp) => {
        console.log(resp, 'resreafsdfsd')
        setUser(resp.results)
        setPreUrl(resp.previous)
        setNextURl(resp.next)
      })
    })
  }
  const handleSortClicks = () => {
    setSort('clicks');
  };

  const handleSortImpressions = () => {
    setSort('impressions');
  };

  const sortedData = page.slice().sort((a, b) => b[sort] - a[sort]);

  function loadPageData(url) {
    fetch(url).then((result) => {
      result.json().then((resp) => {
        console.log(resp, 'resreafsdfsd')
        setPage(resp.results)
        setPreUrl(resp.previous)
        setNextURl(resp.next)


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

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }




  function tog_center() {
    setmodal_center(!modal_center)
    removeBodyCss()
  }


  function handleSubmit() {
    let url = `http://127.0.0.1:8000/kewords/?start_date=${start_date}&end_date=${end_date}`
    let pagerurl = `http://127.0.0.1:8000/pages/?start_date=${start_date}&end_date=${end_date}`
    loadData(url)
    loadPageData(pagerurl)
    console.log(pagerurl, 'pppppppppp')
    tog_center()

  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Search Console" breadcrumbItem="Goggle Console" />
        <Row>
          <div className="my-4 text-center">
            {/* <p className="text-muted">Center modal</p> */}

            <button
              type="button"
              className="btn btn-primary waves-effect waves-light"
              onClick={() => {
                tog_center()
              }}
              data-toggle="modal"
              data-target=".bs-example-modal-center"
            >
              Date Filter
            </button>
          </div>


        </Row>
        <Row>
          <Col lg={12}>





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
                  {/* <NavItem>
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
                  </NavItem>  */}
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
                              <td>{item.query}</td>
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
                        {pre_url ?
                          <PaginationLink href="#" onClick={() => loadPageData(pre_url)}>Previous</PaginationLink>
                          :
                          <PaginationLink href="#">Previous</PaginationLink>}
                      </PaginationItem>
                      <PaginationItem>
                        {next_url ?
                          <PaginationLink href="#" onClick={() => loadPageData(next_url)}>Next</PaginationLink>
                          :
                          <PaginationLink href="#" >Next</PaginationLink>}
                      </PaginationItem>
                    </Pagination>
                  </TabPane>
                  <TabPane tabId="2" className="p-3">
                    {/* <div className="table-responsive">
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th>Pages</th>
                            <th>Clicks</th>
                            <th>Impressions</th>
                            <th>Position</th>
                            <th>CTR</th>
                          </tr>
                        </thead>
                        <tbody>
                          {page.map(item => (
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
                    </div> */}
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th>Query</th>
                            <th onClick={handleSortClicks}>Clicks</th>
                            <th onClick={handleSortImpressions}>Impressions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedData.map(row => (
                            <tr key={row.page}>
                              <td>{row.query}</td>
                              <td>{row.clicks}</td>
                              <td>{row.impressions}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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
                  </TabPane>
                  <TabPane tabId="3" className="p-3">
                    {/* <div className="table-responsive">
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th>Country</th>
                            <th>Clicks</th>
                            <th>Impressions</th>
                            <th>Position</th>
                            <th>CTR</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map(item => (
                            <tr>
                              <td>{item.country}</td>
                              <td>{item.clicks}</td>
                              <td>{item.impressions}</td>
                              <td>{item.position}</td>
                              <td>{item.ctr}</td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div> */}
                    <Sort />
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th>Query</th>
                            <th onClick={handleSortClicks}>Clicks</th>
                            <th onClick={handleSortImpressions}>Impressions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedData.map(row => (
                            <tr key={row.page}>
                              <td>{row.query}</td>
                              <td>{row.clicks}</td>
                              <td>{row.impressions}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabPane>
                  <TabPane tabId="4" className="p-3">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th>DEVICE</th>
                            <th>Clicks</th>
                            <th>Impressions</th>
                            <th>Position</th>
                            <th>CTR</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map(item => (
                            <tr>
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
                  </TabPane>
                  
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6} md={6} xl={3}>

            <Modal
              isOpen={modal_center}
              toggle={() => {
                tog_center()
              }}
              centered={true}
            >
              <div className="modal-header">
                <h5 className="modal-title mt-0"></h5>
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
                <button
                  type="button"
                  onClick={() => {
                    setmodal_center(false)
                  }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </Modal>

          </Col>

        </Row>

      </div>

    </React.Fragment>
  )
}

export default Console


