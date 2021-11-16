import React from 'react'

function checkType(type) {
    var typeOrd = "";
    if(type === "DoAn") {typeOrd = "Đồ ăn"}
    else if(type === "Nuoc") {typeOrd = "Nước"}
    else if(type === "Combo") {typeOrd = "Combo"}
    return(
        typeOrd
    )
}

function ItemFood({
    imgFood,
    nameFood,
    typeFood,
    priceFood,
    numFood,
    resFood,
    callBack = ()=>{}
}) {
    return (
        <div className="item-food">
            <div className="imgFood" style={{width: "120px"}}>
                <img src={imgFood} alt="Img Food" height="120px" />
            </div>
            <div className="nameFood" style={{width: "250px", paddingTop: "50px"}}>
                Tên món: {nameFood}
            </div>
            <div className="typeFood" style={{width: "200px", paddingTop: "50px"}}>
                Loại: {checkType(typeFood)}
            </div>
            <div className="resFood" style={{width: "300px", paddingTop: "50px"}}>
                Nhà hàng: {resFood}
            </div>
            <div className="priceFood" style={{width: "225px", paddingTop: "50px"}}>
                Giá tiền: {priceFood}
            </div>
            <div className="numFood" style={{width: "225px", paddingTop: "50px"}}>
                Số lượng mua: {numFood}
            </div>
        </div>
    )
}

export default ItemFood
