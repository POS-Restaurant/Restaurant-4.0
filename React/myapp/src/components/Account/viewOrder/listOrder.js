import React,{useState, useEffect} from 'react'
import ItemOrder from './itemOrder'
import './viewOrder.css'
import datas from './dataOrder'
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';
import Sidebar from '../../Sidebar'




function ListOrder() {

    const [orders,setOrders]=useState([]);
    const [restaurants,setReataurants]=useState([]);
    // const dispatch = useDispatch();
    const  checkData=async ()=>{
        await axios.get('http://localhost:3000/Order/list').then(res=>{
                console.log(res.data.results);
                setOrders(res.data.results);}
        );
        await axios.get('http://localhost:3000/Restaurant/list').then(res=>{
                console.log(res.data.results);
                setReataurants(res.data.results);}
        );
    }
    useEffect(() => {
        setTimeout(() => {
            checkData();
        }, 1500);
      },[]);

    const [condition,setCon] = useState('');

    function searchRes(id, listRes){
        for(let i=0; i<listRes.length; i++)
        {
            if(id === listRes[i]._id) return listRes[i].name
        }
    }

    return (
        <div>
            <Sidebar type={0}/>
            <div className="list-order">
                <div className="btn-state-order" style={{display:'flex'}}>
                    <p id="btn-all" onClick={()=>setCon('')} >Tất cả đơn hàng</p>
                    <p id="btn-new" onClick={()=>setCon('New')} >Đơn hàng mới</p>
                    <p id="btn-recv" onClick={()=>setCon('Done')}>Đơn hàng đã nhận</p>
                </div>
                <div className="nameCol">
                    <div className="numOfOrder" style={{width: "160px"}}>
                        <p>Số thứ tự</p>
                    </div>
                    <div className="dateBuyOfOrder" style={{width: "300px"}}>
                        <p>Ngày đặt hàng</p>
                    </div>
                    <div className="dateRecvOfOrder" style={{width: "300px"}}>
                        <p>Ngày nhận hàng</p>
                    </div>
                    <div className="dateRecvOfOrder" style={{width: "240px"}}>
                        <p>Nhà hàng</p>
                    </div>
                    <div className="totalBillOfOrder" style={{width: "200px"}}>
                        <p>Tổng tiền</p>
                    </div>
                    <div className="stateOfOrder" style={{width: "250px"}}>
                        <p>Trạng thái đơn hàng</p>
                    </div>
                </div>
                <div style={{height: "500px"}}>
                    <Scrollbars>
                        {orders.filter( val => {
                            if (condition===''||condition===val.state) return val;
                            }).map((item, index) => {
                            return(
                                <div key={index}>
                                    <ItemOrder 
                                        id = {index + 1}
                                        dateOrder={item.dateOfPurchase}
                                        dateRecv={item.dateOfReceipt}
                                        totalBill={item.total}
                                        stateOrder={item.state}
                                        listFood={datas[0].listFood}
                                        res={searchRes(item.restaurant, restaurants)}
                                    />
                                </div>
                            )
                        })}
                    </Scrollbars>
                </div>
            </div>
        </div>
    )
}

export default ListOrder;