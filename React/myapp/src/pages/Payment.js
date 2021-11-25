import React,{useState,useEffect} from "react";
import { Row, Col, Button } from "reactstrap";
import { Scrollbars } from 'react-custom-scrollbars';
// import data from './Paydata';
import Sidebar from '../components/Sidebar';
import searchIcon from '../image/OIP.jpg';
import axios from 'axios';
function Payment(){
    const [stop,setStop]=useState(0);
    const [data,setData]=useState([]);
    const [money,setTotal]=useState(0);
    function checkData(){
        if (stop===1)
            return;
        if (JSON.parse(sessionStorage.getItem('Data'))){
            setStop(1)
            setData(JSON.parse(sessionStorage.getItem('Data')));
        }
        else setData([]);
    }
    useEffect(() => {
        setTimeout(() => {
            checkData();
        }, 1000);
      });
    function handleSubmit() {
        try {
            const client = {
                name: "619c9601a0294f5555f10da4"
            }
            const localData = [];
            const response = axios.post("http://localhost:3000/Pill/",client).then(
                (res) => {
                    for(const x in res.data.PillList){
                        localData.push(JSON.stringify({"1": res.data.PillList[x]['dateOfReceipt'].substring(0,10),"2":res.data.PillList[x]['state'],"3":res.data.PillList[x]['total']}));
                    }
                    sessionStorage.setItem('Data',JSON.stringify(localData))
                })
          } catch (error) {
            console.log(error);
        }
    }
    function addMoney() {
        try {
            var a;
            if (landy==1) a = "Nạp";
            else a = "Rút";
            const client = {
                name: "619c9601a0294f5555f10da4",
                amount: money,
                stas: a
            }
            const response = axios.post("http://localhost:3000/Pill/updateMoney/",client).then(
                (res) => {
                    console.log(res)
                    handleSubmit();
                    setStop(0);
                })
          } catch (error) {
            console.log(error);
        }
    }
    function updatemoney(e){
        setTotal(e.target.value);
    }
    handleSubmit();
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
                            <Button onClick={()=>addMoney()}>
                                Test
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
                        <input className="input" type="text" name="daynumber" placeholder="Nhập số tiền giao dịch" onChange={updatemoney} />
                            <img id="searchIcon" src= {searchIcon} alt="SearchIcon" />
                        </div>
                        <button class="bottomBtn" type="button" onClick={()=>handleSubmit()}>Xác nhận</button>
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
                        {data.map((item,index)=>{
                            let props=JSON.parse(item)
                            return(
                                <div className="orderRow">
                                    <div className="piece">
                                        <p>{index+1}</p>
                                    </div>
                                    <div className="piece">
                                        <p>{props["1"]}</p>
                                    </div>
                                    <div className="piece">
                                        <p>{props["2"]}</p>
                                    </div>
                                    <div className="piece">
                                        <p>{props["3"]}</p>
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