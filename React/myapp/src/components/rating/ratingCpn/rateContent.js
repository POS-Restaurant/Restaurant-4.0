import React from 'react'
import Rating from "@mui/material/Rating";


function RateContent({
    rateScoreCpn,
    totalRateCpn
}) {
    return(
    <div className="rateContent">
        <div id="rateScore"><p>Đánh giá trung bình:<br/>{Math.round(rateScoreCpn * 100) / 100} </p></div>
        <Rating name="read-only" value={rateScoreCpn} readOnly />
        <div id="totalRate"><p>Tổng lượt đánh giá:<br/>({totalRateCpn})</p></div>
    </div>
    )
}

export default RateContent