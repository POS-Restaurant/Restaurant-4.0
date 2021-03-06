import chef from "./Chef.module.css";
import OrderCard from "./OrderCard";
import Sidebar from "../../components/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

function ChefUI() {
    const [orders, setOrders] = useState([]);
    const [clients, setClients] = useState([]);
    const idRes = localStorage.getItem("currentRes");
    const [init, setInit] = useState(true);
    const checkData = async () => {
        await axios
            .get("http://localhost:3000/Order/get/list", {
                params: { id: idRes },
            })
            .then((res) => {
                setOrders(res.data.results);
            });
        await axios
            .get("http://localhost:3000/Client/get/list", {
                params: { id: idRes },
            })
            .then((res) => {
                setClients(res.data.results);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            if (init) {
                setInit(false);
                checkData();
            }
        }, 100);
    }, []);
    const searchInfoCus = (data, id) => {
        if (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i]._id === id) {
                    return data[i].name;
                }
            }
        }
    };
    const searchCus = (data, id) => {
        if (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i]._id === id) {
                    return data[i];
                }
            }
        }
    };
    const onChange = async () => {
        await axios
            .get("http://localhost:3000/Order/get/list", {
                params: { id: idRes },
            })
            .then((res) => {
                setOrders(res.data.results);
            });
        await axios
            .get("http://localhost:3000/Client/get/list", {
                params: { id: idRes },
            })
            .then((res) => {
                setClients(res.data.results);
            });
    };
    const [condition, setCondition] = useState("");
    const [activeAll, setActiveAll] = useState(true);
    const [activePending, setActivePending] = useState(false);
    const [activeDoing, setActiveDoing] = useState(false);
    const [activeDone, setActiveDone] = useState(false);
    const [activeCanceled, setActiveCanceled] = useState(false);
    var active = false;
    if (orders && orders.length > 0) active = true;

    function filterOrder(condition) {
        return (
            orders &&
            orders.length > 0 &&
            orders.filter((e) => {
                if (condition === "" || condition === e.state) return e;
            })
        );
    }
    return (
        <div>
            <Sidebar type={1} />
            <div class={chef.chef_ui}>
                <div className={chef.mainContent}>
                    {active ? (
                        <div className={chef.buttonBar}>
                            <Button
                                className={`${chef.btnAll} ${
                                    activeAll ? chef.active : chef.close
                                }`}
                                onClick={() => {
                                    setCondition("");
                                    setActiveAll(true);
                                    setActivePending(false);
                                    setActiveDoing(false);
                                    setActiveDone(false);
                                    setActiveCanceled(false);
                                }}
                            >
                                T???t c???
                            </Button>
                            <Button
                                className={`${chef.btnPending} ${
                                    activePending ? chef.active : chef.close
                                }`}
                                onClick={() => {
                                    setCondition("Pending");
                                    setActiveAll(false);
                                    setActivePending(true);
                                    setActiveDoing(false);
                                    setActiveDone(false);
                                    setActiveCanceled(false);
                                }}
                            >
                                ??ang ch???
                            </Button>
                            <Button
                                className={`${chef.btnDoing} ${
                                    activeDoing ? chef.active : chef.close
                                }`}
                                onClick={() => {
                                    setCondition("Doing");
                                    setActiveAll(false);
                                    setActivePending(false);
                                    setActiveDoing(true);
                                    setActiveDone(false);
                                    setActiveCanceled(false);
                                }}
                            >
                                ??ang th???c hi???n
                            </Button>
                            <Button
                                className={`${chef.btnDone} ${
                                    activeDone ? chef.active : chef.close
                                }`}
                                onClick={() => {
                                    setCondition("Done");
                                    setActiveAll(false);
                                    setActivePending(false);
                                    setActiveDoing(false);
                                    setActiveDone(true);
                                    setActiveCanceled(false);
                                }}
                            >
                                Ho??n th??nh
                            </Button>
                            <Button
                                className={`${chef.btnCancel} ${
                                    activeCanceled ? chef.active : chef.close
                                }`}
                                onClick={() => {
                                    setCondition("Canceled");
                                    setActiveAll(false);
                                    setActivePending(false);
                                    setActiveDoing(false);
                                    setActiveDone(false);
                                    setActiveCanceled(true);
                                }}
                            >
                                ???? h???y
                            </Button>
                        </div>
                    ) : (
                        <div className={chef.buttonBar}>
                            <Button className={chef.btnAll} disabled>
                                T???t c???
                            </Button>
                            <Button className={chef.btnPending} disabled>
                                ??ang ch???
                            </Button>
                            <Button className={chef.btnDoing} disabled>
                                ??ang th???c hi???n
                            </Button>
                            <Button className={chef.btnDone} disabled>
                                Ho??n th??nh
                            </Button>
                            <Button className={chef.btnCancel} disabled>
                                ???? h???y
                            </Button>
                        </div>
                    )}
                    <div className={chef.orderTable}>
                        <div
                            className={`${chef.orderListInfoBar} ${chef.orderCard}`}
                        >
                            <div className={chef.orderCardID}>M?? ????n</div>
                            <div className={chef.orderCardTime}>
                                Th???i gian ?????t
                            </div>
                            <div className={chef.orderCardName}>Ng?????i ?????t</div>
                            <div className={chef.orderCardPrice}>T???ng ti???n</div>
                            <div className={chef.orderCardStatus}>
                                Tr???ng th??i
                            </div>
                            <div className={chef.orderUpdateState}></div>
                        </div>
                        <div className={chef.orderList}>
                            {filterOrder(condition).length > 0 ? (
                                filterOrder(condition).map((order) => {
                                    return (
                                        <OrderCard
                                            key={order.id}
                                            id={order._id}
                                            time={order.dateOfPurchase}
                                            name={searchInfoCus(
                                                clients,
                                                order.customer
                                            )}
                                            customer={searchCus(
                                                clients,
                                                order.customer
                                            )}
                                            price={order.total}
                                            status={order.state}
                                            total={order.total}
                                            listFood={order.listFood}
                                            listNum={order.listNum}
                                            listNote={order.listNote}
                                            onChange={onChange}
                                        />
                                    );
                                })
                            ) : (
                                <div className={chef.exception}>
                                    {" "}
                                    <p>Danh s??ch ????n h??ng tr???ng.</p>{" "}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChefUI;
