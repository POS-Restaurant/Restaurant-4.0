import React from 'react'
import styles from './EditMenu.module.css'

const FoodItem = ({name,src,price,protein,material,decoration,onClick}) => {
    return (
        <div className= {styles.itemContainer}>
            <div className={styles.itemBody}>
                <img className={styles.itemPic} src={src} alt="FoodPicture" />               
                <div className={styles.itemInfo}>
                    <div className={styles.itemName}>{name}</div>
                    <div className={styles.itemCharInfo} > <span className={styles.itemLabelInfo}>Protein: </span> {protein}</div>
                    <div className={styles.itemCharInfo} > <span className={styles.itemLabelInfo}>Material: </span> {material}</div>
                    <div className={styles.itemCharInfo} > <span className={styles.itemLabelInfo}>Decoration: </span> {decoration}</div>
                    
                    <div className={styles.itemPrice} >{price}đ</div>
                </div>

                
            </div>
            <button onClick={onClick} className={`${styles.btn} ${styles.btn1}`} >Chỉnh sửa</button>

        </div>
    )
}

export default FoodItem
