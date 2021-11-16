import { Container, Row, Col, Modal, Button } from "reactstrap"
import "react-icons/fa";
import './manage_order.css';
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";
import { FoodOrdData } from "../FoodData";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { Paper } from "@material-ui/core";
import { Title } from "@devexpress/dx-react-chart-material-ui";
import { PieSeries } from "@devexpress/dx-react-chart-material-ui";
import { Switch } from "@material-ui/core";
import { Redirect } from "react-router";
import Sidebar from "../../components/Sidebar";
const SortFood = (props) => {
  
//   const [open, setOpen] = useState(true);
  const [group, setGroup] = useState(false);
  const [chart, setChart] = useState(true);
  const [onlyFeedBack, setOnlyFeedback] = useState(false);
  const [id, setId] = useState(1);
//   const toggleModal = () => {
//     setOpen(!open);
//   };
const toggleOnlyFb = () => {
    setOnlyFeedback(!onlyFeedBack)
  };
  const toggleGroup = () => {
    setGroup(!group)
  };
  const toggleChart = () => {
    setChart(!chart)
  }
//   const FullBill = (idOrd) => {
//     if (id != idOrd) {
//       setId(idOrd);
//       setOpen(true);

//     }
//     else toggleModal();
//   }
  const data = FoodOrdData.food_list;
  const columns = [
    { title: "Tên", field: "food_name", type: "text" },
    { title: "Type", field: "type" },
    {title:"Giá",filed:"price"},
    {title:"Số lượng bán ra", field:"num"}
  ] ;

  return (
    <Container >
      <Sidebar type={2}/>
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
                icon: FaEdit,
                tooltip: "Xem chi tiết",
                onClick: (event, rowData) => {setId(rowData.food_name); return(<Switch> <Redirect to='/home'/></Switch>)},
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
            title="Thống kê món ăn"
          />

        </Col>
        {/* <Modal isOpen={open} toggle={toggleModal}>
          <Button onClick={toggleModal} style={{ zIndex: 1 }}>XXXXXX</Button>
          <BillModal id={id} />


        </Modal> */}
        <Modal isOpen={chart} toggle={toggleChart}>
          {/* <Chart></Chart> */}
        </Modal>
      </Row>

    </Container>
  )
}
export default SortFood;

const Chart = () => {
  return (
    <Paper>
      <Chart
        data={FoodOrdData}
      >
        <PieSeries valueField="total" argumentField="idOrd" />
        <Title text="Studies per day" />
      </Chart>
    </Paper>
  )
}