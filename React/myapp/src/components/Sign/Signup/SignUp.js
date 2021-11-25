
import { Input, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import sign from '../Sign.module.css'
import { useState } from "react";
import { Card } from "reactstrap";
import { Modal } from 'reactstrap';
import axios from 'axios';

import { Route, NavLink } from 'react-router-dom';

    function SignUp(props) {
        const [lname, setLname] = useState('')
        const [fname, setFname] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [popup, setPopup] = useState(false);
        const togglePopup = () => {
            setPopup(!popup);
        }
        const [msg,setMsg]=useState("");
        function onSubmit(event) {
            event.preventDefault();
            axios.post("http://localhost:3000/Client/register", {
                params: {
                    email: email.value, pwd: password.value,
                    name: lname.value + fname.value,
                    userType:"Customer",
                }
            }).then((res) => {
                setMsg(res.data.msg);
                    setPopup(true);
            });

        }
        return (
            <div className={sign.Login}>
                <div className={sign.LoginForm}>
                    <div>
                        <h1>Đăng ký</h1>
                        <div className={sign.field}>
                            <Row>
                                <label>Họ</label>
                            </Row>
                            <Input name="Phone" type="email" innerRef={(input) => setLname(input)} required />
                        </div>
                        <div className={sign.field}>
                            <Row>
                                <label>Tên</label>
                            </Row>
                            <Input name="Phone" type="email" innerRef={(input) => setFname(input)} required />
                        </div>
                        <div className={sign.field}>
                            <Row>
                                <label>Email</label>
                            </Row>
                            <Input name="Phone" type="email" innerRef={(input) => setEmail(input)} required />
                        </div>
                        <div className={sign.field}>
                            <Row>
                                <label>Nhập mật khẩu</label>
                            </Row>
                            <Input name="Phone" type="email" innerRef={(input) => setPassword(input)} required />
                        </div>
                        {/* <div className={sign.field}>
                        <Row>
                            <label>Xác nhận mật khẩu</label>
                        </Row>

                        <Input name="pwd" type="password" required />
                    </div> */}
                        <div className={sign.field}>
                            {/* <Link to="/login"> */}
                            <Button onClick={onSubmit} style={{ cursor: 'pointer' }}>Đăng ký</Button>
                            {/* </Link> */}
                        </div>
                        <div className={`${sign.field} ${sign.change}`}>
                            <Row>
                                <Link to="/login">
                                    <Button className={sign.linkbutton} onClick={props.onLogin} style={{ cursor: 'pointer' }}>Đã có tài khoản? Đăng nhập</Button>
                                </Link>
                            </Row>
                        </div>
                    </div>
                </div>
                <Modal isOpen={popup} toggle={togglePopup}>
                    <Card>{msg}
                    </Card>
                    {/* <NavLink to='/login'>
                        Đăng nhập ngay
                    </NavLink> */}
                </Modal>
            </div>
        );
    }
export default SignUp;
