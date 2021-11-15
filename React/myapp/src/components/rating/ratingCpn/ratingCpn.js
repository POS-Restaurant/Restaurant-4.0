import React from 'react'
import RatingCmt from './ratingCmt'
import RatingStar from './ratingStar'

function RatingFoodCpn() {
    return (
        <div>
            <div id="ratingFoodCpn">
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
function RatingResCpn() {
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
