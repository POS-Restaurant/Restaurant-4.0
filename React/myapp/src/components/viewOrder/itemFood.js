import React from 'react'

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
            <div className="imgFood" style={{width: "100px"}}>
                <img src={imgFood} alt="Img Food" />
            </div>
            <div className="nameFood" style={{width: "250px", paddingTop: "50px"}}>
                Tên món: {nameFood}
            </div>
            <div className="typeFood" style={{width: "250px", paddingTop: "50px"}}>
                Loại: {typeFood}
            </div>
            <div className="priceFood" style={{width: "250px", paddingTop: "50px"}}>
                Giá tiền: {priceFood}
            </div>
            <div className="numFood" style={{width: "250px", paddingTop: "50px"}}>
                Số lượng mua: {numFood}
            </div>
        </div>
    )
}

export default ItemFood
