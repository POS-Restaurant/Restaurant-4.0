import React from 'react'
import { dataChef } from '../../components/Account/Info/dataInfo'
import Info from '../../components/Account/Info/info'
function ChefInfo() {
    return (
        <div className="chefInfo">
            <Info data={dataChef} type = {1} />
        </div>
    )
}
export default ChefInfo
