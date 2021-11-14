import React from 'react'

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
            <div className="idOrder">
                <p>{id}</p>
            </div>
            <div className="col-date">
                <div className="dateOrder">
                    <p>{dateOrder}</p>
                </div>
                <div className="dateRecv">
                    <p>{dateRecv}</p>
                </div>
            </div>
            <div className="totalBill">
                <p>{totalBill}</p>
            </div>
            <div className="stateOrder">
                <p>{stateOrder}</p>
            </div>
        </div>
    )
}

export default ItemOrder
