import React, { useState} from 'react'
import RatingCmt from './ratingCmt'
import RatingStar from './ratingStar'
import RatingInfoFood, {RatingInfoRes} from './ratingInfo'
import BanhNgot from '../../imageFood/BanhNgot.jpg';
import res1 from '../../imageRes/res1.jpg';


function RatingFoodCpn({imgFood, nameFood, typeFood, priceFood}) {
    return (
        <div>
            <div id="ratingFoodCpn">
                <div id="row1">
                    <RatingInfoFood
                        imgFood = {BanhNgot}
                        nameFood = "Bánh ngọt"
                        typeFood = "Đồ ăn"
                        priceFood = {10000}
                    />
                </div>
                <div id="titleRating"><p>Vui lòng để lại đánh giá của bạn</p></div>
                <div id="row2">
                    <div id="ratingStar">
                        <RatingStar />
                    </div>
                    <RatingCmt />
                </div>
            </div>
        </div>
    )
}
function RatingResCpn({imgRes, nameRes, addressRes}) {
    return (
        <div>
            <div id="ratingResCpn">
                <div id="titleRating" style={{textAlign:'center', borderBottom: "1px solid #000"}}><p>Vui lòng để lại đánh giá của bạn</p></div>
                <div id="row2" style={{display: 'flex'}}>
                    <div id="ratingStar" style={{paddingLeft: "20px", width: "180px", paddingTop: "30px"}}>
                        <RatingStar />
                    </div>
                    <div id="ratingCmt"style ={{paddingTop: "10px"}}>
                        <RatingCmt />
                    </div>
                </div>
            </div>
        </div>
    )
}
export {RatingResCpn}
export default RatingFoodCpn
