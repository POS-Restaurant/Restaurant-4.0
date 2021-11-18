import React,{useState} from "react";
import { Row, Col, Button } from "reactstrap";
import { Scrollbars } from 'react-custom-scrollbars';
import data from './Paydata'
import Sidebar from '../components/Sidebar'
import searchIcon from '../image/OIP.jpg'
function Payment(){
    function fine(a){
        if (a == 1)
            return (
                <p>Nạp Tiền</p>
            );
        else
        return (
            <p>Rút Tiền</p>
        );
    }
    const [eda,setEDA]= useState(0);
    const [landy,setLandy]= useState(0);
        return (
            <div>
                <Sidebar type={0} />
                <Row className="screen">
                    <Col className="Middle">
                    <div style={{display: 'flex'}}>
                            <Button className={eda===0?'type-button active':'type-button'} onClick={()=>setEDA(0)}>
                                Lịch sử giao dịch
                            </Button>
                            <Button className={eda===1?'type-button active':'type-button'}  onClick={()=>setEDA(1)}>
                                Giao dịch
                            </Button>
                    </div>
                    <Row className={eda===1?'active':'hide'}>
                    <Row>
                        <h1>Chọn cách thức giao dịch</h1>
                        <Button className={landy===0?'type-button active':'type-button'} onClick={()=>setLandy(0)}>
                            RÚT TIỀN
                        </Button>
                        <Button className={landy===1?'type-button active':'type-button'} onClick={()=>setLandy(1)}>
                            NẠP TIỀN
                        </Button>
                    </Row>
                    <Row>
                        <div className="inputSection">
                        <input className="input" type="text" name="banknumber" placeholder="Nhập số thẻ/tài khoản" />
                            <img id="searchIcon" src= {searchIcon} alt="SearchIcon" />
                        <input className="input" type="text" name="pinnumber" placeholder="Nhập mã PIN" />
                            <img id="searchIcon" src= {searchIcon} alt="SearchIcon" />
                        <input className="input" type="text" name="daynumber" placeholder="Nhập dd/mm/year" />
                            <img id="searchIcon" src= {searchIcon} alt="SearchIcon" />
                        <input className="input" type="text" name="daynumber" placeholder="Nhập số tiền giao dịch" />
                            <img id="searchIcon" src= {searchIcon} alt="SearchIcon" />
                        </div>
                        <button class="bottomBtn" type="button">Xác nhận</button>
                    </Row>
                    </Row>
                    <Row className={eda===0?'active':'hide'}>
                    <div className="list-pay">
                        <div className="nameCol">
                            <div className="piece">
                                <p>Số thứ tự</p>
                            </div>
                            <div className="piece">
                                <p>Ngày giao dịch</p>
                            </div>
                            <div className="piece">
                                <p>Dạng giao dịch</p>
                            </div>
                            <div className="piece">
                                <p>Số tiền</p>
                            </div>
                        </div>
                        <Scrollbars>
                        {data.map(props=>{
                            return(
                                <div className="orderRow">
                                    <div className="piece">
                                        <p>{props.id}</p>
                                    </div>
                                    <div className="piece">
                                        <p>{props.date}</p>
                                    </div>
                                    <div className="piece">
                                        <p>{fine(props.payment)}</p>
                                    </div>
                                    <div className="piece">
                                        <p>{props.money}</p>
                                    </div>
                                    <div className="clear">
                                    </div>
                                </div>
                            );
                        })}
                        </Scrollbars>
                    </div>
                    </Row>
                    </Col>
                </Row>
            </div>
        );
}

export default Payment;