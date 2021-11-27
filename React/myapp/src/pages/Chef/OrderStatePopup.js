import React from "react";
import chef from "./Chef.module.css";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
function OrderStatePopup(props) {
    const _id = localStorage.getItem("currentOrder");
    const [state, setState] = useState("Pending");
    const [timeDone, setTimeDone] = useState("");
    const [refund, setRefund] = useState(props.customer.money);
    const [statusButton, setstatusButton] = useState("");
    const [confirmPopup, setconfirmPopup] = useState(false);
    const update = async () => {
        await axios.post("http://localhost:3000/Order/update/state", {
            params: { id: _id, state: state, dateOfReceipt: timeDone },
        });
        await axios.post("http://localhost:3000/Client/update/money", {
            params: { id: props.customer._id, money: refund },
        });

        // .then((res) => alert(res.data.msg));
    };

    function confirmPopupHandler(status) {
        setState(status);
        if (status === "Done") setstatusButton("Hoàn thành");
        else if (status === "Canceled") setstatusButton("Hủy đơn");
        else if (status === "Doing") setstatusButton("Nhận đơn");
        setconfirmPopup(true);
    }

    function confirmUpdateTimeDone() {
        setTimeDone(Date());
    }
    function confirmUpdateRefund(total) {
        setRefund(total);
    }

    const onConfirmHandler = async (status) => {
        await setconfirmPopup(false);
        await update();
        await props.onChooseState(status);
    };
    function onCancelHandler() {
        setconfirmPopup(false);
    }
    function ConfirmState(props) {
        return (
            <div className={chef.ConfirmState}>
                <span className={chef.confirmTitle}>
                    Xác nhận "{props.status}"
                </span>
                <Button
                    onClick={props.onConfirm}
                    className={chef.confirmStateButton}
                >
                    Xác nhận
                </Button>
                <Button
                    onClick={props.onCancel}
                    className={chef.cancelStateButton}
                >
                    Hủy
                </Button>
            </div>
        );
    }
    return (
        <div className={chef.orderStatePopup}>
            {props.currentStatus === "Pending" && (
                <Button
                    onClick={() => confirmPopupHandler("Doing")}
                    className={chef.acceptOrder}
                >
                    Nhận đơn
                </Button>
            )}

            {props.currentStatus === "Doing" && (
                <Button
                    onClick={() => {
                        confirmPopupHandler("Done");
                        confirmUpdateTimeDone();
                    }}
                    className={chef.finishOrder}
                >
                    Hoàn thành
                </Button>
            )}

            {(props.currentStatus === "Pending" ||
                props.currentStatus === "Doing") && (
                <Button
                    onClick={() => {
                        confirmPopupHandler("Canceled");
                        confirmUpdateRefund(refund + props.total);
                    }}
                    className={chef.cancelOrder}
                >
                    Hủy đơn
                </Button>
            )}
            {confirmPopup && (
                <ConfirmState
                    status={statusButton}
                    onConfirm={onConfirmHandler}
                    onCancel={onCancelHandler}
                />
            )}
        </div>
    );
}

export default OrderStatePopup;
