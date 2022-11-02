import React, { Component } from 'react';
import Navbar from '../../../components/AdminSideBar/HomeNavBar';
import { Form, Button, Table, Row, Col, Container } from "react-bootstrap";
import AccountCSS from './account.module.css';
import { FcOpenedFolder } from "react-icons/fc";
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';


class dashboard2 extends Component {a


    constructor(props) {

        super(props)

        this.state = {
            dataSet: true,

            allOrders: []
        }
    }

    onView(id){
        this.props.history.push(`/viewOrder/${id}`);
    }

    getAllOrders() {

        const url = 'http://localhost:8000/api/order/getallAccountDetails';

        axios.get(url).then((res) => {
            console.log(res.data)
            if (res.data.code === '200') {
                this.setState({
                    allOrders: res.data.data
                }, () => {
                    console.log("resss", this.state.allOrders)

                    const userAttributes = []
                    this.state.allOrders.forEach(order => {

                        const date = new Date(order.createdAt)
                        let todate = String(date.getDate());
                        let month = String(date.getMonth()+1);
                        let year = String(date.getFullYear());
                        console.log(todate)
                        userAttributes.push({
                            Invoice: order.orderId,
                            Date: todate+"/"+month+"/"+year,
                            Company: order.companyName,
                            Status: order.status,


                            action: <><span style={{"color":"blue"}} onClick={() => this.onView(order._id)}>View </span>|<span span style={{"color":"blue"}}> Delete</span></>


                        })


                        this.setState({
                            data: {
                                columns: [
                                    {
                                        label: 'Invoice ID',
                                        field: 'Invoice',
                                        sort: 'asc',
                                        width: 80,

                                    },
                                    {
                                        label: 'Date',
                                        field: 'Date',
                                        sort: 'asc',
                                        width: 50
                                    },
                                    {
                                        label: 'Company',
                                        field: 'Company',
                                        sort: 'asc',
                                        width: 100,

                                    },

                                    {
                                        label: 'Status',
                                        field: 'Status',
                                        sort: 'asc',
                                        width: 50
                                    },


                                    {
                                        label: 'Action',
                                        field: 'action',
                                        sort: 'asc',
                                        width: 50
                                    }
                                ],
                                rows: userAttributes
                            }
                        })

                    });


                })
            }
        })

    }


    componentDidMount() {
        this.getAllOrders();
    }


    render() {
        return (
            <>

                <Navbar />

                <Row>

                    <div data-testid="cards" className={AccountCSS.container}>

                        <span style={{ "fontSize": "x-large" }}>Hi Administrator.. </span><span style={{ "fontSize": "10px" }}> you have </span><span style={{ "fontSize": "12px" }}>1 new message</span>
                    </div>





                </Row>



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
                                </span> <span style={{ "fontSize": "21px", "fontWeight": "400", "marginLeft": "100px", "marginTop": "25px", "position": "absolute", "color": "#ff9533", "fontWeight": "600" }}>Dorderivery</span>
                            </div>
                        </Col>
                    </Row>

                </div>




                <Row>




                    <div className={AccountCSS.tableContainer}>

                        {this.state.dataSet &&

                            <div style={{ "margin": "20px" }}>

                                <MDBDataTable


                                    style={{ "whitespace": "nowrap", }}
                                    scrollY
                                    maxHeight="400px"
                                    loading={false}
                                    hover
                                    bordered
                                    word-wrap="breakword"

                                    whitespace="nowrap"
                                    textoverflow="orderlipsis"

                                    data={this.state.data}
                                    className={AccountCSS.yourcustomstyles}
                                />


                            </div>
                        }





                    </div>
                </Row>
            </>
        );
    }
}

export default dashboard2;