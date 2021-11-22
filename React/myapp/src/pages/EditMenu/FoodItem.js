import React, { useState }from 'react'
import styles from './EditMenu.module.css'
import PopupFoodItem from "./PopupFoodItem";
import BanhNgot from '../../imageFood/BanhNgot.jpg';
import Button from "@mui/material/Button";
const FoodItem = (props) => {
    const [popUp, setPopUp] = useState(false);
    // const [buttonPopup, setButtonPopup] = useState(false);
    localStorage.setItem("currentFood", props.id);
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemBody}>
                <img className={styles.itemPic} src={props.src} alt="FoodPicture" />
                <div className={styles.itemInfo}>
                    <div className={styles.itemName}>{props.name}</div>
                    <div className={styles.itemCharInfo} > <span className={styles.itemLabelInfo}>Protein: </span> {props.protein}</div>
                    <div className={styles.itemCharInfo} > <span className={styles.itemLabelInfo}>Material: </span> {props.material}</div>
                    <div className={styles.itemCharInfo} > <span className={styles.itemLabelInfo}>Decoration: </span> {props.decoration}</div>

                    <div className={styles.itemPrice} >{props.price}đ</div>
                </div>
            </div>
            <Button variant="contained" onClick={()=>setPopUp(true)} className={`${styles.btn} ${styles.btn1}`} >Chỉnh sửa</Button>
            {popUp && <PopupFoodItem type="update" onCancel={()=>setPopUp(false)} />}
        </div>
    )
}

export default FoodItem
