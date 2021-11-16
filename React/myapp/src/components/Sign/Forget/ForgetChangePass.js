// import React, { Component } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import styled from "styled-components";
import { Input, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import sign from '../Sign.module.css'

function ForgetChangePass(props) {
    return (
        <div className={sign.Login}>
            <div className={sign.LoginForm}>
                <div>
                <h1>Thay mật khẩu</h1>
                    <div className={sign.field}>
                        <Row>
                            <label>Mật khẩu mới</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>
                    <div className={sign.field}>
                        <Row>
                            <label>Nhập lại mật khẩu mới</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>
                    <div className={sign.field}>
                        <Row>
                            <Link to='/forgetpass'>
                                <Button style={{cursor: 'pointer'}} onClick={props.onLogin}>Xác nhận</Button>
                            </Link>
                        </Row>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ForgetChangePass;
