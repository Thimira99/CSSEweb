import React, { Component } from 'react';
import Navbar from '../../../components/AdminSideBar/HomeNavBar';
import { Form, Button, Table, Row, Col, Container } from "react-bootstrap";
import AccountCSS from './account.module.css';
import { FcOpenedFolder } from "react-icons/fc";
import { MDBDataTable } from 'mdbreact';


class approval extends Component {
    
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

                        <span style={{ "fontSize": "x-large" }}>Pennding Approvals </span><span style={{ "fontSize": "10px" }}> </span><span style={{ "fontSize": "12px" }}></span>
                    </div>





                </Row>
                <div

                    className={AccountCSS.tableContainer}>
                   
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
            </>
        );
    }
}

export default approval;