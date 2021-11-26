import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import ItemOrder from './itemOrder'
import './tableOrder.css'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function TableOrder() {
    const [orders, setOrders] = useState([]);
    const [res, setRes] = useState([]);
    const [foods, setFoods] = useState([]);
    const idRes = localStorage.getItem("currentRes");
    const idCus = localStorage.getItem("id");
    console.log(idCus)
    const [init, setInit] = useState(true);
    const checkData = async () => {
        await axios
        .get("http://localhost:3000/Order/get/my_orders", { params: { idCus: idCus, idRes: idRes } })
        .then((res) => {
            setOrders(res.data.results);
        });
        await axios
        .get("http://localhost:3000/Restaurant/get/res_info", { params: { id: idRes } })
        .then((res) => {
            setRes(res.data.results);
        });
        await axios.get("http://localhost:3000/Food/get/list_food_res", { params: { id: idRes } }).then((res) => {
        setFoods(res.data.results);
        });
    };

    useEffect(() => {
        setTimeout(() => {
        if (init) {
            setInit(false);
            checkData();
        }
        }, 100);
    }, []);
    function searchFood(data) {
        let arr = [];
        console.log(data);
        if (foods && data) {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < foods.length; j++) {
                    if (data[i] === foods[j]._id) arr.push(foods[j]);
                }
            }
        }
        console.log(arr);
        return arr;
    }
    const onChange = async () => {
        await axios
        .get("http://localhost:3000/Order/get/my_orders", { params: { idCus: idCus, idRes: idRes } })
        .then((res) => {
            setOrders(res.data.results);
        });
        await axios
        .get("http://localhost:3000/Restaurant/get/res_info", { params: { id: idRes } })
        .then((res) => {
            setRes(res.data.results);
        });
        await axios.get("http://localhost:3000/Food/get/list_food_res", { params: { id: idRes } }).then((res) => {
        setFoods(res.data.results);
        });
      };
    return (
        <div className="tableOrder">
            <div className="titleCol">
                Thông tin của các đơn hàng đã mua tại nhà hàng: {res.length > 0 && res[0].name}
            </div>
            <div className="subtitleCol" style={{display: 'flex'}}>
                <p style={{width: "25%"}}>Id</p>
                <p style={{width: "20%"}}>Ngày đặt hàng</p>
                <p style={{width: "20%"}}>Ngày nhận hàng</p>
                <p style={{width: "15%"}}>Tổng tiền</p>
            </div>
            <div style={{height: "500px"}}>
                <Scrollbars>
                    {orders.length > 0 ? orders.filter(val => val.state === "Done").map((item, index)=>{
                        return(
                            <div key={index}>
                                <ItemOrder
                                id = {item._id}
                                dateOrder = {item.dateOfPurchase}
                                dateRecv = {item.dateOfReceipt}
                                stateOrder = {item.state}
                                listFood = {searchFood(item.listFood)}
                                total = {item.total}
                                idRes={idRes}
                                idCus={idCus}
                                onChange={onChange}
                                />
                            </div>
                        )
                    }): <div className={"exception"}> <p>Danh sách đơn hàng trống.</p> </div>}
                </Scrollbars>
            </div>
        </div>
    )
}

export default TableOrder
