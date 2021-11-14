import React from 'react'
import RatingCmt from './ratingCmt'
import RatingStar from './ratingStar'
import RatingInfo from './ratingInfo'
import './rating.css'
function RatingCpn({imgCourse, nameCourse, authorCourse, progressScore}) {
    return (
        <div id="ratingCpn">
            <div id="row1">
                <RatingInfo 
                    imgCourse= {imgCourse}
                    nameCourse= {nameCourse}
                    authorCourse = {authorCourse}
                    progressScore = {progressScore}
                />
            </div>
            <div id="titleRating"><p>Please leave your rating</p></div>
            <div id="row2">
                <div id="ratingStar">
                    <RatingStar />
                </div>
                <RatingCmt />
            </div>
        </div>
    )
}

export default RatingCpn
