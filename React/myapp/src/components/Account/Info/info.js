import { Input } from "reactstrap";
import { React, useState } from "react";
import account from "../Account.module.css";
import Sidebar from "../../Sidebar";
import ChangePass from "./ChangePass";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Card } from "reactstrap";
import { Modal } from 'reactstrap';
import axios from 'axios';
import { useEffect } from "react";
function Info(type) {
    const [changePass, setChangePass] = useState(false);
    const [_name, setName] = useState("");
    const [_phone, setPhone] = useState("");
    const [_email, setEmail] = useState("");
    const [DoB, setDoB] = useState("");
    const [male, setMale] = useState(false);
const [edit,setEdit]=useState(true);
    const [popup, setPopup] = useState(false);
    const togglePopup = () => {
        setPopup(!popup);
    }
    const [msg, setMsg] = useState("");
    const changePassHandler = () => {
        // gui request thay doi mat khau
        setChangePass(false);
    };
    const checkData = async () => {
        await axios.get('http://localhost:3000/Client/get/user', { params: { id: localStorage.getItem("id") } }).then(res => {
            console.log(res.data._id);
            console.log(res.data);
            setName(res.data.name);
            setPhone(res.data.phone);
            setEmail(res.data.email);
            setMale(res.data.sex === 0);
        }
        )
    };
    const submitUpdate =  () => {
        axios.post('http://localhost:3000/Client/update',
             {
                    _id: localStorage.getItem("id"), 
                    name: _name,
                   email: _email, 
                   sex: male ,phone: _phone,
                
            }).then(res => {
                setMsg(res.data.msg);
                togglePopup();
            }
            )
    };
    const [init, setInit] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            if (init) {
                setInit(false);
                checkData();
            }
        }, 1000);
    }, []);
    return (
        <div>
            <Sidebar type={type} />
            <div className={account.UserInfo}>
                <h1>Thông tin tài khoản</h1>

                <div>
                    <div className={`${account.MainContent} ${account.info}`}>
                        {changePass && (
                            <ChangePass
                                confirmChange={changePassHandler}
                                cancelChange={() => setChangePass(false)}
                            />
                        )}
                        <div className={account.infoInsideContent}>
                            <div className={account.field}>
                                <label>Họ tên</label>
                                <input
                                    // style={{ cursor: "pointer" }}
                                    name="Name"
                                    type="text"
                                    value={_name} onChange={(e)=>setName(e.target.value)}
                                    
                                    disabled={edit}

                                    required
                                />
                            </div>
                            <div className={account.field}>
                                <label>Số điện thoại</label>
                                <Input
                                    style={{ cursor: "pointer" }}
                                    name="Phone"
                                    type="text"
                                    value={_phone} onChange={(e)=>setPhone(e.target.value)} disabled={edit}

                                    required
                                />
                            </div>
                            <div className={account.field}>
                                <label>Email</label>

                                <Input
                                    style={{ cursor: "pointer" }}
                                    name="email"
                                    type="email"
                                    value={_email} onChange={(e)=>setEmail(e.target.value)}disabled={edit}

                                />
                            </div>
                            <div className={account.field}>
                                <label>Giới tính</label>
                                <div className={account.genderValue}>
                                    <div className={account.inputGender}>
                                        <div className={account.selectGender}>
                                            <Input
                                                style={{ cursor: "pointer" }}
                                                className={account.gender}
                                                name="gender"
                                                type="radio"
                                                // checked
                                                onClick={(e)=>setMale(1)}

                                            />
                                            <span>Nam</span>
                                        </div>
                                        <div className={account.selectGender}>
                                            <Input
                                                style={{ cursor: "pointer" }}
                                                className={account.gender}
                                                name="gender"
                                                type="radio"
                                                onClick={(e)=>setMale(0)}
                                            />
                                            <span>Nữ</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <Button variant="contained"
                                style={{ cursor: "pointer", fontSize: "14px" }}
                                className={`${account.changeInfo} ${account.update}`}
                                onClick={() => setEdit(!edit)}
                            >
                                Cập nhật thông tin
                            </Button>
                            <Button variant="contained"
                                style={{ cursor: "pointer", fontSize: "14px" }}
                                className={`${account.changeInfo} ${account.update}`}
                                onClick={() => submitUpdate()}
                            >
                                Xác nhận
                            </Button>
                            <Button variant="contained"
                                style={{ cursor: "pointer", fontSize: "14px" }}
                                className={`${account.changePassword} ${account.update}`}
                                onClick={() => setChangePass(true)}
                            >
                                Sửa mật khẩu
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={popup} toggle={togglePopup}>
                <Card>{msg}
                </Card>
                {/* <CardSubtitle> */}

                
                <NavLink to='/login'>
                    Đăng nhập ngay
                </NavLink>
                {/* </CardSubtitle> */}
            </Modal>
            {/* {changePass && <ChangePass confirmChange={changePassHandler} cancelChange={()=>setChangePass(false)}/>} */}
        </div>
    );
}
export default Info;
