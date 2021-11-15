import React,{useState} from 'react'
import ItemOrder from './itemOrder'
import './viewOrder.css'
import datas from './dataOrder'
import { Scrollbars } from 'react-custom-scrollbars';


function ListOrder() {
    const [condition,setCon] = useState(0);
    return (
        <div className="list-order">
            <div className="btn-state-order" style={{display:'flex'}}>
                <p id="btn-all" onClick={()=>setCon(0)} >Tất cả đơn hàng</p>
                <p id="btn-new" onClick={()=>setCon(1)} >Đơn hàng mới</p>
                <p id="btn-recv" onClick={()=>setCon(2)}>Đơn hàng đã nhận</p>
            </div>
            <div className="nameCol">
                <div className="numOfOrder" style={{width: "250px"}}>
                    <p>Số thứ tự</p>
                </div>
                <div className="dateBuyOfOrder" style={{width: "230px"}}>
                    <p>Ngày đặt hàng</p>
                </div>
                <div className="dateRecvOfOrder" style={{width: "230px"}}>
                    <p>Ngày nhận hàng</p>
                </div>
                <div className="dateRecvOfOrder" style={{width: "240px"}}>
                    <p>Nhà hàng</p>
                </div>
                <div className="totalBillOfOrder" style={{width: "200px"}}>
                    <p>Tổng tiền</p>
                </div>
                <div className="stateOfOrder" style={{width: "300px"}}>
                    <p>Trạng thái đơn hàng</p>
                </div>
            </div>
            <div style={{height: "500px"}}>
                <Scrollbars>
                    {datas.filter( val => {
                        if (condition===0||condition===val.stateOrder) return val;
                        }).map((item, index) => {
                        return(
                            <div key={index}>
                                <ItemOrder 
                                    id = {index + 1}
                                    dateOrder={item.dateOrder}
                                    dateRecv={item.dateRecv}
                                    totalBill={item.totalBill}
                                    stateOrder={item.stateOrder}
                                    listFood={item.listFood}
                                    res={item.res}
                                />
                            </div>
                        )
                    })}
                </Scrollbars>
            </div>
        </div>
    )
}

export default ListOrder;