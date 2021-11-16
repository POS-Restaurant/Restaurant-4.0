import React, { useState} from 'react'
import RatingCmt from './ratingCmt'
import RatingStar from './ratingStar'

function RatingFoodCpn() {
    const [change, setChange] = useState(false)
    const handleChange = () => setChange(true);
    const saved = () => setChange(false)
    return (
        <div>
            <div id="ratingFoodCpn">
                <div id="titleRating" style={{textAlign:'center', borderBottom: "1px solid #000", fontWeight: "bold", paddingBottom: "5px"}}><p>Vui lòng để lại đánh giá của bạn</p></div>
                <div id="row2" style={{display: 'flex'}}>
                    <div id="ratingStar" style={{paddingLeft: "20px", width: "170px", paddingTop: "30px"}} onClick={handleChange}>
                        <RatingStar />
                    </div>
                    <div id="ratingCmt"style ={{paddingTop: "10px"}} onClick={handleChange}>
                        <RatingCmt />
                    </div>
                    <div>
                        <button id="save-btn" className={change? "btn-save active" : "btn-save"} onClick={saved} >
                            Save
                        </button>
                        <button id="cancel-btn" className={change? "btn-save active" : "btn-save"} onClick={saved} >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function RatingResCpn() {
    const [change, setChange] = useState(false)
    const handleChange = () => setChange(true);
    const saved = () => setChange(false)
    return (
        <div>
            <div id="ratingResCpn">
                <div id="titleRating" style={{fontSize: "24px",textAlign:'center', borderBottom: "1px solid #000",fontWeight: "bold", paddingBottom: "5px"}}><p>Vui lòng để lại đánh giá của bạn</p></div>
                <div id="row2">
                    <div id="ratingStar" style={{paddingLeft: "30px", paddingTop: "30px"}} onClick={handleChange}>
                        <RatingStar />
                    </div>
                    <div id="ratingCmt"style ={{paddingTop: "10px"}} onClick={handleChange}>
                        <RatingCmt />
                    </div>
                    <button id="save-btn" className={change? "btn-save active" : "btn-save"} onClick={saved} >
                        Save
                    </button>
                    <button id="cancel-btn" className={change? "btn-save active" : "btn-save"} onClick={saved} >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
export {RatingResCpn}
export default RatingFoodCpn
