import React, { useState} from 'react'
import RatingCmt from './ratingCmt'
import RatingStar from './ratingStar'
import RatingInfoFood, {RatingInfoRes} from './ratingInfo'
import './rating.css'
import BanhNgot from '../../imageFood/BanhNgot.jpg';
import res1 from '../../imageRes/res1.jpg';

function CheckOpt({option, imgFood, nameFood, typeFood, priceFood, imgRes, nameRes, addressRes}){
    if(option === -1) {
        return(
            <div style={{display: 'none'}}></div>
        )
    }
    else if(option === 0) {
        return(
            <RatingInfoRes imgRes={imgRes} nameRes={nameRes} addressRes={addressRes}/>
        )
    }
    else if(option === 1) {
        return(
            <RatingInfoFood imgFood={imgFood} nameFood={nameFood} typeFood={typeFood} priceFood={priceFood}/>
        )
    }
}

function RatingCpn({imgFood, nameFood, typeFood, priceFood, imgRes, nameRes, addressRes}) {
    const [option, setOpt] = useState(-1);
    return (
        <div>
            <div className="choice-opt" style={{display:'flex'}}>
                <p id="btn-rate-res" onClick={()=>setOpt(0)} >Đánh giá nhà hàng</p>
                <p id="btn-rate-food" onClick={()=>setOpt(1)} >Đánh giá món ăn</p>
            </div>
            <div id="ratingCpn">
                <div id="row1">
                    <CheckOpt
                        option={option}
                        imgFood = {BanhNgot}
                        nameFood = "Bánh ngọt"
                        typeFood = "Đồ ăn"
                        priceFood = {10000}
                        imgRes = {res1}
                        nameRes = "Nhà hàng 7 chúng tôi"
                        addressRes = "248, Lý Thường Kiệt, Phường 14, Quận 10, Thành phố HCM"
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

export default RatingCpn
