import React, { useState} from 'react'

function RatingCmt() {
    const [change, setChange] = useState(false)
    const handleChange = () => setChange(true);
    const saved = () => setChange(false)
    return (
        <div id="ratingCmt" >
            <textarea type="text" placeholder="Vui lòng để lại bình luận của bạn." onClick={handleChange}/>
            <button id="save-btn" className={change? "btn-save active" : "btn-save"} onClick={saved} >
                Save
            </button>
            <button id="cancel-btn" className={change? "btn-save active" : "btn-save"} onClick={saved} >
                Cancel
            </button>
        </div>
    )
}

export default RatingCmt
