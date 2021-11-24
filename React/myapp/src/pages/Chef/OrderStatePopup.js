import React from "react";
import chef from "./Chef.module.css";
import { useState } from "react";
import axios from "axios";

function OrderStatePopup(props) {
    const _id = localStorage.getItem("currentOrder");
    const [state, setState] = useState("Pending");
    const [timeDone, setTimeDone] = useState("");
    const [statusButton, setstatusButton] = useState("");
    const [confirmPopup, setconfirmPopup] = useState(false);
    const update = async () => {
        await axios.post("http://localhost:3000/Order/update/state", {
            params: { id: _id, state: state, dateOfReceipt: timeDone },
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

    function confirmUpdateTime() {
        setTimeDone(Date())
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
                    Xác nhận {props.status}
                </span>
                <button
                    onClick={props.onConfirm}
                    className={chef.confirmStateButton}
                >
                    Xác nhận
                </button>
                <button
                    onClick={props.onCancel}
                    className={chef.cancelStateButton}
                >
                    Hủy
                </button>
            </div>
        );
    }
    return (
        <div className={chef.orderStatePopup}>
            {props.currentStatus === "Pending" && (
                <button
                    onClick={() => confirmPopupHandler("Doing")}
                    className={chef.acceptOrder}
                >
                    Nhận đơn
                </button>
            )}

            {props.currentStatus === "Doing" && (
                <button
                    onClick={() => {confirmPopupHandler("Done"); confirmUpdateTime()}}
                    className={chef.finishOrder}
                >
                    Hoàn thành
                </button>
            )}

            {(props.currentStatus === "Pending" ||
                props.currentStatus === "Doing") && (
                <button
                    onClick={() => confirmPopupHandler("Canceled")}
                    className={chef.cancelOrder}
                >
                    Hủy đơn
                </button>
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
