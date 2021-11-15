import React, { Component } from "react";
import { FaYenSign } from "react-icons/fa";
import { Container, Row, Col, CardImg } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { Modal, ModalBody } from 'reactstrap';
import { FoodOrdData } from "./FoodData";
import { Scrollbars } from 'react-custom-scrollbars';
import data from '../components/viewOrder/dataOrder.js'
import ListOrder from '../components/viewOrder/listOrder.js'
function Payment(){
        return (
            <Row className="screen">
                <Col className="Middle">
                <Row>
                        <Button className="type-button">
                            Lịch sử giao dịch
                        </Button>
                        <Button className="type-button">
                            Giao dịch
                        </Button>
                </Row>
                <Row>
                    <h1>Chọn cách thức giao dịch</h1>
                    <Button className="type-button">
                        RÚT TIỀN
                    </Button>
                    <Button className="type-button">
                        NẠP TIỀN
                    </Button>
                </Row>
                <Row>
                    <input style = {{ height: 46, width: 400}} type="text" name="banknumber" placeholder="Nhập số thẻ/tài khoản" />
                        <img id="searchIcon" src= "image\OIP.jpg" alt="SearchIcon" />
                    <input style = {{ height: 46, width: 400}} type="text" name="pinnumber" placeholder="Nhập mã PIN" />
                        <img id="searchIcon" src= "image\OIP.jpg" alt="SearchIcon" />
                    <input style = {{ height: 46, width: 400}} type="text" name="daynumber" placeholder="Nhập dd/mm/year" />
                        <img id="searchIcon" src= "image\OIP.jpg" alt="SearchIcon" />
                    <input style = {{ height: 46, width: 400}} type="text" name="daynumber" placeholder="Nhập số tiền giao dịch" />
                        <img id="searchIcon" src= "image\OIP.jpg" alt="SearchIcon" />
                    <button class="bottomBtn" type="button">Xác nhận</button>
                </Row>
                <Row>
                    {data.map((props)=>{
                        return(
                        <h1>{props.id}</h1>
                        );
                    })}
                </Row>
                </Col>
            </Row>
        );
}

export default Payment;