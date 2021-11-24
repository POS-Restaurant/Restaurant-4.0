import React,{useState, useEffect} from 'react'
import './viewOrder.css'
import axios from 'axios';
import Sidebar from '../../Sidebar'




function ListOrder() {

    return (
        <div>
            <Sidebar type={0}/>
            <div className="list-order">
                <div className="btn-state-order" style={{display:'flex'}}>
                    <p id="btn-all"  >Tất cả đơn hàng</p>
                    <p id="btn-new" >Đơn hàng mới</p>
                    <p id="btn-recv" >Đơn hàng đã nhận</p>
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
                    
                </div>
            </div>
        </div>
    )
}

export default ListOrder;