import { Input } from "reactstrap";
import { React, useState } from "react";
import account from "../Account.module.css";
import Sidebar from "../../Sidebar";
import ChangePass from "./ChangePass";
import Button from "@mui/material/Button";

function Info({ data, type }) {
    const [changePass, setChangePass] = useState(false);
    const changePassHandler = () => {
        // gui request thay doi mat khau
        setChangePass(false);
    };
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
                                <Input
                                    style={{ cursor: "pointer" }}
                                    name="Name"
                                    type="text"
                                    defaultValue={data.name}
                                    required
                                />
                            </div>
                            <div className={account.field}>
                                <label>Số điện thoại</label>
                                <Input
                                    style={{ cursor: "pointer" }}
                                    name="Phone"
                                    type="text"
                                    defaultValue={data.phone}
                                    required
                                />
                            </div>
                            <div className={account.field}>
                                <label>Email</label>

                                <Input
                                    style={{ cursor: "pointer" }}
                                    name="email"
                                    type="email"
                                    defaultValue={data.mail}
                                />
                            </div>
                            <div className={account.field}>
                                <label>Ngày sinh</label>

                                <Input
                                    style={{ cursor: "pointer" }}
                                    name="bdate"
                                    type="date"
                                    defaultValue={data.bdate}
                                />
                            </div>
                            <div className={account.field}>
                                <label>Giới tính</label>
                                <div className={account.genderValue}>
                                    <div className={account.inputGender}>
                                        <div className={account.selectGender}>
                                            <Input
                                                // style={{ cursor: "pointer" }}
                                                className={account.gender}
                                                name="gender"
                                                type="radio"
                                                checked
                                            />
                                            <span>Nam</span>
                                        </div>
                                        <div className={account.selectGender}>
                                            <Input
                                                // style={{ cursor: "pointer" }}
                                                className={account.gender}
                                                name="gender"
                                                type="radio"
                                            />
                                            <span>Nữ</span>
                                        </div>
                                        <div className={account.selectGender}>
                                            <Input
                                                // style={{ cursor: "pointer" }}
                                                className={account.gender}
                                                name="gender"
                                                type="radio"
                                            />
                                            <span>Khác</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button variant="contained"
                                style={{ cursor: "pointer", fontSize: "14px" }}
                                className={`${account.changeInfo} ${account.update}`}
                            >
                                Cập nhật thông tin
                            </Button>
                            <Button variant="contained"
                                style={{ cursor: "pointer",  fontSize: "14px" }}
                                className={`${account.changePassword} ${account.update}`}
                                onClick={() => setChangePass(true)}
                            >
                                Sửa mật khẩu
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* {changePass && <ChangePass confirmChange={changePassHandler} cancelChange={()=>setChangePass(false)}/>} */}
        </div>
    );
}
export default Info;
