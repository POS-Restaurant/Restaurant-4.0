import { Container, Row, Col, Modal, Button } from "reactstrap"
import "react-icons/fa";
import './manage_order.css';
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";
import BillData from './BillData';
import { FaInfo } from "react-icons/fa";
import { useState } from "react";
import { Paper } from "@material-ui/core";
import { Title } from "@devexpress/dx-react-chart-material-ui";
import { PieSeries } from "@devexpress/dx-react-chart-material-ui";


const SortBill = (props) => {
  
  const [open, setOpen] = useState(true);
  const [group, setGroup] = useState(false);
  const [chart, setChart] = useState(true);
  const [onlyFeedBack, setOnlyFeedback] = useState(false);
  const [id, setId] = useState(1);
  const toggleModal = () => {
    setOpen(!open);
  };const toggleOnlyFb = () => {
    setOnlyFeedback(!onlyFeedBack)
  };
  const toggleGroup = () => {
    setGroup(!group)
  };
  const toggleChart = () => {
    setChart(!chart)
  }
  const FullBill = (idOrd) => {
    if (id != idOrd) {
      setId(idOrd);
      setOpen(true);

    }
    else toggleModal();
  }
  const data = BillData;
  const columns = (onlyFeedBack)? [
    { title: "Thời gian", field: "ordTime", type: "time" },
    { title: "Hủy đơn", field: "ReasonCancel" },
  ] :  [
    { title: "ID", field: "idOrd", type: "numeric" },
    { title: "Thời gian", field: "ordTime", type: "time" },
    { title: "Trạng thái", field: "stateCode" },
    { title: "Hủy đơn", field: "ReasonCancel" },
  ];

  return (
    <Container >
      <Row><Col xs={1} />
        <Col>
        <Button className='addCartItem' onClick={toggleOnlyFb}>Chỉ xem FeedBack</Button>
          <MaterialTable style={{ zIndex: 0 }}
            options={{
              search: true,
              exportButton: true,
              grouping: group,
              sorting: true
            }}
            actions={[
              {
                icon: FaInfo,
                tooltip: "Xem chi tiết",
                onClick: (event, rowData) => FullBill(rowData.idOrd),
              },
              {
                icon: tableIcons.Add,
                tooltip: "Groupby",
                isFreeAction: true,
                onClick: (event) => toggleGroup(),
              },
            ]}
            columns={columns}
            data={data}
            title="Danh sách đơn đặt hàng"
          />

        </Col>
        <Modal isOpen={open} toggle={toggleModal}>
          <Button onClick={toggleModal} style={{ zIndex: 1 }}>XXXXXX</Button>
          <BillModal id={id} />


        </Modal>
        <Modal isOpen={chart} toggle={toggleChart}>
          <Chart></Chart>
        </Modal>
      </Row>

    </Container>
  )
}
export default SortBill;
const BillModal = (idOrd) => {
  // const data = BillData;
  // const bill = data.filter((bill) => bill.idOrd === idOrd)[0];
  // const user=UserList.filter((user)=>user.id==bill.customer)[0];
  return (
    <div>
      <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
          <tr class="top">
            <td colspan="2">
              <table>
                <tr>
                  <td class="title">
                    {/* <img src="https://www.sparksuite.com/images/logo.png" style="width: 100%; max-width: 300px" /> */}
                  </td>

                  <td>
                    Hóa đơn số: 1<br />
                    Ngày 1, 1, 2015<br />
                    Tình trạng: Hủy đơn
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="information">
            <td colspan="2">
              <table>
                <tr>


                  <td>
                    Nhà hàng gà: KFC<br />
                    200/4 Tôn Đức Thắng<br />

                  </td>
                  <td>
                    Khách hàng: Võ Hồng Phúc<br />
                    0913562858<br />
                    KTX khu A
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="heading">
            <td>Tình trạng thanh toán</td>

            <td>Hoàn thành</td>
          </tr>


          <tr class="heading">
            <td>Món ăn</td>

            <td>Giá</td>
          </tr>

          <tr class="item">
            <td>Website design</td>

            <td>$300.00</td>
          </tr>

          <tr class="item">
            <td>Hosting (3 months)</td>

            <td>$75.00</td>
          </tr>

          <tr class="item last">
            <td>Domain name (1 year)</td>

            <td>$10.00</td>
          </tr>

          <tr class="total">
            <td></td>

            <td>Tổng chi phí: $385.00</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

const Chart = () => {
  return (
    <Paper>
      <Chart
        data={BillData}
      >
        <PieSeries valueField="total" argumentField="idOrd" />
        <Title text="Studies per day" />
      </Chart>
    </Paper>
  )
}