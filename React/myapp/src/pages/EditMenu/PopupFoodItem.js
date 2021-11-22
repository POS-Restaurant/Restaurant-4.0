import React from 'react'
import styles from './EditMenu.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import axios from 'axios';
import { useState } from 'react';

const PopupFoodItem = (props) => {
    const _id = localStorage.getItem("currentFood");
    const [des, setdes] = useState(props.descriptrion);
    const [name, setname] = useState(props.name);
    const [price, setprice] = useState(props.price);
    const deleteFood = () => {
        axios.post('http://localhost:3000/Food/delete/food', {
            params: { id: _id, descriptrion: des, name: name, price: price }
        }).then(
            res => alert(res.data.msg)
            );          
    };
    const update = () => {
    axios.post('http://localhost:3000/Food/edit/food', {
        params: { id: _id, name: name, description:des,price:price}
    }).then(
        res => alert(res.data.msg)
            )   
    }
return (props.trigger) ? (
    <div className={styles.popupContainer}>
        <div className={styles.popupHeader}>
            <p className={styles.popupHeaderLabel}>Chỉnh sửa món ăn</p>
            <button className={styles.popupHeaderButton} onClick={props.Cancel}> <AiOutlineCloseCircle /> </button>
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
                        <input className={styles.popupBodyInfoFormEleInput} innerRef={(input) => setname(input.value)} ></input>
                    </div>
                    <div className={styles.popupBodyInfoFormEle}>
                        <label className={styles.popupBodyInfoFormEleLabel}>Mô tả:</label>
                        <input className={styles.popupBodyInfoFormEleInput} innerRef={(input) => setdes(input.value)}></input>
                    </div>
                    <div className={styles.popupBodyInfoFormEle}>
                        <label className={styles.popupBodyInfoFormEleLabel}>Giá:</label>
                        <input className={styles.popupBodyInfoFormEleInput} innerRef={(input) => setprice(input.value)}></input>
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
            {(props.type==="update")&&<button onClick={deleteFood} className={`${styles.btn} ${styles.btn2}`}>Xóa món ăn</button>}
            {(props.type==="update")&&<button onClick={update} className={`${styles.btn} ${styles.btn3}`}>Xác nhận chỉnh sửa</button>}
            {(props.type==="add")&&<button onClick={update} className={`${styles.btn} ${styles.btn3}`}>Thêm món ăn</button>}
        </div>
    </div>
) : "";
}

export default PopupFoodItem
