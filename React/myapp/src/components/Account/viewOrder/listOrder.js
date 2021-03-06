import listOrder from "./listOrder.module.css";
import OrderCard from "./OrderCard";
import Sidebar from "../../Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ListOrderUI() {
  const [orders, setOrders] = useState([]);
  const [clients, setClients] = useState([]);
  const idRes = localStorage.getItem("currentRes");
  const idCus = localStorage.getItem("id");
  console.log(idCus)
  const [init, setInit] = useState(true);
  const checkData = async () => {
    await axios
      .get("http://localhost:3000/Order/get/my_orders", { params: { idCus: idCus, idRes: idRes } })
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
      .get("http://localhost:3000/Order/get/my_orders", { params: { idCus: "619c9601a0294f5555f10da4", idRes: idRes } })
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
      <Sidebar type={0} />
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
            >T???t c???</button>
            <button className={`${listOrder.btnPending} ${activePending ? listOrder.active : listOrder.close}` } 
              onClick={() => {
                setCondition("Pending")
                setActiveAll(false)
                setActivePending(true)
                setActiveDoing(false)
                setActiveDone(false)
                setActiveCanceled(false)
              }} 
            >??ang ch???</button>
            <button className={`${listOrder.btnDoing} ${activeDoing ? listOrder.active : listOrder.close}`} 
              onClick={() => {
                setCondition("Doing")
                setActiveAll(false)
                setActivePending(false)
                setActiveDoing(true)
                setActiveDone(false)
                setActiveCanceled(false)
              }}
            >??ang th???c hi???n</button>
            <button className={`${listOrder.btnDone} ${activeDone ? listOrder.active : listOrder.close}`} 
              onClick={() => {
                setCondition("Done")
                setActiveAll(false)
                setActivePending(false)
                setActiveDoing(false)
                setActiveDone(true)
                setActiveCanceled(false)
              }} 
            >Ho??n th??nh</button>
            <button className={`${listOrder.btnCancel} ${activeCanceled ? listOrder.active : listOrder.close}`} 
              onClick={() => {
                setCondition("Canceled")
                setActiveAll(false)
                setActivePending(false)
                setActiveDoing(false)
                setActiveDone(false)
                setActiveCanceled(true)
              }} 
            >???? h???y</button>
          </div> : <div className={listOrder.buttonBar}>
            <button className={listOrder.btnAll} disabled >T???t c???</button>
            <button className={listOrder.btnPending} disabled >??ang ch???</button>
            <button className={listOrder.btnDoing} disabled >??ang th???c hi???n</button>
            <button className={listOrder.btnDone} disabled >Ho??n th??nh</button>
            <button className={listOrder.btnCancel} disabled>???? h???y</button>
          </div>}
          <div className={listOrder.orderTable}>
            <div className={`${listOrder.orderListInfoBar} ${listOrder.orderCard}`}>
              <div className={listOrder.orderCardID}>M?? ????n</div>
              <div className={listOrder.orderCardTime}>Th???i gian ?????t</div>
              <div className={listOrder.orderCardTime}>Th???i gian nh???n</div>
              <div className={listOrder.orderCardPrice}>T???ng ti???n</div>
              <div className={listOrder.orderCardStatus}>Tr???ng th??i</div>
            </div>
            <div className={listOrder.orderList}>
              {filterOrder(condition).length > 0 ? filterOrder(condition).map((order) => {
                  return (
                    <OrderCard
                      key={order.id}
                      id={order._id}
                      timePurchase={order.dateOfPurchase}
                      timeReceipt={order.dateOfReceipt}
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
                }) : <div className={listOrder.exception}> <p>Danh s??ch ????n h??ng tr???ng.</p> </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListOrderUI;
