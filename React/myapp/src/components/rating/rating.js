import React, { useState} from 'react'
import './rating.css'
import TableRate from './tableRate'
import TableOrder from './tableOrder'
import TableRes from './tableRes'

function CheckOpt({option}){
    if(option === 0) {
        return(
            <TableRate />
        )
    }
    else if(option === 1) {
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
    const [option, setOpt] = useState(0);
    return (
        <div className="rating">
            <div className="btn-opt">
                <div className="opt-res" style={{cursor: 'pointer'}} onClick={() =>{setOpt(1)}}>Đánh giá nhà hàng</div>
                <div className="opt-food" style={{cursor: 'pointer'}} onClick={() =>{setOpt(2)}} >Đánh giá món ăn</div>
            </div>
            <div className="row2">
                <CheckOpt option={option} />
            </div>
            
        </div>
    )
}

export default Rating
