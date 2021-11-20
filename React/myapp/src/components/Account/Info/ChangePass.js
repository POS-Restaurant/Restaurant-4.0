import React, { Component, useState } from "react";
import { Input } from "reactstrap";
import style from "../Account.module.css";
import Button from "@mui/material/Button";

import { useRef } from "react";
import axios from 'axios';

function ChangePass(props) {
    // const oldPass = useRef();
    // const newPass = useRef();
    // const newConfirmPass = useRef();

    const [newPass, setNewPass] = useState("");
    const [oldPass, setoldPass] = useState("");
    const [newPassConfirm, setNewPassConfirm] = useState("");
    const [oldPassErr, setOldPassErr] = useState("");
    const [newPassErr, setNewPassErr] = useState("");

    function resetPassword(oldP, newP, newConfirm) {
        //kiem tra password cu, sai quang exception
        //kiem tra password moi va password confirm, sai quang exception
        //send update()
    }
    function onSubmit(event) {
        event.preventDefault();

        setOldPassErr("");
        setNewPassErr("");

        const oldP = oldPass;
        const newP = newPass;
        const newConfirm = newPassConfirm;

        const changePassReq = {
            oldPass: oldP,
            newPass: newP,
            newPassConfirm: newConfirm,
        };

        //send request to reset password
        axios.post("/change_pass", {id: localStorage.getItem("id"), newPassword: newP})

        console.log(changePassReq);
    }

    return (
        <div className={style.changePass}>
            <h1>Sửa mật khẩu</h1>
            <form className={style.changePassForm} onSubmit={onSubmit}>
                <div className={style.control}>
                    <label htmlFor="oldPass">Nhập mật khẩu cũ</label>
                    <Input
                        id="oldPass"
                        type="password"
                        innerRef={(input) => setoldPass(input)}
                        required
                        // ref={oldPass}
                    />
                    {oldPassErr && <span>oldPassErr</span>}
                </div>
                <div className={style.control}>
                    <label htmlFor="newPass">Nhập mật khẩu mới</label>
                    <Input
                        id="newPass"
                        type="password"
                        innerRef={(input) => setNewPass(input)}
                        required
                        // ref={newPass}
                    />
                </div>
                <div className={style.control}>
                    <label htmlFor="newConfirmPass">
                        Xác nhận mật khẩu mới
                    </label>
                    <Input
                        id="newConfirmPass"
                        type="password"
                        innerRef={(input) => setNewPassConfirm(input)}
                        required
                        // ref={newConfirmPass}
                    />
                    {newPassErr && <span>newPassErr</span>}
                </div>
                <input type="submit" />
                <div className={style.actions}>
                    {" "}
                    <Button
                        onClick={onSubmit}
                        className={style.changePassConfirm}
                        variant="contained"
                        size="large"
                    >
                        Sửa mật khẩu
                    </Button>
                </div>

            </form>

            <Button
                className={style.changePassCancel}
                onClick={props.cancelChange}
                variant="contained"
                size="large"
            >
                Hủy
            </Button>
        </div>
    );
}

export default ChangePass;
