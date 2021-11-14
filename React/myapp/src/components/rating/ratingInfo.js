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

function RatingInfo({
    nameFood,
    typeFood,
    priceFood,
    imgFood,
    callback = () => {}
}) {
    return (
        <div className="ratingInfo" >
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


export default RatingInfo;
