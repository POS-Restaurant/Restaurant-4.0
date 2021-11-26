import React, { useState} from 'react'
import RateContent from '../ratingCpn/rateContent'
import {RatingResCpn} from '../ratingCpn/ratingCpn'
function ItemRes({img, name, addr, averRate, totalRate, idRes, idCus}) {
    return (
        <div style={{display: 'flex', height: "460px"}}>
            <div className="itemRes" style={{height: "450px"}}>
                <div className="imgRes">
                    <img src={img + '.png'} alt="ImgRes" />
                </div>
                <div style={{borderRight: "1px solid black"}}>
                    <div style={{paddingLeft: "20px", paddingRight: "10px", height: "200px", width: "500px"}}>
                        <div className="nameRes">
                           Nhà hàng: {name}
                        </div>
                        <div className="addressRes">
                            Địa chỉ: {addr}
                        </div>
                    </div>
                    <div style={{ paddingLeft: "20px", height: "270px"}}>
                        <RateContent 
                            rateScoreCpn = {averRate}
                            totalRateCpn = {totalRate}
                        />
                    </div>
                </div>
            </div>
            <div className={"ratingOpen"}>
                    <RatingResCpn idRes = {idRes} idCus = {idCus} rating = {averRate} />
            </div>
        </div>
        
    )
}

export default ItemRes
