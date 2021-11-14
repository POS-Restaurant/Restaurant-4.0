import React from 'react'
import RatingCmt from './ratingCmt'
import RatingStar from './ratingStar'
import RatingInfo from './ratingInfo'
import './rating.css'
import BanhNgot from '../../imageFood/BanhNgot.jpg';
function RatingCpn({imgFood, nameFood, typeFood, priceFood}) {
    return (
        <div id="ratingCpn">
            <div id="row1">
                <RatingInfo 
                    imgFood= {BanhNgot}
                    nameFood= "Bánh ngọt"
                    typeFood= "Đồ ăn"
                    priceFood= {10000}
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
    )
}

export default RatingCpn
