import React from 'react'
import Info from './Info/info'
import { dataCustomer } from './Info/dataInfo'
function CusInfo() {
    return (
        <div className="cusInfo">
            <Info data={dataCustomer} type={0}/>
        </div>
    )
}

export default CusInfo
