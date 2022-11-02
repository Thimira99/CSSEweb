import React, { Component } from 'react';
import Navbar from '../../../components/AdminSideBar/HomeNavBar';
import { Form, Button, Table, Row, Col, Container } from "react-bootstrap";
import AccountCSS from './account.module.css';
import { FcOpenedFolder } from "react-icons/fc";
import { MDBDataTable } from 'mdbreact';


class dashboard extends Component {


    constructor(props){

        super(props)

        this.state = {
            dataSet:true,
            data:[]
        }
    }

    render() {
        return (
            <>
            
                <Navbar />

                <Row>

                    <div className={AccountCSS.container}>

                        <span style={{ "fontSize": "x-large" }}>Hi Administrator.. </span><span style={{ "fontSize": "10px" }}> you have </span><span style={{ "fontSize": "12px" }}>1 new message</span>
                    </div>





                </Row>

                {/* <Row>

                    <div className={AccountCSS.containertwo}>
                        <Row style={{ "display": "flex" }}>
                            <Col>
                                <div className={AccountCSS.conOne}>
                                    <span style={{ "fontSize": "38px", "position": "absolute", "marginLeft": "30px", "marginTop": "5px" }}><FcOpenedFolder />
                                    </span> <span style={{ "fontSize": "21px", "fontWeight": "400", "marginLeft": "100px", "marginTop": "25px", "position": "absolute", "color": "#3366ff", "fontWeight": "600" }}>Total Orders</span>
                                </div>
                            </Col>

                            <Col style={{ "marginLeft": "150px" }}>
                                <div className={AccountCSS.conTwo}>
                                    <span style={{ "fontSize": "38px", "position": "absolute", "marginLeft": "30px", "marginTop": "5px" }}><FcOpenedFolder />
                                    </span> <span style={{ "fontSize": "21px", "fontWeight": "400", "marginLeft": "100px", "marginTop": "25px", "position": "absolute", "color": "#ff333f", "fontWeight": "600" }}>Pennding Approvals</span>
                                </div>
                            </Col>
                            <Col style={{ "marginLeft": "150px" }}>
                                <div className={AccountCSS.conThree}>
                                    <span style={{ "fontSize": "38px", "position": "absolute", "marginLeft": "30px", "marginTop": "5px" }}><FcOpenedFolder />
                                    </span> <span style={{ "fontSize": "21px", "fontWeight": "400", "marginLeft": "100px", "marginTop": "25px", "position": "absolute", "color": "#ff9533", "fontWeight": "600" }}>Delivery</span>
                                </div>
                            </Col>
                        </Row>

                    </div>


                </Row>

                <Row>


            

                <div className={AccountCSS.containertwo}>
               
                    {this.state.dataSet &&

                        <div style={{ "margin": "30px" }}>

                            <MDBDataTable


                                style={{ "whitespace": "nowrap", }}
                                scrollY
                                maxHeight="1000px"
                                loading={false}
                                hover
                                bordered
                                word-wrap="breakword"

                                whitespace="nowrap"
                                textoverflow="ellipsis"

                                data={this.state.data}
                                className={AccountCSS.yourcustomstyles}
                            />


                        </div>
                    }





                </div>
                </Row> */}
            </>
        );
    }
}

export default dashboard;