import listOrder from "./listOrder.module.css";
import OrderCard from "./OrderCard";
import Sidebar from "../../Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ListOrderUI() {
  const [orders, setOrders] = useState([]);
  const [clients, setClients] = useState([]);
  const idRes = localStorage.getItem("currentRes");
  const [init, setInit] = useState(true);
  const checkData = async () => {
    await axios
      .get("http://localhost:3000/Order/get/list", { params: { id: idRes } })
      .then((res) => {
        setOrders(res.data.results);
      });
    await axios
      .get("http://localhost:3000/Client/get/list", { params: { id: idRes } })
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
      .get("http://localhost:3000/Order/get/list", { params: { id: idRes } })
      .then((res) => {
        setOrders(res.data.results);
    });
    await axios
      .get("http://localhost:3000/Client/get/list", { params: { id: idRes } })
      .then((res) => {
        setClients(res.data.results);
    });
  };
  const [condition,setCondition] = useState('');
  const [activeAll,setActiveAll] = useState(true);
  const [activePending,setActivePending] = useState(false);
  const [activeDoing,setActiveDoing] = useState(false);
  const [activeDone,setActiveDone] = useState(false);
  const [activeCanceled,setActiveCanceled] = useState(false);
  var active = false;
  if(orders && orders.length > 0) active = true;
  
  function filterOrder(condition) {
    return orders && orders.length > 0 && orders.filter( e => {
      if (condition===''||condition===e.state) return e;
    })
  }
  return (
    <div>
      <Sidebar type={1} />
      <div class={listOrder.listOrder_ui}>
        <div className={listOrder.mainContent}>
          {active ? <div className={listOrder.buttonBar}>
            <button className={`${listOrder.btnAll} ${activeAll ? listOrder.active : listOrder.close}`} 
              onClick={() => {
                setCondition('')
                setActiveAll(true)
                setActivePending(false)
                setActiveDoing(false)
                setActiveDone(false)
                setActiveCanceled(false)
              }}
            >Tất cả</button>
            <button className={`${listOrder.btnPending} ${activePending ? listOrder.active : listOrder.close}` } 
              onClick={() => {
                setCondition("Pending")
                setActiveAll(false)
                setActivePending(true)
                setActiveDoing(false)
                setActiveDone(false)
                setActiveCanceled(false)
              }} 
            >Đang chờ</button>
            <button className={`${listOrder.btnDoing} ${activeDoing ? listOrder.active : listOrder.close}`} 
              onClick={() => {
                setCondition("Doing")
                setActiveAll(false)
                setActivePending(false)
                setActiveDoing(true)
                setActiveDone(false)
                setActiveCanceled(false)
              }}
            >Đang thực hiện</button>
            <button className={`${listOrder.btnDone} ${activeDone ? listOrder.active : listOrder.close}`} 
              onClick={() => {
                setCondition("Done")
                setActiveAll(false)
                setActivePending(false)
                setActiveDoing(false)
                setActiveDone(true)
                setActiveCanceled(false)
              }} 
            >Hoàn thành</button>
            <button className={`${listOrder.btnCancel} ${activeCanceled ? listOrder.active : listOrder.close}`} 
              onClick={() => {
                setCondition("Canceled")
                setActiveAll(false)
                setActivePending(false)
                setActiveDoing(false)
                setActiveDone(false)
                setActiveCanceled(true)
              }} 
            >Đã hủy</button>
          </div> : <div className={listOrder.buttonBar}>
            <button className={listOrder.btnAll} disabled >Tất cả</button>
            <button className={listOrder.btnPending} disabled >Đang chờ</button>
            <button className={listOrder.btnDoing} disabled >Đang thực hiện</button>
            <button className={listOrder.btnDone} disabled >Hoàn thành</button>
            <button className={listOrder.btnCancel} disabled>Đã hủy</button>
          </div>}
          <div className={listOrder.orderTable}>
            <div className={`${listOrder.orderListInfoBar} ${listOrder.orderCard}`}>
              <div className={listOrder.orderCardID}>Mã đơn</div>
              <div className={listOrder.orderCardTime}>Thời gian đặt</div>
              <div className={listOrder.orderCardName}>Người đặt</div>
              <div className={listOrder.orderCardPrice}>Tổng tiền</div>
              <div className={listOrder.orderCardStatus}>Trạng thái</div>
              <div className={listOrder.orderUpdateState}></div>
            </div>
            <div className={listOrder.orderList}>
              {filterOrder(condition).length > 0 ? filterOrder(condition).map((order) => {
                  return (
                    <OrderCard
                      key={order.id}
                      id={order._id}
                      time={order.dateOfPurchase}
                      name={searchInfoCus(clients, order.customer)}
                      customer={searchCus(clients, order.customer)}
                      price={order.total}
                      status={order.state}
                      total={order.total}
                      listFood={order.listFood}
                      listNum={order.listNum}
                      listNote={order.listNote}
                      onChange={onChange}
                    />
                  );
                }) : <div className={listOrder.exception}> <p>Danh sách đơn hàng trống.</p> </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListOrderUI;
