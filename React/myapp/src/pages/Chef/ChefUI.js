import React from "react";
import chef from "./Chef.module.css";
import OrderCard from "./OrderCard";
//import OrderStatePopup from "./OrderStatePopup";
// import Pagination from "@mui/material/Pagination";
//import Pagination from "react-js-pagination";
//import ConfirmState from "./ConfirmState";
import OrderDetail from "./OrderDetail/OrderDetail";
// import Stack from '@mui/material/Stack';
import Sidebar from "../../components/Sidebar"
const DUMMY_DATA = [
    {
        id: 123456756,
        time: "01/01/2021 10:24AM",
        name: "Hải Đăng",
        price: 130000,
        status: "done",
    },
    {
        id: 123456764,
        time: "01/01/2021 10:24AM",
        name: "Hải Đăng",
        price: 126000,
        status: "pending",
    },
    {
        id: 123456789,
        time: "01/01/2021 10:24AM",
        name: "Hải Đăng",
        price: 170000,
        status: "canceled",
    },
    {
        id: 123456764,
        time: "01/01/2021 10:24AM",
        name: "Hải Đăng",
        price: 130000,
        status: "done",
    },
    {
        id: 123456789,
        time: "01/01/2021 10:24AM",
        name: "Hải Đăng",
        price: 130000,
        status: "doing",
    },
    {
        id: 123456764,
        time: "01/01/2021 10:24AM",
        name: "Hải Đăng",
        price: 130000,
        status: "done",
    },
    {
        id: 123456789,
        time: "01/01/2021 10:24AM",
        name: "Hải Đăng",
        price: 130000,
        status: "done",
    },
    {
        id: 123456764,
        time: "01/01/2021 10:24AM",
        name: "Hải Đăng",
        price: 130000,
        status: "done",
    },
    {
        id: 123456789,
        time: "01/01/2021 10:24AM",
        name: "Hải Đăng",
        price: 130000,
        status: "done",
    },
    {
        id: 123456764,
        time: "01/01/2021 10:24AM",
        name: "Hải Đăng",
        price: 130000,
        status: "done",
    },
    {
        id: 123456789,
        time: "01/01/2021 10:24AM",
        name: "Hải Đăng",
        price: 130000,
        status: "done",
    },
];

function ChefUI() {
    return (
        <div>
            <Sidebar type={1}/>
            <div class={chef.chef_ui}>
                <header className={chef.header}>
                    <h1 className={chef.title}>Quản lý đơn hàng</h1>
                    <div className={chef.right}>
                        <div className={chef.searchBar}>
                            <input className={chef.inputSearch} type="text" />{" "}
                            <button className={chef.searchButton}>
                                <span
                                    className={`${chef.materialIconsOutlined} ${chef.buttonSearch}`}
                                >
                                    search
                                </span>
                            </button>
                        </div>
                        <button className={chef.notiButton}>
                            <span className={chef.materialIconsOutlined}>
                                notifications
                            </span>
                        </button>
                    </div>
                </header>
                <div className={chef.mainContent}>
                    <div className={chef.buttonBar}>
                        <button className={`${chef.btnAll} ${chef.active}`}>
                            Tất cả
                        </button>
                        <button className={chef.btnPending}>Đang chờ</button>
                        <button className={chef.btnDoing}>Đang thực hiện</button>
                        <button className={chef.btnDone}>Hoàn thành</button>
                        <button className={chef.btnCancel}>Đã hủy</button>
                    </div>
                    <div className={chef.orderTable}>
                        <div
                            className={`${chef.orderListInfoBar} ${chef.orderCard}`}
                        >
                            <div className={chef.orderCardID}>Mã đơn</div>
                            <div className={chef.orderCardTime}>Thời gian đặt</div>
                            <div className={chef.orderCardName}>Người đặt</div>
                            <div className={chef.orderCardPrice}>Tổng tiền</div>
                            <div className={chef.orderCardStatus}>Trạng thái</div>
                            <div className={chef.orderUpdateState}></div>
                        </div>
                        <div className={chef.orderList}>
                            {DUMMY_DATA.map((order) => {
                                return (
                                    <OrderCard
                                        key={order.id}
                                        id={order.id}
                                        time={order.time}
                                        name={order.name}
                                        price={order.price}
                                        status={order.status}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    {/* <div className={chef.paging}>
                        <Pagination itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5} />
                    </div> */}
                    {/* <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange.bind(this)}
                    /> */}
                </div>
                <OrderDetail/>
            </div>
        </div>
    );
}

export default ChefUI;
