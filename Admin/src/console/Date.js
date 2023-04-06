import React, { useState } from "react"
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Modal,
    Button,
    Label,
} from "reactstrap"

import { AvForm, AvField } from "availity-reactstrap-validation"
//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"
import Breadcrumbs from "../components/Common/Breadcrumb"
import Sample from './Sample'
const UiModal = () => {
    const [start, startRef] = React.useState(null);
    const [end, endRef] = React.useState(null);
    const [modal_standard, setmodal_standard] = useState(false)
    const [modal_large, setmodal_large] = useState(false)
    const [modal_xlarge, setmodal_xlarge] = useState(false)
    const [modal_small, setmodal_small] = useState(false)
    const [modal_center, setmodal_center] = useState(false)
    const [modal_scroll, setmodal_scroll] = useState(false)
    const [modal_fullscreen, setmodal_fullscreen] = useState(false)
    const [modal_backdrop, setmodal_backdrop] = useState(false)
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
      loadData(`http://127.0.0.1:8000/kewords/?start_date=${start_date}&end_date=${end_date}`)
  
  
    }

    function tog_standard() {
        setmodal_standard(!modal_standard)
        removeBodyCss()
    }

    function tog_fullscreen() {
        setmodal_fullscreen(!modal_fullscreen)
        removeBodyCss()
    }

    function tog_backdrop() {
        setmodal_backdrop(!modal_backdrop)
        removeBodyCss()
    }

    function removeBodyCss() {
        document.body.classList.add("no_padding")
    }

    function tog_large() {
        setmodal_large(!modal_large)
        removeBodyCss()
    }

    function tog_xlarge() {
        setmodal_xlarge(!modal_xlarge)
        removeBodyCss()
    }

    function tog_small() {
        setmodal_small(!modal_small)
        removeBodyCss()
    }

    function tog_center() {
        setmodal_center(!modal_center)
        removeBodyCss()
    }

    function tog_scroll() {
        setmodal_scroll(!modal_scroll)
        removeBodyCss()
    }

    return (
        <React.Fragment>
            <div className="page-content">

                <Breadcrumbs title="UI Elements" breadcrumbItem="Modals" />

                <Row>
                    <Col className="col-12">
                        <Card>
                            <CardBody>

                                <Row>

                                    <Col sm={6} md={4} xl={3}>
                                        <div className="my-4 text-center">
                                            <p className="text-muted">Center modal</p>

                                            <button
                                                type="button"
                                                className="btn btn-primary waves-effect waves-light"
                                                onClick={() => {
                                                    tog_center()
                                                }}
                                                data-toggle="modal"
                                                data-target=".bs-example-modal-center"
                                            >
                                                Center modal
                                            </button>
                                        </div>
                                        <Modal
                                            isOpen={modal_center}
                                            toggle={() => {
                                                tog_center()
                                            }}
                                            centered={true}
                                        >
                                            <div className="modal-header">
                                                <h5 className="modal-title mt-0">Center Modal</h5>
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
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
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
            </div>
        </React.Fragment>
    )
}

export default UiModal
