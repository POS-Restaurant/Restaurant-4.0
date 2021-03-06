// import React, { Component } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import styled from "styled-components";
import { Input, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import sign from "../Sign.module.css";

function ForgetPass(props) {
    return (
        <div className={sign.Login}>
            <div className={sign.LoginForm}>
                <div>
                    <h1>Quên mật khẩu</h1>
                    <div className={sign.field}>
                        <Row>
                            <label>Nhập email</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>

                    <div className={`${sign.field} ${sign.btn}`}>
                        <Button style={{ cursor: "pointer" }}>
                            Gửi mã xác nhận
                        </Button>
                    </div>

                    <div className={sign.field}>
                        <Row>
                            <label>Nhập mã xác nhận</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>

                    <div className={`${sign.field} ${sign.btn}`}>
                        {/* <Link to="/forgetchangepass"> */}
                            <Button
                                style={{ cursor: "pointer" }}
                                onClick={props.onChange}
                            >
                                Đổi mật khẩu
                            </Button>
                        {/* </Link> */}
                    </div>

                    <div className={`${sign.field} ${sign.change}`}>
                        <Row>
                            <Link
                                to="/login"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    style={{ cursor: "pointer" }}
                                    className={sign.linkbutton}
                                    onClick={props.onLogin}
                                >
                                    Đăng nhập
                                </Button>
                            </Link>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ForgetPass;
