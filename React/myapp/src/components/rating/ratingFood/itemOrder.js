import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import ItemFood from "./itemFood";

function ItemOrder({
    id,
    dateOrder,
    dateRecv,
    listFood,
    total,
    idRes,
    idCus,
    onChange,
    callBack = () => {},
}) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const displayInfo = listFood.map((item, index) => {
        return (
            <div key={index}>
                <ItemFood
                    idFood={item._id}
                    imgFood={item.img}
                    nameFood={item.name}
                    typeFood={item.kind}
                    priceFood={item.price}
                    averRate={item.rating}
                    totalRate={item.rateNum}
                    idRes={idRes}
                    idCus={idCus}
                    onChange={onChange}
                />
            </div>
        );
    });
    const timePurchase = new Date(dateOrder)
    const timeReceipt = new Date(dateRecv)
    return (
        <div className="item-order">
            <div className="orderCard" style={{ display: "flex" }}>
                <div className="idOrder" style={{ width: "25%" }}>
                    <p>{id}</p>
                </div>
                <div className="dateOrder" style={{ width: "20%" }}>
                    <p>{timePurchase.toString().slice(0, 24)}</p>
                </div>
                <div className="dateRecv" style={{ width: "20%" }}>
                    <p>{timeReceipt.toString().slice(0, 24)}</p>
                </div>
                <div className="totalBill" style={{ width: "15%" }}>
                    <p>{total}VNĐ</p>
                </div>
                <div
                    className="btn-view-order"
                    style={{
                        width: "20%",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                    }}
                    onClick={handleClick}
                    id={click ? "infoClose" : "infoOpen"}
                >
                    <p>Xem chi tiết</p>
                </div>
            </div>
            <div className={click ? "nav-menu-info active" : "nav-menu-info"}>
                <div className="info-order">
                    <Scrollbars>{displayInfo}</Scrollbars>
                </div>
            </div>
        </div>
    );
}

export default ItemOrder;
