// import React, { Component } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import styled from "styled-components";
import { Input, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import sign from "../Sign.module.css";
import {typeUser} from './prelogin';
function Login(props) {
    function handleUserType(Utype) {
        if (Utype === 0) {
            return "customer";
        } else if (Utype === 1) {
            return "chef";
        } else if (Utype === 2) {
            return "manager";
        } else {
            return "admin";
        }
    }
    let type=handleUserType(typeUser)
    return (
        <div className={sign.Login}>
            <div className={sign.Login}>
                <div className={sign.LoginForm}>
                    <div className={sign.logContent}>
                        <h1>Đăng Nhập</h1>
                        <div className={sign.field}>
                            <Row>
                                <label>Email</label>
                            </Row>
                            <Input name="Phone" type="email" required />
                        </div>
                        <div className={sign.field}>
                            <div>
                                <div className={sign.col}>
                                    <label>Mật khẩu</label>
                                </div>
                                <div className={sign.col}>
                                    <Link to={"/forgetpass"} >
                                        <Button
                                            className={`${sign.linkbutton} ${sign.switchForget}`}
                                            onClick={props.onForget}
                                            style={{cursor: 'pointer'}}
                                        >
                                            Quên mật khẩu
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <Input name="pwd" type="password" required />
                        </div>
                        <div className={sign.field}>
                            <Link to={"/"+type+"/overview"}>
                                <Button onClick={props.onQuit} style={{cursor: 'pointer'}}>
                                    Đăng nhập
                                </Button>
                            </Link>
                        </div>
                        <div className={`${sign.field} ${sign.change}`}>
                            <Row className={sign.ask}>
                                <Link to={"/signup"}>
                                <label>Chưa có tài khoản?</label>
                                <Button className={sign.linkbutton} onClick={props.onSignup} style={{cursor: 'pointer'}}>
                                    Đăng ký
                                </Button>
                                </Link>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
