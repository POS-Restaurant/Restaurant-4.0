import React from 'react'

function checkState(state) {
    var stateOrd = "";
    if(state == 1) {stateOrd = "Đơn hàng chưa được giao"}
    else if(state == 2) {stateOrd = "Đơn hàng đã được nhận"}
    return(
        stateOrd
    )
}

function ItemOrder({
    id,
    dateOrder,
    dateRecv,
    stateOrder,
    totalBill,
    listFood,
    callBack = () => {}
}) {
    return (
        <div className = 'item-order'>
            <div className="idOrder" style={{width: "250px"}}>
                <p>{id}</p>
            </div>
            <div className="dateOrder" style={{width: "250px"}}>
                <p>{dateOrder}</p>
            </div>
            <div className="dateRecv" style={{width: "250px"}}>
                <p>{dateRecv}</p>
            </div>
            <div className="totalBill" style={{width: "200px"}}>
                <p>{totalBill}</p>
            </div>
            <div className="stateOrder" style={{width: "300px"}}>
                <p>{checkState(stateOrder)}</p>
            </div>
        </div>
    )
}

export default ItemOrder
