import React, { useState } from "react"
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Modal,
    TabContent,
    TabPane,
    Collapse,
    NavLink,
    NavItem,

} from "reactstrap"
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"
import Breadcrumbs from "../components/Common/Breadcrumb"
import Audit from './audit'
import Scope from './scope'



interface ChildProps {
    parentFunction: Function
}

// interface ChildProps{
//     parent:Function
// }

const Ownership = (props: ChildProps) => {
    const [modal_standard, setmodal_standard] = useState(false)
    const [modal_large, setmodal_large] = useState(false)
    const [modal_xlarge, setmodal_xlarge] = useState(false)
    const [modal_small, setmodal_small] = useState(false)
    const [modal_center, setmodal_center] = useState(false)
    const [modal_scroll, setmodal_scroll] = useState(false)
    const [modal_fullscreen, setmodal_fullscreen] = useState(false)
    const [modal_backdrop, setmodal_backdrop] = useState(false)
    const [activeTabJustify, setactiveTabJustify] = useState("5")
    const [activeTabJustify2, setactiveTabJustify2] = useState("25")



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
                <h1 className="text-center">Verify ownership</h1>
                <h3 className="mt-2 text-center">To use Ahrefs and check your website for free, please prove that you own your website.</h3>
                <div style={{
                    margin: "auto",
                    display: "table",
                }}>
                    <a className="text-center" href='search-console'> Enter a valid URL.</a>to start verification.
                </div>
                <Row>
                    <Col className="col-12">
                        <Card>
                            <CardBody>


                                <Row>

                                    <Col lg={12}>
                                        <div className="mb-3 text-center">
                                            <p className="text-muted">l</p>

                                            <button
                                                type="button"
                                                className="btn btn-primary waves-effect waves-light"
                                                onClick={() => {
                                                    tog_center()
                                                }}
                                                data-toggle="modal"
                                                data-target=".bs-example-modal-center"
                                            >
                                                Continue
                                            </button>
                                        </div>
                                        <Modal
                                            isOpen={modal_center}
                                            toggle={() => {
                                                tog_center()
                                            }}
                                            centered={true}
                                            style={{ marginTop: 2 }}
                                        >
                                            <div className="modal-header">
                                                <h5 className="modal-title mt-3">Continue</h5>
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
                                            <div className="modal-body">
                                                <p>
                                                    Your website must be verified in order to be checked with a free account. If you skip this step,
                                                    your project will be added with inactive status.
                                                </p>

                                                <Row>
                                                    <Col sm={4}>
                                                        <button onClick={() => {
                                                            setmodal_center(false)
                                                        }}> No, Stay here</button>

                                                    </Col>
                                                    <Col sm={4}>
                                                        <button onClick={() => props.parentFunction()}>Yes,Skip</button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Modal>

                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Ownership







// import React, { useState } from "react"

// import {
//     FormGroup,
//     Button,
//     Row,
//     Col,
//     Label,
//     Modal,


// } from "reactstrap"
// import { AvForm, AvField } from "availity-reactstrap-validation"

// const Ownership = () => {
//     const [modal_center, setmodal_center] = useState(false)
//     const [activeTab, setactiveTab] = useState("1")
//     const [activeTabV, setactiveTabV] = useState("15")



//     function removeBodyCss() {
//         document.body.classList.add("no_padding")
//     }


//     function tog_center() {
//         setmodal_center(!modal_center)
//         removeBodyCss()
//     }


//     return (
//         <>
//             <h1 className="text-center">Verify ownership</h1>
//             <h3 className="text-center">To use Ahrefs and check your website for free, please prove that you own your website.</h3>
//             <div style={{
//                 margin: "auto",
//                 display: "table",
//             }}>
//                 <a className="text-center" href='search-console'> Enter a valid URL.</a>to start verification.
//             </div>
//             <Col lg={12}  >
//                 <div className="my-4 text-center">
//                     <p className="text-muted">Center modal</p>

//                     <button
//                         type="button"
//                         className="btn btn-primary waves-effect waves-light"
//                         onClick={() => {
//                             tog_center()
//                         }}
//                         data-toggle="modal"
//                         data-target=".bs-example-modal-center"
//                     >
//                         Center modal
//                     </button>
//                 </div>
//                 <Modal
//                     isOpen={modal_center}
//                     toggle={() => {
//                         tog_center()
//                     }}
//                     centered={true}
//                 >
//                     <div className="modal-header">
//                         <h5 className="modal-title mt-0">Center Modal</h5>
//                         <button
//                             type="button"
//                             onClick={() => {
//                                 setmodal_center(false)
//                             }}
//                             className="close"
//                             data-dismiss="modal"
//                             aria-label="Close"
//                         >
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <p>
//                             Cras mattis consectetur purus sit amet fermentum.
//                             Cras justo odio, dapibus ac facilisis in, egestas
//                             eget quam. Morbi leo risus, porta ac consectetur
//                             ac, vestibulum at eros.
//                         </p>
//                         <p>
//                             Praesent commodo cursus magna, vel scelerisque
//                             nisl consectetur et. Vivamus sagittis lacus vel
//                             augue laoreet rutrum faucibus dolor auctor.
//                         </p>
//                         <p className="mb-0">
//                             Aenean lacinia bibendum nulla sed consectetur.
//                             Praesent commodo cursus magna, vel scelerisque
//                             nisl consectetur et. Donec sed odio dui. Donec
//                             ullamcorper nulla non metus auctor fringilla.
//                         </p>
//                     </div>
//                 </Modal>


//             </Col>
//         </>
//     )
// }
// export default Ownership
