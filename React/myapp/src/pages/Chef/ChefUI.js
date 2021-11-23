
import chef from "./Chef.module.css";
import OrderCard from "./OrderCard";
import OrderDetail from "./OrderDetail/OrderDetail";
import Sidebar from "../../components/Sidebar"
import React,{ useState, useEffect} from 'react'
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';


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
    console.log(orders[0])
    const list = (data) => {
        let arr = [];
        for(let i = 0; i < data.length; i++) {
            for(let j = 0; j < foods && foods.length; j++) {
                if(data[i]._id === foods[j]._id) arr.push(foods[j]);
            }
        }
        return arr;
    }
    // console.log(list(orders&&orders[0].listFood))
    return (
        <div>
            <Sidebar type={1}/>
            <div class={chef.chef_ui}>
                <header className={chef.header}>
                    <h1 className={chef.title}>Quản lý đơn hàng</h1>
                    <div className={chef.right}>
                        <div className={chef.searchBar}>
                            <input className={chef.inputSearch} type="text" />{" "}
                            <button className={chef.searchButton}>
                                <span
                                    className={`${chef.materialIconsOutlined} ${chef.buttonSearch}`}
                                >
                                    search
                                </span>
                            </button>
                        </div>
                        <button className={chef.notiButton}>
                            <span className={chef.materialIconsOutlined}>
                                notifications
                            </span>
                        </button>
                    </div>
                </header>
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
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* <OrderDetail/> */}
            </div>
        </div>
    );
}

export default ChefUI;
