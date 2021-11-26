import React, { useState} from 'react'
import './rating.css'
import TableRate from './tableRate'
import TableOrder from '../ratingFood/tableOrder'
import TableRes from '../ratingRes/tableRes'
import Sidebar from '../../Sidebar'
// import Button from ''
function CheckOpt({option}){
    if(option === 1) {
        return(
            <TableRes />
        )
    }
    else if(option === 2) {
        return(
            <TableOrder/>
        )
    }
}

function Rating() {
    const [option, setOpt] = useState(1);
    return (
        <div>
            <Sidebar type={0} />
            <div className="rating">
                <div className="btn-opt">
                    <button className="opt res" style={{cursor: 'pointer'}} onClick={() =>{setOpt(1)}}>Đánh giá nhà hàng</button>
                    <button className="opt food" style={{cursor: 'pointer'}} onClick={() =>{setOpt(2)}} >Đánh giá món ăn</button>
                </div>
                <div className="row2">
                    <CheckOpt option={option} />
                </div>
                
            </div>
        </div>
    )
}

export default Rating
