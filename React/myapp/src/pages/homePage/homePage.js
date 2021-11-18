import './homePage.css'
import {Link} from 'react-router-dom';
import {data} from './dataRes';
import {Scrollbars} from 'react-custom-scrollbars';
import { Row, Col, Card} from "reactstrap";
var typeRes = -1;

const res_list = data.map((res, index) => {
    return (
        <div className="containCardRes" key={index}>
            <Card className="resCard">
                <Col className="resRow">
                    <Row>
                    <img className= 'resImg' src={res.img} alt="ResImg" width="250px" style={{borderRadius: "10px"}}/>
                    </Row>
                    <Row>
                    <div className='resName' style={{textAlign:'center'}}> {res.name}</div>
                    <Link className="unitResLink" to="/prelogin"  onClick = {function() {typeRes = index}}>
                        <div className="btn-goto"style={{textAlign:'center'}}>Chọn</div>
                    </Link>
                    </Row>
                </Col>
            </Card>
        </div>
    );
});

function HomePage() {
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