import React, { useState } from "react";
import styles from './EditMenu.module.css'
import FoodItem from "./FoodItem";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import PopupFoodItem from "./PopupFoodItem";
import Sidebar from "../../components/Sidebar";
import BanhNgot from '../../imageFood/BanhNgot.jpg';
import { FoodOrdData } from "../FoodData";
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'; import { Input } from "reactstrap";
import { useEffect } from "react";


function EditMenu() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [searchtxt, setTxt] = useState("");
    const [data, setData] = useState(FoodOrdData);
    const [display, setDisplay] = useState(FoodOrdData.food_list);
    const [init, setInit] = useState(true);
    // const checkData = async () => {
    //     await axios.get('http://localhost:3000/Food/get/menu', { params: { id: localStorage.getItem("currentRes") } }).then(res => {
    //         setData(res.data.result);
    //         setDisplay(res.data.result);
    //     }
    //     );
    // }
    // useEffect(() => {
    //     setTimeout(() => {
    //         if (init) {
    //             setInit(false);
    //             checkData();

    //         }
    //     }, 1000);
    // }, []);
    const search = () => {
        setDisplay(data.filter((food) => food.name.includes(searchtxt)))
    }
    const
        searchKind = (type) => {
            setDisplay(data.filter((food) => food.kind === type));
        }
    const foodItems = (display) ? display.map(e => (
        <FoodItem id={e.id} name={e.name} src={e.img} price={e.price} protein={e.protein} material={e.material} decoration={e.decoration} />
    )) : <div />;

    return (
        <div>
            <Sidebar type={2} />
            <div className={styles.container}>
                <div className={styles.topbar}>
                    <span className={styles.topbarLabel}>Chỉnh sửa menu</span>
                    <div>
                        <Input style={{ height: 46, width: 500 }} type="text" name="searchFood" className={styles.searchBar} placeholder="Tìm kiếm"
                            onChange={(e) => {
                                setTxt(e.target.value)
                            }} />
                        <FaSearch className={styles.searchIcon} onClick={search} />
                    </div>
                </div>
                <div className={styles.filter}>
                    <button className={styles.btn} onClick={(e) => setDisplay(data)}>Tất cả</button>
                    <button className={styles.btn} onClick={(e) => searchKind("Food")} >Món ăn</button>
                    <button className={styles.btn} onClick={(e) => searchKind("Drink")}>Thức uống</button>
                    <button className={styles.btn} onClick={(e) => searchKind("Combo")}>Combo</button>
                </div>
                <div className={styles.foodsList}>
                    <div className={`${styles.itemContainer} ${styles.itemContainer1}`}>
                        <AiOutlinePlusCircle className={styles.itemIcon} onClick={() => setButtonPopup(true)} />
                        <p className={styles.addItemLabel} onClick={() => setButtonPopup(true)} >Thêm món mới</p>
                    </div>

                    {foodItems}
                </div>
                <PopupFoodItem type="add" trigger={buttonPopup} setTrigger={setButtonPopup} img={BanhNgot} />
            </div>
        </div>

    );
}

export default EditMenu
