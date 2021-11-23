
import chef from "./Chef.module.css";
import OrderCard from "./OrderCard";
import Sidebar from "../../components/Sidebar";
import React,{ useState, useEffect} from 'react'
import axios from 'axios';



function ChefUI() {
    const [orders,setOrders]=useState([]);
    const [clients,setClients]=useState([]);
    const [foods,setFoods]=useState([]);
    const  checkData=async ()=>{
        await axios.get('http://localhost:3000/Order/list').then(res=>{
                // console.log(res.data.results);
                setOrders(res.data.results);}
        );
        await axios.get('http://localhost:3000/Client/list').then(res=>{
                // console.log(res.data.results);
                setClients(res.data.results);}
        );
        await axios.get('http://localhost:3000/Food/list').then(res=>{
                // console.log(res.data.results);
                setFoods(res.data.results);}
        );
    }
    useEffect(() => {
        setTimeout(() => {
            checkData();
        }, 1500);
    },[]);
    const searchInfoCus = (data, id) => {
        if(data) {
            for(let i = 0; i < data.length; i++) {
                if(data[i]._id === id) {return data[i].name}
            }
        }
    }
    return (
        <div>
            <Sidebar type={1}/>
            <div class={chef.chef_ui}>
                <div className={chef.mainContent}>
                    <div className={chef.buttonBar}>
                        <button className={`${chef.btnAll} ${chef.active}`}>
                            Tất cả
                        </button>
                        <button className={chef.btnPending}>Đang chờ</button>
                        <button className={chef.btnDoing}>Đang thực hiện</button>
                        <button className={chef.btnDone}>Hoàn thành</button>
                        <button className={chef.btnCancel}>Đã hủy</button>
                    </div>
                    <div className={chef.orderTable}>
                        <div
                            className={`${chef.orderListInfoBar} ${chef.orderCard}`}
                        >
                            <div className={chef.orderCardID}>Mã đơn</div>
                            <div className={chef.orderCardTime}>Thời gian đặt</div>
                            <div className={chef.orderCardName}>Người đặt</div>
                            <div className={chef.orderCardPrice}>Tổng tiền</div>
                            <div className={chef.orderCardStatus}>Trạng thái</div>
                            <div className={chef.orderUpdateState}></div>
                        </div>
                        <div className={chef.orderList}>
                            {orders && orders.map((order) => {
                                return (
                                    <OrderCard
                                        key={order.id}
                                        id={order._id}
                                        time={order.dateOfPurchase}
                                        name={searchInfoCus(clients, order.customer)}
                                        price={order.total}
                                        status={order.state}
                                        total={order.total}
                                        listFood = {order.listFood}
                                        listNum = {order.listNum}
                                        listNote = {order.listNote}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChefUI;
