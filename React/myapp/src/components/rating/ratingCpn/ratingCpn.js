import React, { useState} from 'react'
import RatingCmt from './ratingCmt'
import RatingStar from './ratingStar'
import axios from "axios";
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
function RatingResCpn(props) {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    function submitHandler() {
        try {
            const review = {
                customer: props.idCus,
                idRes: props.idRes,
                rating: rating,
                comment: comment,
            }
            const response = axios.post("http://localhost:3000/Review/add", review).then(
                (res) => {
                    console.log(res)
                    alert(res.data.success);
                })
          } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div id="ratingResCpn">
                <div id="titleRating" style={{fontSize: "24px",textAlign:'center', borderBottom: "1px solid #000",fontWeight: "bold", paddingBottom: "5px"}}><p>Vui lòng để lại đánh giá của bạn</p></div>
                <div id="row2">
                    <form>
                        <label style={{display: "block"}}>
                            <select
                            name="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            style={{height:"50px", width:"450px", margin: "10px 0px",
                            borderRadius: "4px"
                            }}
                            >
                            <option value="">Select...</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                            </select>
                            <br/>
                            <textarea
                            name="comment"
                            type="text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            style={{height:"150px", width:"450px", margin: "0px 0px 5px",
                            borderRadius: "4px", paddingLeft: "10px", paddingTop: "10px"}}
                            />
                        </label>
                        <button id="btn-submit" onClick={submitHandler()} >Gửi</button>
                        </form>
                </div>
            </div>
        </div>
    )
}
export {RatingResCpn}
export default RatingFoodCpn
