import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import {dataRes} from '../ratingCpn/data'
import ItemRes from './itemRes'
import './tableRes.css'
function TableRes() {
    return (
        <div className="tableRes">
            <div className="titleCol">
                Thông tin của các nhà hàng
            </div>
            <div style={{height: "500px"}}>
                <Scrollbars>
                    {dataRes.map((item, index)=>{
                        return(
                            <div key={index}>
                                <ItemRes
                                img = {item.img}
                                name = {item.name}
                                addr = {item.addr}
                                averRate = {item.averRate}
                                totalRate = {item.totalRate}
                                />
                            </div>
                        )
                    })}
                </Scrollbars>
            </div>
        </div>
    )
}

export default TableRes
