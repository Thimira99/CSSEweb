import React, { Component } from 'react';
import Navbar from '../../../components/AdminSideBar/HomeNavBar';
import { Form, Button, Table, Row, Col } from "react-bootstrap";
import AccountCSS from './account.module.css';

import axios from 'axios';
import Select from 'react-select';
import Swal from 'sweetalert2';


class viewOrder extends Component {


    constructor(props) {

        super(props)

        this.state = {
            dataSet: true,
            orderId: this.props.match.params.id,
            Orders: [],
            statusdata: '',
            options: [],
            selectedOptions: [],
            suppliers: [],
            sendStatus:true
        }

        this.onApprove = this.onApprove.bind(this);
        this.onDecline = this.onDecline.bind(this);
        this.changeSupplier = this.changeSupplier.bind(this);
        this.onSend = this.onSend.bind(this)
    }

    onSend(){

        const url = 'http://localhost:8000/api/supplier/createSupplier';
        const data = {
            "supplierName":this.state.selectedOptions.label,
            "orderId":this.state.Orders.orderId
        }

        axios.post(url,data).then((res) => {
         
            if(res.status === '200'){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Order Send successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

                this.setState({
                    selectedOptions: [],
                    sendStatus:false
                })
            }
        })
        
    }

    changeSupplier = (selectedOptions) => {
       
        this.setState({
            selectedOptions,

        });
    }

    onView(id) {
        this.props.history.push(`/StockForShop/${id}`);
    }

    getAllOrders() {

        const url = `http://localhost:8000/api/order/getOrderById/${this.state.orderId}`;

        axios.get(url).then((res) => {
           
            if (res.data.code === '200') {
                const value = res.data.supplier.status === 'Approved' ? false : true
                this.setState({
                    Orders: res.data.supplier,
                    Items: res.data.supplier.item,
                    statusdata: res.data.supplier.status,
                    sendStatus:value
                })
            }
        })

    }

    getDate() {
        const date = new Date(this.state.Orders.createdAt)
        let todate = String(date.getDate());
        let month = String(date.getMonth() + 1);
        let year = String(date.getFullYear());
        let data = todate + "/" + month + "/" + year
        return data
    }


    onApprove(e) {

        e.preventDefault();

        let { statusdata } = this.state;
        statusdata = 'Approved';

        const url = `http://localhost:8000/api/order/updateOrderById/${this.state.orderId}`
        const data = {
            "status": statusdata
        }
        axios.put(url, data).then((res) => {
           
        })


        this.setState({
            statusdata
        })
    }

    onDecline() {
        let { statusdata } = this.state;
        statusdata = 'Declined';

        const url = `http://localhost:8000/api/order/updateOrderById/${this.state.orderId}`
        const data = {
            "status": statusdata
        }
        axios.put(url, data).then((res) => {
           
        })


        this.setState({
            statusdata
        })
    }

    getAllSuppliers() {

        const url = 'http://localhost:8000/api/user/getUserByRole';
        const data = {
            "role": "supplier"
        }
        axios.post(url, data).then((res) => [
         
            this.setState({
                suppliers: res.data.data
            }, () => {

                const dataArrey = [];
                this.state.suppliers.forEach(obj => {
                    dataArrey.push({
                        value: obj._id, label: obj.name
                    })
                })

                this.setState({
                    options: dataArrey
                })
            })
        ])
    }

    componentDidMount() {
        this.getAllSuppliers();
        this.getAllOrders();
    }


    render() {
        const { selectedOptions } = this.state;
        return (
            <>

                <Navbar />

                <Row>

                    <div className={AccountCSS.container}>

                        <span style={{ "fontSize": "x-large" }}>Pennding Approval </span><span style={{ "fontSize": "10px" }}> </span><span style={{ "fontSize": "12px" }}></span>
                    </div>





                </Row>



                <div className={AccountCSS.containertwo}>

                    <Row style={{ "marginTop": "30px" }}>

                        <Col >
                            <div style={{ "marginLeft": "30px", "marginTop": "20px" }}>
                                <span style={{ "fontSize": "19px", "fontWeight": "500" }}>Invoice Numbber : </span><span style={{ "color": "blue" }}>{this.state.Orders.orderId}</span>
                            </div>
                            <div style={{ "marginLeft": "30px", "marginTop": "20px" }}>
                                <span style={{ "fontSize": "19px", "fontWeight": "500" }}>Isuue Date : </span><span>{this.getDate()}</span>
                            </div>

                            <div style={{ "marginLeft": "30px", "marginTop": "20px" }}>
                                <span style={{ "fontSize": "19px", "fontWeight": "500" }}>Company : </span><span>{this.state.Orders.companyName}</span>
                            </div>

                            <div style={{ "marginLeft": "30px", "marginTop": "20px", "marginBottom": "20px" }}>
                                <span style={{ "fontSize": "19px", "fontWeight": "500" }}>Address : </span><span>{this.state.Orders.address}</span>
                            </div>
                            <div style={{ "marginLeft": "30px", "marginTop": "20px", "marginBottom": "20px" }}>
                                <span style={{ "fontSize": "19px", "fontWeight": "500" }}>Status : </span><span>{this.state.statusdata}</span>
                            </div>
                        </Col>

                      <Col>
                            <Button style={{ "width": "110px", "fontWeight": "600", "marginBottom": "20px", "marginTop": "20px" }} onClick={this.onApprove}>Approve<span style={{ "fontSize": "22px", "marginLeft": "8px" }}></span></Button>
                            <Button style={{ "width": "110px", "fontWeight": "600", "marginBottom": "20px", "marginTop": "20px", "marginLeft": "30px" }} onClick={this.onDecline}>Decline<span style={{ "fontSize": "22px", "marginLeft": "8px" }}></span></Button>
                          { this.state.sendStatus  &&  <> <Form.Group className="mb-4" controlId="formBasicEmail">
                             
                             <Form.Label><span style={{ "fontFamily": "sans-serif", "fontWeight": "500", "fontSize": "18px" }}>Select Supplier</span></Form.Label>
                             <div style={{"width":"550px"}}>
                                 <Select

                                     value={selectedOptions}

                                     options={this.state.options}
                                     onChange={this.changeSupplier}


                                 />
                             </div>
                              <Button style={{ "width": "110px", "fontWeight": "600", "marginBottom": "20px", "marginTop": "28px", "marginLeft": "0px" }} onClick={this.onSend}>Send<span style={{ "fontSize": "22px", "marginLeft": "8px" }}></span></Button>


                         </Form.Group></>}
                            

                        </Col>



                    </Row>



                </div>




                <Row>




                    <div className={AccountCSS.tableContainer}>

                        {this.state.Items && <Table variant="light" class="table  " >

                            <thead style={{ 'display': 'block', "marginRight": "30px" }} >
                                <tr>
                                    <th style={{ "width": "25px", "font-size": "20px", "fontWeight": "500" }}></th>

                                    <th style={{ "width": "740px", "font-size": "20px", "fontWeight": "400" }}>Material Name:</th>
                                    <th style={{ "width": "210px", "font-size": "20px", "fontWeight": "400" }}>QTY:</th>


                                </tr>
                            </thead>

                            <tbody style={{ 'height': "max-content", 'overflow': 'auto', 'display': 'block', "borderTop": "ridge", "marginRight": "30px" }}>
                                {
                                    this.state.Items.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td style={{ 'width': '20px', "font-size": "16px", "fontWeight": "400" }}>{index + 1}</td>
                                                <td style={{ 'width': '740px', "font-size": "16px", "fontWeight": "400" }}>{item.material}</td>
                                                <td style={{ 'width': '210px', "font-size": "16px", "fontWeight": "400" }}>{item.quatity}</td>



                                            </tr>
                                        )
                                    })
                                }

                            </tbody>

                            <tfoot style={{ 'display': 'block', "borderTop": "ridge", "marginRight": "30px" }}>
                                {
                                    <tr>
                                        <th style={{ "width": "20px", "font-size": "small" }}></th>

                                        <th style={{ "width": "740px", "font-size": "small" }}></th>
                                        <th style={{ "width": "210px", "font-size": "small" }}></th>
                                        <th style={{ "width": "380px", "font-size": "small" }}>{this.state.curentqty1}</th>



                                    </tr>
                                }
                            </tfoot>

                        </Table>}






                    </div>
                </Row>
            </>
        );
    }
}

export default viewOrder;