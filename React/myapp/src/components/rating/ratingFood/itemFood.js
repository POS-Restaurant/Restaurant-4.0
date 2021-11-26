import React from 'react'
import RateContent from '../ratingCpn/rateContent'
import RatingFoodCpn from '../ratingCpn/ratingCpn'
function checkType(type) {
    var typeOrd = "";
    if(type === "Food") {typeOrd = "Đồ ăn"}
    else if(type === "Drink") {typeOrd = "Nước"}
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
    idRes,
    idCus,
    onChange,
    idFood,
    callBack = ()=>{}
}) {
    return (
        <div className="item-food">
            <div className="imgFood" style={{width: "150px"}}>
                <img src={imgFood + ".png"} alt="Img Food" height="150px" />
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
                <div className="ratingOpen">
                    <RatingFoodCpn 
                        rateScore={averRate}
                        rateNum={totalRate}
                        idRes={idRes}
                        idCus={idCus}
                        rating={averRate}
                        onChange={onChange}
                        idFood={idFood}
                    />
                </div>
            </div>

        </div>
    )
}

export default ItemFood
