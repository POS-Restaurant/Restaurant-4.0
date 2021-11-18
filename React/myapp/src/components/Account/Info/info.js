import { Button, Input } from "reactstrap";
import { React } from "react";
import account from "../Account.module.css";
import Sidebar from "../../Sidebar";

function Info({data, type}) {
    return (
        <div>
            <Sidebar type={type}/>
            <div className={account.UserInfo}>
                <h1>Thông tin tài khoản</h1>
                <div>
                    <div className={`${account.MainContent} ${account.info}`}>
                        <div className={account.infoInsideContent}>
                            <div className={account.field}>
                                <label>Họ tên</label>
                                <Input style={{cursor: 'pointer'}}
                                    name="Name"
                                    type="text"
                                    defaultValue={data.name}
                                    required
                                />
                            </div>
                            <div className={account.field}>
                                <label>Số điện thoại</label>
                                <Input style={{cursor: 'pointer'}}
                                    name="Phone"
                                    type="text"
                                    defaultValue={data.phone}
                                    required
                                />
                            </div>
                            <div className={account.field}>
                                <label>Email</label>

                                <Input style={{cursor: 'pointer'}}
                                    name="email"
                                    type="email"
                                    defaultValue={data.mail}
                                />
                            </div>
                            <div className={account.field}>
                                <label>Ngày sinh</label>

                                <Input style={{cursor: 'pointer'}}
                                    name="bdate"
                                    type="date"
                                    defaultValue={data.bdate}
                                />
                            </div>
                            <div className={account.field}>
                                <label>Giới tính</label>
                                <div className={account.inputGender}>
                                    <div className={account.selectGender}>
                                        <Input
                                            style={{cursor: 'pointer'}}
                                            className={account.gender}
                                            name="gender"
                                            type="radio"
                                            checked
                                        />
                                        <span>Nam</span>
                                    </div>
                                    <div className={account.selectGender}>
                                        <Input
                                            style={{cursor: 'pointer'}}
                                            className={account.gender}
                                            name="gender"
                                            type="radio"
                                        />
                                        <span>Nữ</span>
                                    </div>
                                    <div className={account.selectGender}>
                                        <Input
                                            style={{cursor: 'pointer'}}
                                            className={account.gender}
                                            name="gender"
                                            type="radio"
                                        />
                                        <span>Khác</span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                style={{cursor: 'pointer'}}
                                className={`${account.changeInfo} ${account.update}`}
                            >
                                Cập nhật thông tin
                            </Button>
                            <Button
                                style={{cursor: 'pointer'}}
                                className={`${account.changePassword} ${account.update}`}
                            >
                                Sửa mật khẩu
                            </Button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}
export default Info;
