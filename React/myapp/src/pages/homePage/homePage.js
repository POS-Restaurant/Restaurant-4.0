import './homePage.css'
import {Link} from 'react-router-dom';
import { Row, Col, Card} from "reactstrap";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

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
        console.log(res.img);
        return (
            <div className="containCardRes" key={res._id}>
                <Card className="resCard">
                    <Col className="resRow">
                        <Row>
                        <img className= 'resImg' src={res.img+'.png'} alt="ResImg" width="250px" style={{borderRadius: "10px"}}/>
                        </Row>
                        <Row>
                        <div className='resName' style={{textAlign:'center'}}> {res.name}</div>
                        <Link className="unitResLink" to="/prelogin"  onClick = {function() {typeRes =res.id}}>
                            <div className="btn-goto" onClick={(e)=>{SetCurrent(res._id)}}  style={{textAlign:'center'}}>Chọn</div>
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
                <div class="scroll-bg-res">
                    <div class="scroll-div-res">
                        <div class="scroll-object-res">
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