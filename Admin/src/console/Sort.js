import React from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"
// import "../datatables.scss"


const DatatableTables = () => {
  const data = {
    columns: [

  
   
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      }
    ],
    rows: [
      {
        
        age: "61",
      },
      {
      
        age: "63",
      
      },
      {
     
        age: "66",
     
      },
      {
       
        age: "22",
       
      },
      {
     
        age: "33",
     
      },
      {
      
        age: "61",
   
      },
      {
 
        age: "59",
    
      },
      {
     
        age: "55",
       
      },
      {
    
        age: "39",
   
      },
      {
       
        age: "23",
  
      },
      {
        
        age: "30",
       
      },
      {
       
        age: "22",
      
      },
      {
   
        age: "36",
   
   
      },
      {
   
        age: "43",
       
      },
      {
       
        age: "19",
       
      },
      {
   
        age: "66",
     
      },
    
    ],
  }

  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle>Default Datatable </CardTitle>
                <CardSubtitle className="mb-3">
                  mdbreact DataTables has most features enabled by default, so
                  all you need to do to use it with your own tables is to call
                    the construction function:{" "}
                  <code>&lt;MDBDataTable /&gt;</code>.
                  </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle>Stripped example </CardTitle>
                <CardSubtitle className="mb-3">
                  mdbreact DataTables has most features enabled by default, so
                  all you need to do to use it with your own tables is to call
                    the construction function:{" "}
                  <code>&lt;MDBDataTable striped /&gt;</code>.
                  </CardSubtitle>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    </React.Fragment>
  )
}

export default DatatableTables
