import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import {dataRes} from '../ratingCpn/data'
import ItemRes from './itemRes'
import './tableRes.css'
function TableRes() {
    return (
        <div className="tableRes">
            <div className="titleCol">
                Thông tin của nhà hàng
            </div>
            <div style={{height: "500px"}}>
                <ItemRes
                img = {dataRes.img}
                name = {dataRes.name}
                addr = {dataRes.addr}
                averRate = {dataRes.averRate}
                totalRate = {dataRes.totalRate}
                />
            </div>
        </div>
    )
}

export default TableRes
