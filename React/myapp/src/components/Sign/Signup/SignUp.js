
import { Input, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import sign from '../Sign.module.css'

function SignUp(props) {
    return (
        <div className={sign.Login}>
            <div className={sign.LoginForm}>
                <div>
                    <h1>Đăng ký</h1>
                    <div className={sign.field}>
                        <Row>
                            <label>Họ</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>
                    <div className={sign.field}>
                        <Row>
                            <label>Tên</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>
                    <div className={sign.field}>
                        <Row>
                            <label>Email</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>
                    <div className={sign.field}>
                        <Row>
                            <label>Nhập mật khẩu</label>
                        </Row>
                        <Input name="Phone" type="email" required />
                    </div>
                    <div className={sign.field}>
                        <Row>
                            <label>Xác nhận mật khẩu</label>
                        </Row>

                        <Input name="pwd" type="password" required />
                    </div>
                    <div className={sign.field}>
                        <Link to="/login">
                            <Button style={{cursor: 'pointer'}}>Đăng ký</Button>
                        </Link>
                    </div>
                    <div className={`${sign.field} ${sign.change}`}>
                        <Row>
                            <Link to="/login">
                                <Button className={sign.linkbutton} onClick={props.onLogin} style={{cursor: 'pointer'}}>Đã có tài khoản? Đăng nhập</Button>
                            </Link>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
