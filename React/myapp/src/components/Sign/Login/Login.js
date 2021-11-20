// import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import styled from "styled-components";
import { Input, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import sign from "../Sign.module.css";
import { typeUser } from "./prelogin";
import { useState } from "react";
import axios from "axios";
function Login(props) {
    const [id, setId] = useState("");
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit(event) {
        event.preventDefault();
        axios.get("http://localhost:3000/Client/username").then((res) => {
            localStorage.setItem("id", res.data._id);
            console.log(localStorage.getItem("id"));
        });
    }

    let type = handleUserType(typeUser);
    if (localStorage.getItem("id")) {
        return (
            <Switch>
                <Redirect to={"/" + type + "/overview"} />
            </Switch>
        );
    } else
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
                                <Input
                                    name="Phone"
                                    type="email"
                                    innerRef={(input) => setEmail(input)}
                                    required
                                />
                            </div>
                            <div className={sign.field}>
                                <div>
                                    <div className={sign.col}>
                                        <label>Mật khẩu</label>
                                    </div>
                                    <div className={sign.col}></div>
                                </div>
                                <Input
                                    name="pwd"
                                    type="password"
                                    innerRef={(input) => setPassword(input)}
                                    required
                                />
                            </div>
                            <div className={sign.field}>
                                {/* <Link to={"/" + type + "/overview"}> */}
                                <Button
                                    onClick={onSubmit}
                                    style={{ cursor: "pointer" }}
                                >
                                    Đăng nhập
                                </Button>
                                {/* </Link> */}
                            </div>
                            <div className={`${sign.field} ${sign.change}`}>
                                <Row className={sign.ask}>
                                    <Link to={"/forgetpass"}>
                                        <Button
                                            className={`${sign.linkbutton} ${sign.switchForget}`}
                                            onClick={props.onForget}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Quên mật khẩu
                                        </Button>
                                    </Link>
                                    <Link to={"/signup"}>
                                        <Button
                                            className={sign.linkbutton}
                                            onClick={props.onSignup}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Chưa có tài khoản? Đăng ký
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
