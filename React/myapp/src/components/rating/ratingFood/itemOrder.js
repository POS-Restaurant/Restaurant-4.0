import React, {useState}  from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import ItemFood from './itemFood'


function ItemOrder({
    id,
    dateOrder,
    dateRecv,
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
                    averRate = {item.averRate}
                    totalRate = {item.totalRate}
                />
            </div>
        )
    })
    return (
        <div className = 'item-order'>
            <div style={{display: 'flex'}}>
                <div className="idOrder" style={{width: "200px"}}>
                    <p>{id}</p>
                </div>
                <div className="dateOrder" style={{width: "200px"}}>
                    <p>{dateOrder}</p>
                </div>
                <div className="dateRecv" style={{width: "200px"}}>
                    <p>{dateRecv}</p>
                </div>
                <div className="res" style={{width: "300px"}}>
                    <p>{res}</p>
                </div>
                <div className="totalBill" style={{width: "300px"}}>
                    <TotalBill />
                </div>
                <div className="btn-view-order" style={{width: "200px", cursor: 'pointer'}} onClick={handleClick} id={click? "infoClose" : "infoOpen"}>
                    <p>Xem chi tiết</p>
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
