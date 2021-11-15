import React, { useState} from 'react'
import RateContent from '../ratingCpn/rateContent'
import {RatingResCpn} from '../ratingCpn/ratingCpn'
function ItemRes({img, name, addr, averRate, totalRate}) {
    const [click, setClick] = useState(false);
    const handleClick = () => {setClick(!click)}
    return (
        <div style={{display: 'flex', height: "170px"}}>
            <div className="itemRes" style={{height: "160px", cursor: "pointer"}} onClick={handleClick}>
                <div className="imgRes">
                    <img src={img} alt="ImgRes" />
                </div>
                <div style={{paddingLeft: "20px", paddingRight: "10px", height: "150px", width: "500px", borderRight: "1px solid black"}}>
                    <div className="nameRes">
                        {name}
                    </div>
                    <div className="addressRes">
                        Địa chỉ: {addr}
                    </div>
                </div>
                <div style={{paddingLeft: "20px", height: "150px"}}>
                    <RateContent 
                        rateScoreCpn = {averRate}
                        totalRateCpn = {totalRate}
                    />
                </div>
            </div>
            <div className={click ? "ratingOpen" : "ratingClose"}>
                    <RatingResCpn />
            </div>
        </div>
        
    )
}

export default ItemRes
