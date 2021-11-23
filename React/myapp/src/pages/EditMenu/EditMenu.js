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
import Button from "@mui/material/Button";

function EditMenu() {
    const [ButtonPopup, setButtonPopup] = useState(false);
    const [searchtxt, setTxt] = useState("");
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState([]);
    const [init, setInit] = useState(true);
    const checkData = async () => {
        await axios.get('http://localhost:3000/Food/get/menu', { params: { id: localStorage.getItem("currentRes") } }).then(res => {
            setData(res.data.result);
        }
        ).then(()=>setDisplay(data));
    }
    useEffect(() => {
        setTimeout(() => {
            if (init) {
                setInit(false);
                checkData();
            }
        }, 100);
    }, []);
    const search = () => {
        setDisplay(data.filter((food) => food.name.includes(searchtxt)))
    }
    const
        searchKind = (type) => {
            setDisplay(data.filter((food) => food.kind === type));
        }
    const foodItems = (display) ? display.map(e => (
        <FoodItem id={e.id} name={e.name} src={e.img+'.png'} price={e.price} protein={e.protein} material={e.material} decoration={e.decoration} />
    )) : <div />;

    return (
        <div>
            <Sidebar type={2} />
            <div className={styles.container}>
                <div className={styles.topbar}>
                    <span className={styles.topbarLabel}>Chỉnh sửa menu</span>
                    <div>
                        <Input style={{ height: 46, width: 500}} type="text" name="searchFood" className={styles.searchBar} placeholder="Tìm kiếm"
                            onChange={(e) => {
                                setTxt(e.target.value)
                            }} />
                        <FaSearch className={styles.searchIcon} onClick={(e)=> search()} />
                    </div>
                </div>
                <div className={styles.filter}>
                    <Button className={`${styles.btn} ${styles.category}`} onClick={(e) => setDisplay(data)}>Tất cả</Button>
                    <Button className={`${styles.btn} ${styles.category}`} onClick={(e) => searchKind("Food")} >Món ăn</Button>
                    <Button className={`${styles.btn} ${styles.category}`} onClick={(e) => searchKind("Drink")}>Thức uống</Button>
                    <Button className={`${styles.btn} ${styles.category}`} onClick={(e) => searchKind("Combo")}>Combo</Button>
                </div>
                <div className={styles.foodsList}>
                    <Button  onClick={() => setButtonPopup(true)}  className={`${styles.itemContainer} ${styles.itemContainer1}`}>
                        <AiOutlinePlusCircle className={styles.itemIcon} />
                        <p className={styles.addItemLabel} >Thêm món mới</p>
                    </Button>

                    {foodItems}
                </div>
                {ButtonPopup&&<PopupFoodItem type="add" onCancel={()=>setButtonPopup(false)} img={BanhNgot} />}
            </div>
        </div>

    );
}

export default EditMenu
