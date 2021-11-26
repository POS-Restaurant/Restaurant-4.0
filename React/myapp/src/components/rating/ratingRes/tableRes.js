import React from "react";
import ItemRes from "./itemRes";
import "./tableRes.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function TableRes() {
  const [data, setData] = useState([]);
  const idRes = localStorage.getItem("currentRes");
  const idCus = localStorage.getItem("id");
  const checkData = async () => {
    await axios
      .get("http://localhost:3000/Restaurant/get/res_info", {
        params: { id: idRes },
      })
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      checkData();
    }, 100);
  }, []);
  const onChange = async () => {
    await axios
      .get("http://localhost:3000/Restaurant/get/res_info", {
        params: { id: idRes },
      })
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      });
  };
  return (
    <div className="tableRes">
      <div style={{ height: "500px" }}>
        {data.length > 0 && (
          <ItemRes
            img={data[0].img}
            name={data[0].name}
            addr={data[0].address}
            averRate={data[0].rateScore}
            totalRate={data[0].rateNum}
            idRes={idRes}
            idCus={idCus}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
}

export default TableRes;
