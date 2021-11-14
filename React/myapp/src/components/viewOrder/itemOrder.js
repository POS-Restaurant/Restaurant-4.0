import React, {useState}  from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import ItemFood from './itemFood'
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
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const displayInfo = listFood.map((item,index) => {
        return(
            <div key={index}>
                <ItemFood 
                    imgFood = "http://placehold.jp/96x120.png"
                    nameFood = "Gà rán"
                    typeFood = "Đồ ăn"
                    priceFood = {10000}
                    numFood = {2}
                />
            </div>
        )
    })
    return (
        <div className = 'item-order' style={{cursor: 'pointer'}} onClick={handleClick} id={click? "infoClose" : "infoOpen"}>
            <div style={{display: 'flex'}}>
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
            <div className={click? 'nav-menu-info active' : 'nav-menu-info'}>
                <div className="info-order">
                    <Scrollbars>
                        {displayInfo}
                    </Scrollbars>
                </div>
            </div>
        </div>
    )
}

export default ItemOrder
