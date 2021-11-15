import React from 'react'
import styles from './EditMenu.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'


const PopupFoodItem = (props) => {
    return (props.trigger) ? (
        <div className={styles.popupContainer}>
            <div className={styles.popupHeader}>
                <p className={styles.popupHeaderLabel}>Chỉnh sửa món ăn</p>
                <button className={styles.popupHeaderButton} onClick={() => props.setTrigger(false)}> <AiOutlineCloseCircle /> </button>
            </div>
            <div className={styles.popupBody}>
                <div className={styles.popupBodyPicture}>
                    <img className={styles.popupBodyPicturePic} src={props.img}></img>
                    <button className={`${styles.btn} ${styles.popupBodyPictureButton}`} ><BiEditAlt /></button>
                </div>
                <div className={styles.popupBodyInfo}>
                    <div className={styles.popupBodyInfoForm}>
                        <div className={styles.popupBodyInfoFormEle}>
                            <label className={styles.popupBodyInfoFormEleLabel}>Tên:</label>
                            <input className={styles.popupBodyInfoFormEleInput}></input>
                        </div>
                        <div className={styles.popupBodyInfoFormEle}>
                            <label className={styles.popupBodyInfoFormEleLabel}>Mô tả:</label>
                            <input className={styles.popupBodyInfoFormEleInput}></input>
                        </div>
                        <div className={styles.popupBodyInfoFormEle}>
                            <label className={styles.popupBodyInfoFormEleLabel}>Giá:</label>
                            <input className={styles.popupBodyInfoFormEleInput}></input>
                        </div>
                    </div>
                    <div className={styles.popupBodyInfoCheck}>
                        <p className={styles.popupBodyInfoCheckName}>Trạng thái:</p>
                        <div className={styles.popupBodyInfoCheckBlock}>
                            <label className={styles.popupBodyInfoCheckLabel}>Sẵn sàng
                                <input type="checkbox" />
                                <span className={styles.popupBodyInfoCheckLabelName} ></span>
                            </label>
                            <label className={styles.popupBodyInfoCheckLabel}>Hết hàng
                                <input type="checkbox" />
                                <span className={styles.popupBodyInfoCheckLabelName} ></span>
                            </label>
                            <label className={styles.popupBodyInfoCheckLabel}>Ẩn
                                <input type="checkbox" />
                                <span className={styles.popupBodyInfoCheckLabelName} ></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.popupFooter}>
                <button className={`${styles.btn} ${styles.btn2}`}>Xóa món ăn</button>
                <button className={`${styles.btn} ${styles.btn3}`}>Xác nhận chỉnh sửa</button>
            </div>
        </div>
    ) : "";
}

export default PopupFoodItem
