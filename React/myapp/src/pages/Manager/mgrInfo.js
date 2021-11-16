import React from 'react'
import {dataManager} from '../../components/Account/Info/dataInfo'
import Info from '../../components/Account/Info/info'
function MgrInfo() {
    return (
        <div className="mgrInfo">
            <Info data={dataManager} type = {2} />
        </div>
    )
}

export default MgrInfo
