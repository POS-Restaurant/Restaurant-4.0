import React from 'react'
function checkType(type) {
    var typeFood = "";
    if(type === "DoAn") {typeFood = "Đồ ăn"}
    else if(type === "Nuoc") {typeFood = "Nước"}
    else if(type === "Combo") {typeFood = "Combo"}
    return(
        typeFood
    )
}

function RatingInfoFood({
    nameFood,
    typeFood,
    priceFood,
    imgFood,
    callback = () => {}
}) {
    return (
        <div className="ratingInfoFood" >
            <div className="imgFood" id="r1" style={{overflow: "hidden"}}>
                <img src={imgFood} alt = "ImgFood"  style={{height: "120px"}}></img>
            </div>
           <div id="r2">
                <div id="nameFoodRate">
                    Tên món: {nameFood}
                </div>
                <div id="typeFoodRate">
                    Loại: {typeFood}
                </div>
                <div id="priceFoodRate">
                    Giá tiền: {priceFood}
                </div>
           </div>
        </div>
    )
}
function RatingInfoRes({
    nameRes,
    addressRes,
    imgRes,
    callback = () => {}
}) {
    return (
        <div className="ratingInfoRes" >
            <div className="imgFood" id="r1" style={{overflow: "hidden"}}>
                <img src={imgRes} alt = "ImgRes"  style={{height: "120px"}}></img>
            </div>
           <div id="r2">
                <div id="nameResRate">
                    Tên nhà hàng: {nameRes}
                </div>
                <div id="addressResRate">
                    Địa chỉ: {addressRes}
                </div>
           </div>
        </div>
    )
}

export {RatingInfoRes};
export default RatingInfoFood;
