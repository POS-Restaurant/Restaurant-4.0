import React from 'react'
import styles from './EditMenu.module.css'

const FoodItem = (props) => {
    return (
        <div className= {styles.itemContainer}>
            <div className={styles.itemBody}>
                <img className={styles.itemPic} src={props.src} alt="FoodPicture" />               
                <div className={styles.itemInfo}>
                    <div className={styles.itemName}>{props.name}</div>
                    <div className={styles.itemCharInfo} > <span className={styles.itemLabelInfo}>Protein: </span> {props.rotein}</div>
                    <div className={styles.itemCharInfo} > <span className={styles.itemLabelInfo}>Material: </span> {props.material}</div>
                    <div className={styles.itemCharInfo} > <span className={styles.itemLabelInfo}>Decoration: </span> {props.decoration}</div>
                    
                    <div className={styles.itemPrice} >{props.price}đ</div>
                </div>

                
            </div>
            <button onClick={props.onClick} className={`${styles.btn} ${styles.btn1}`} >Chỉnh sửa</button>

        </div>
    )
}

export default FoodItem
