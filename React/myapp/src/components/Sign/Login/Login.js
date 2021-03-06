// import React, { Component } from "react";
// import { Switch, Router, Redirect } from "react-router-dom";
// import styled from "styled-components";
import { Input, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import sign from "../Sign.module.css";
import axios from "axios";
import { Route } from "react-router";
import { Switch } from "react-router";
import { Router } from "react-router";
import { Redirect } from "react-router";
import { Modal } from "reactstrap";
// import { typeUser } from "./prelogin";
import { useState } from "react";
import OverviewCustomer from "../../../pages/OverView/Overview";
import { OverviewManager } from "../../../pages/OverView/Overview";
import { OverviewChef } from "../../../pages/OverView/Overview";

function Login(props) {
    const [email, setEmail] = useState("");
    const [pwd, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [popup, setPopup] = useState(false);
    // var popup=false;
    function onSubmit(event) {
        axios
            .get("http://localhost:3000/Client/login", {
                params: {
                    _email: email.value,
                    _pwd: pwd.value,
                },
            })
            .then((res) => {
                if (res.data) {
                    localStorage.setItem("id", res.data._id);
                    console.log(localStorage.getItem("id"));
                    setUserType(res.data.userType);
                } else setPopup(true);
            });
    }

    if (localStorage.getItem("id")) {
        var path =
            userType == "Customer"
                ? "/customer/overview"
                : userType == "Manager"
                ? "/manager/overview"
                : "/chef/overview";
        return (
            <Switch>
                <Route
                    path="/customer/overview"
                    exact
                    component={OverviewCustomer}
                />
                <Route
                    path="/manager/overview"
                    exact
                    component={OverviewManager}
                />
                <Route path="/chef/overview" exact component={OverviewChef} />
                <Redirect to={path} />
            </Switch>
        );
    }

    return (
        <div className={sign.Login}>
            <div className={sign.Login}>
                <div className={sign.LoginForm}>
                    <div className={sign.logContent}>
                        <h1>????ng Nh???p</h1>
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
                                    <label>M???t kh???u</label>
                                </div>
                                <div className={sign.col}></div>
                                <Input
                                    name="pwd"
                                    type="password"
                                    innerRef={(input) => setPassword(input)}
                                    required
                                />
                            </div>

                            <div className={`${sign.field} ${sign.btn}`}>
                                <Button
                                    onClick={onSubmit}
                                    style={{ cursor: "pointer" }}
                                >
                                    ????ng nh???p
                                </Button>
                            </div>
                            <div className={`${sign.field} ${sign.change}`}>
                                <Row className={sign.ask}>
                                    <Link to={"/forgetpass"}>
                                        <Button
                                            className={`${sign.linkbutton} ${sign.switchForget}`}
                                            onClick={props.onForget}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Qu??n m???t kh???u
                                        </Button>
                                    </Link>
                                    <Link to={"/signup"}>
                                        <Button
                                            className={sign.linkbutton}
                                            onClick={props.onSignup}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Ch??a c?? t??i kho???n? ????ng k??
                                        </Button>
                                    </Link>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                className={sign.errPopup}
                isOpen={popup}
                toggle={(e) => setPopup(!popup)}
            >
                <div onClick={()=>setPopup(false)} className={sign.closeBtn}>
                    <span class="material-icons">close</span>
                </div>
                <span className={sign.message}>????ng nh???p th???t b???i</span>
            </Modal>
        </div>
    );
}
export default Login;
