import React, {useState}  from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import ItemFood from './itemFood'
function checkState(state) {
    var stateOrd = "";
    if(state === 1) {stateOrd = "Đơn hàng chưa được giao"}
    else if(state === 2) {stateOrd = "Đơn hàng đã được nhận"}
    return(
        stateOrd
    )
}

function ItemOrder({
    id,
    dateOrder,
    dateRecv,
    stateOrder,
    listFood,
    res,
    callBack = () => {}
}) {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    function TotalBill(){
        var total = 0;
        for (let i = 0; i <listFood.length; i++)
        {
            total += listFood[i].price * listFood[i].num;
        }
        return(
            <p>{total}</p>
        )
    }
    const displayInfo = listFood.map((item,index) => {
        return(
            <div key={index}>
                <ItemFood 
                    imgFood = {item.img}
                    nameFood = {item.name}
                    typeFood = {item.type}
                    priceFood = {item.price}
                    numFood = {item.num}
                />
            </div>
        )
    })
    return (
        <div className = 'item-order' style={{cursor: 'pointer'}} onClick={handleClick} id={click? "infoClose" : "infoOpen"}>
            <div style={{display: 'flex'}}>
                <div className="idOrder" style={{width: "200px"}}>
                    <p>{id}</p>
                </div>
                <div className="dateOrder" style={{width: "300px"}}>
                    <p>{dateOrder}</p>
                </div>
                <div className="dateRecv" style={{width: "300px"}}>
                    <p>{dateRecv}</p>
                </div>
                <div className="res" style={{width: "300px"}}>
                    <p>{res}</p>
                </div>
                <div className="totalBill" style={{width: "300px"}}>
                    <TotalBill />
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
