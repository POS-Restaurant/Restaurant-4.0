import React, { useState} from 'react'
import RateContent from '../ratingCpn/rateContent'
import RatingFoodCpn from '../ratingCpn/ratingCpn'
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
    averRate,
    totalRate,
    callBack = ()=>{}
}) {
    const [click1, setClick1] = useState(false);
    const handleClick1 = () => {setClick1(!click1)}
    return (
        <div className="item-food" onClick={handleClick1}>
            <div className="imgFood" style={{width: "150px"}}>
                <img src={imgFood} alt="Img Food" height="150px" />
            </div>
            <div className="col2" style={{width: "400px", height: "150px", borderRight: "1px solid black"}}>
                <div className="nameFood" style={{fontSize: "24px", fontWeight: "bold", height: "50px"}}>
                    Tên món: {nameFood}
                </div>
                <div className="typeFood"style={{height: "50px"}}>
                    Loại: {checkType(typeFood)}
                </div>
                <div className="priceFood" style={{height: "50px"}}>
                    Giá tiền: {priceFood}
                </div>
            </div>
            <div style={{paddingLeft: "20px", height: "150px", width:"250px"}}>
                <RateContent 
                    rateScoreCpn = {averRate}
                    totalRateCpn = {totalRate}
                />
            </div>
            <div style={{width: "500px"}}>
                <div className={click1 ? "ratingOpen" : "ratingClose"}>
                    <RatingFoodCpn />
                </div>
            </div>

        </div>
    )
}

export default ItemFood
