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
    callBack = ()=>{}
}) {
    return (
        <div className="item-food">
            <div className="imgFood" style={{width: "150px"}}>
                <img src={imgFood} alt="Img Food" height="150px" />
            </div>
            <div className="nameFood" style={{width: "250px"}}>
                Tên món: {nameFood}
            </div>
            <div className="typeFood" style={{width: "200px"}}>
                Loại: {checkType(typeFood)}
            </div>
            <div className="priceFood" style={{width: "225px"}}>
                Giá tiền: {priceFood}
            </div>
        </div>
    )
}

export default ItemFood
