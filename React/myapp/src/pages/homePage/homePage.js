import './homePage.css'
import {Link} from 'react-router-dom';
import {dataRes} from './dataRes';
import {Scrollbars} from 'react-custom-scrollbars';
import { Row, Col, Card} from "reactstrap";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ResRedux,{setRes,getRes} from '../../components/Id_res';
import { nanoid } from '@reduxjs/toolkit';

var typeRes = -1;

// axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
// axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';
// const config = {
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// };


function HomePage() {
    const [data,setData]=useState([]);
    // const dispatch = useDispatch();
    const  checkData=async ()=>{
        await axios.get('http://localhost:3000/Restaurant/list').then(res=>{
                console.log(res.data.results);
                setData(res.data.results);}
            );
    }
    useEffect(() => {
        setTimeout(() => {
            checkData();
        }, 1000);
      },[]);
    
    const SetCurrent=(id)=>{
        localStorage.setItem('currentRes',id);
    }
    const res_list = data.map((res) => { 
        return (
            <div className="containCardRes" key={res.id}>
                <Card className="resCard">
                    <Col className="resRow">
                        <Row>
                        <img className= 'resImg' src={"../../imageRes/res"+res.id+".jpg"} alt="ResImg" width="250px" style={{borderRadius: "10px"}}/>
                        </Row>
                        <Row>
                        <div className='resName' style={{textAlign:'center'}}> {res.name}</div>
                        <Link className="unitResLink" to="/prelogin"  onClick = {function() {typeRes =res.id}}>
                            <div className="btn-goto" onClick={(e)=>{SetCurrent(res.id)}}  style={{textAlign:'center'}}>Chọn</div>
                        </Link>
                        </Row>
                    </Col>
                </Card>
            </div>
        );
    })

    return (
        <div className="homePage">
            <div className="titlePage">Danh sách các nhà hàng</div>
            <div className = "bodyPage">
                <div class="scroll-bg-menu">
                    <div class="scroll-div-menu">
                        <div class="scroll-object-menu">
                            {res_list}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {typeRes};
export default HomePage;