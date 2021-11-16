import React from 'react'
import star0 from '../../../imageRate/score0.jpg'
import star05 from '../../../imageRate/score0_5.jpg'
import star1 from '../../../imageRate/score1.jpg'
import star15 from '../../../imageRate/score1_5.jpg'
import star2 from '../../../imageRate/score2.jpg'
import star25 from '../../../imageRate/score2_5.jpg'
import star3 from '../../../imageRate/score3.jpg'
import star35 from '../../../imageRate/score3_5.jpg'
import star4 from '../../../imageRate/score4.jpg'
import star45 from '../../../imageRate/score4_5.jpg'
import star5 from '../../../imageRate/score5.jpg'



function RateContent({
    rateScoreCpn,
    totalRateCpn
}) {
    let star = star0
    if (rateScoreCpn > 0 && rateScoreCpn < 1) star = star05
    else if (rateScoreCpn === 1) star = star1
    else if (rateScoreCpn > 1 && rateScoreCpn < 2) star = star15
    else if (rateScoreCpn === 2) star = star2
    else if (rateScoreCpn > 2 && rateScoreCpn < 3) star = star25
    else if (rateScoreCpn === 3) star = star3
    else if (rateScoreCpn > 3 && rateScoreCpn < 4) star = star35
    else if (rateScoreCpn === 4) star = star4
    else if (rateScoreCpn > 4 && rateScoreCpn < 5) star = star45
    else if (rateScoreCpn === 5) star = star5
    return (
        <div className="rateContent">
            <div id="rateScore"><p>Đánh giá trung bình:<br/>{rateScoreCpn} </p></div>
            <div id="rateImgStar"><img src= {star} alt="star"></img></div>
            <div id="totalRate"><p>Tổng lượt đánh giá:<br/>({totalRateCpn})</p></div>
        </div>
    )
}

export default RateContent