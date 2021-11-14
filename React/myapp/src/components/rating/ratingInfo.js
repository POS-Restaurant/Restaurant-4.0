import React from 'react'


function RatingInfo({
    nameCourse,
    authorCourse,
    progressScore,
    imgCourse,
    callback = () => {}
}) {
    return (
        <div className="ratingInfo" >
            <div className="imgCourse" id="r1" style={{overflow: "hidden"}}>
                <img src={imgCourse} alt = "Course Img"  style={{height: "100px"}}></img>
            </div>
           <div id="r2">
                <div id="nameCourseRate">
                    <p>{nameCourse}</p>
                </div>
                <div id="authorCourseRate">
                    <p>{authorCourse} </p>
                </div>
                <div id="progressCourseRate">
                    <svg id="progressBarBaseRate" width="230" height="15">
                        <rect width="230" height="15" fill="#c4c4c4" />
                        <rect width={progressScore * 230 / 100} height="15" fill="#05611E" />
                    </svg>
                </div>
                <div className={progressScore === 0 ? "start" : "started"}>
                    <div id="progressStarted">
                        <p>{progressScore + "% COMPLETE"}</p>
                    </div>
                    <div id="progressStart">
                        <p>START COURSE</p>
                    </div>
                </div>
           </div>
        </div>
    )
}


export default RatingInfo;
