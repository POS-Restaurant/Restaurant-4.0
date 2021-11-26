import React from "react";
import styles from "./EditMenu.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { Modal } from "reactstrap";

const PopupFoodItem = (props) => {
    const [id,setId]=useState("");
    const [material, setmaterial] = useState(props.descriptrion);
    const [name, setname] = useState(props.name);
    const [price, setprice] = useState(props.price);
    const [food,setFood]=useState({});
    const [init, setInit] = useState(true);
    const [msg,setMsg]=useState("");
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (init) {
                setInit(false);
                setFood(JSON.parse(localStorage.getItem("currentFood")));   
                setId(JSON.parse(localStorage.getItem("currentFood"))._id);
            }
        }, 100);
    }, []);
    const deleteFood = () => {
        
        // console.log(id);
        axios
            .post("http://localhost:3000/Food/delete/food", {
                params: {
                    _id: id,
                },
            })
            .then((res) => {setMsg(res.data.msg);props.onCancel();});
    };
    const update = () => {
        
        axios
            .post("http://localhost:3000/Food/edit/food", {
                params: { _id: id, name: name, material: material, price: price },
            }).then((res) => {setMsg(res.data.msg);props.onCancel()});
    };
    return (
        <div className={styles.popupContainer}>
            <div className={styles.backdrop}>
                <div className={styles.popupHeader}>
                    <p className={styles.popupHeaderLabel}>Chỉnh sửa món ăn</p>
                    <Button
                        className={`${styles.btn} ${styles.popupHeaderButton}`}
                        onClick={props.onCancel}
                        size="large"
                    >
                        <AiOutlineCloseCircle />
                    </Button>
                </div>
                <div className={styles.popupBody}>
                    <div className={styles.popupBodyPicture}>
                        <img
                            className={styles.popupBodyPicturePic}
                            src={food.src}
                        ></img>
                        <Button
                            size="large"
                            className={`${styles.btn} ${styles.popupBodyPictureButton}`}
                        >
                            <BiEditAlt />
                        </Button>
                    </div>
                    <div className={styles.popupBodyInfo}>
                        <div className={styles.popupBodyInfoForm}>
                            <div className={styles.popupBodyInfoFormEle}>
                                <label
                                    className={styles.popupBodyInfoFormEleLabel}
                                >
                                    Tên:
                                </label>
                                <input
                                    className={styles.popupBodyInfoFormEleInput}
                                    defaultValue={food.name} onChange={(e)=>setname(e.target.value)}
                                    
                                ></input>
                            </div>
                            <div className={styles.popupBodyInfoFormEle}>
                                <label
                                    className={styles.popupBodyInfoFormEleLabel}
                                >
                                    Nguyên liệu:
                                </label>
                                <input
                                    className={styles.popupBodyInfoFormEleInput}
                                    defaultValue={food.material} onChange={(e)=>setmaterial(e.target.value)}
                                ></input>
                            </div>
                            <div className={styles.popupBodyInfoFormEle}>
                                <label
                                    className={styles.popupBodyInfoFormEleLabel}
                                >
                                    Giá:
                                </label>
                                <input
                                    className={styles.popupBodyInfoFormEleInput}
                                    defaultValue={food.price} onChange={(e)=>setprice(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className={styles.popupBodyInfoCheck}>
                            <p className={styles.popupBodyInfoCheckName}>
                                Trạng thái:
                            </p>
                            <div className={styles.popupBodyInfoCheckBlock}>
                                <label
                                    className={styles.popupBodyInfoCheckLabel}
                                >
                                    Sẵn sàng
                                    <input type="checkbox" />
                                    <span
                                        className={
                                            styles.popupBodyInfoCheckLabelName
                                        }
                                    ></span>
                                </label>
                                <label
                                    className={styles.popupBodyInfoCheckLabel}
                                >
                                    Hết hàng
                                    <input type="checkbox" />
                                    <span
                                        className={
                                            styles.popupBodyInfoCheckLabelName
                                        }
                                    ></span>
                                </label>
                                <label
                                    className={styles.popupBodyInfoCheckLabel}
                                >
                                    Ẩn
                                    <input type="checkbox" />
                                    <span
                                        className={
                                            styles.popupBodyInfoCheckLabelName
                                        }
                                    ></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.popupFooter}>
                    {props.type === "update" && (
                        <Button
                            onClick={deleteFood}
                            className={`${styles.btn} ${styles.btn2}`}
                        >
                            Xóa món ăn
                        </Button>
                    )}
                    {props.type === "update" && (
                        <Button
                            onClick={update}
                            className={`${styles.btn} ${styles.btn3}`}
                        >
                            Xác nhận chỉnh sửa
                        </Button>
                    )}
                    {props.type === "add" && (
                        <Button
                            variant="contained"
                            onClick={update}
                            className={styles.btn}
                        >
                            Thêm món ăn
                        </Button>
                    )}
                </div>
            </div>
            <Modal
                className={styles.errPopup}
                isOpen={popup}
                toggle={(e) => setPopup(!popup)}
            >
                <div onClick={()=>setPopup(false)} className={styles.closeBtn}>
                    <span class="material-icons">close</span>
                </div>
                <span className={styles.message}>{msg}</span>
            </Modal>
        </div>
    );
};

export default PopupFoodItem;
