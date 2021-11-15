import React, { Component, useState } from "react";
import styles from './EditMenu.module.css'
import { FoodOrdData } from "../FoodData";
import FoodItem from "./FoodItem";
import {AiOutlinePlusCircle} from 'react-icons/ai';
import PopupFoodItem from "./PopupFoodItem";




function EditMenu() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.topbar}>
                <span className={styles.topbarLabel}>Chỉnh sửa menu</span>
                <input className={styles.topbarInput} type='search' />
            </div>
            <div className={styles.filter}>
                <button className={styles.btn}>Tất cả</button>
                <button className={styles.btn}>Món ăn</button>
                <button className={styles.btn}>Thức uống</button>
                <button className={styles.btn}>Combo</button>
            </div>
            <div className={styles.foodsList}>
                <div className={`${styles.itemContainer} ${styles.itemContainer1}`}>
                    <AiOutlinePlusCircle className={styles.itemIcon} onClick={() => setButtonPopup(true)} />
                    <p className={styles.addItemLabel} onClick={() => setButtonPopup(true)} >Thêm món mới</p>
                </div>
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
                <FoodItem onClick={() => setButtonPopup(true)} name='Bánh ngọt' src='../image/BanhNgot.jpg' price='40000' protein='Blank' material='Meat' decoration='Cheese' />
            </div>

            <PopupFoodItem trigger={buttonPopup}  setTrigger={setButtonPopup} img='../image/BanhNgot.jpg'/>
        </div>
    );
}

export default EditMenu


// import React, { Component } from "react";
// import { FaYenSign } from "react-icons/fa";
// import { Container, Row, Col, CardImg } from "reactstrap";
// import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
// import { Form, FormGroup, Input, Button } from "reactstrap";
// import { Modal, ModalBody } from 'reactstrap';
// import { FoodOrdData } from "../FoodData";
// import { Scrollbars } from 'react-custom-scrollbars';

// class EditMenu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = FoodOrdData;
//         this.state.isModalOpen=false;
//         this.togglePay=this.togglePay.bind(this);
//         this.adjustItem = this.adjustItem.bind(this);
//         this.toggleModal = this.toggleModal.bind(this);
//         this.adjustFood=this.adjustFood.bind(this);
//         this.addFood=this.addFood.bind(this);
//         this.addcurrFood=this.addcurrFood.bind(this);
//         this.rmvItem=this.rmvItem.bind(this);
//         this.total=this.total.bind(this);
//         //     this.addDrug = this.addDrug.bind(this);
//     }
//     rmvItem(food) {
        
//         const newCart = this.state.cart.filter((item) => item.food_name !== food.food_name);
//         this.state.cart=newCart;
//         food.num=1;
//         this.total();
//     }
//     adjustItem(foodfix, more) {
//         const A = foodfix;
//         if (more) A.num++;
//         else A.num--;
//         if(A.num<1) alert("Bạn đã nhập sai số lượng!")
//         else {
//             const newcart = this.state.cart.map((food) => {
//             if (food===foodfix) return A;
//             else return food;
//         });
//         this.setState({
//             cart: newcart,
//         });
//         this.total();
//         }
//     }
//     adjustFood(event){
//         const fix=this.state.currentCart
//         const newCart=this.state.cart.map(
//             (item)=>{
//                 if (item===fix) {item.num=event.target.value;}
//                 return item;
//             }
//         )
//         this.setState({cart:newCart})
//         this.total();
//     //     const editFood=this.state.cart.filter(
//     //         (item)=> if (item.food_name === event
//     //     )
//     //     newFood.num=event.target.value;
//     //     this.setState({currentFood:newFood});
//     }
//     addcurrFood(){
//         this.addFood(this.state.currentFood)
//     }
//     addFood(food) {
//         const exist = this.state.cart.filter(
//             (item) => item.food_name===food.food_name
//         );
//         if (exist.length > 0) {
//             this.adjustItem(exist[0], true);
//         } else {
//             this.setState({
//                 carts: this.state.cart.push(food),
//             });
//         }
        
//         this.total();
//     }

//     search(type) {
//         this.setState({
//             food_display: this.state.food_list.filter(
//                 (food) => food.type===type
//             ),
//         });
//     }
//     showAll() {
//         this.setState({
//             food_display: this.state.food_list,
//         });
//     }
//     total() {
//         const sum=this.state.cart.reduce(
//             (total, item) => total + item.price * item.num,0
//         );
//         this.setState({totalCost:sum});
//     }
    
//     toggleModal() {
//         this.setState({
//           isModalOpen: !this.state.isModalOpen
//         });
//     }
//     togglePay() {
//         this.setState({
//         //   donePay: !this.state.donePay,
//           cart:[],
//           totalCost:0,
//         });
//     }

//     componentDidMount() {
//         this.setState(FoodOrdData);
//         this.setState({
//             food_display: this.state.food_list,
//         });
//         this.total();
//     }
//     // componentDidUpdate(){
//     //     this.total();
//     // }
//     render() {
//         const food_list = this.state.food_list.map((food) => {
//             return (
//                 <div className="containCard">
//                     <Card className="foodCard">
//                         <Row className="foodRow">
//                             <Col>
//                             <img className= 'menuFoodImg' src={food.img} alt="None"/>
//                             </Col>
//                             <Col>
//                             <div className='menuFoodName'> {food.food_name}</div>
//                             <div className='menuFoodPrice'> Giá tiền : {food.price}</div>
//                             </Col>
//                         </Row>
//                         <Row className="foodRow2">
//                             <Button className="infobtn" onClick={()=>{this.setState({currentFood:food}); this.toggleModal()}}>Xem chi tiết </Button>
//                         <Button
//                             className="addbtn"
//                             onClick={(e) => {
//                                 this.addFood(food);
//                             }}
//                         >
//                             Thêm vào giỏ hàng
//                         </Button>
//                         </Row>
                        
                        
//                     </Card>
//                 </div>
//             );
//         });
        

//         return (
//             <Row className="screen">
//                 <Col className="MenuCard">
//                     <Row>
//                         <Button className="type-button" onClick={() => {this.showAll();}}>
//                             Tất cả
//                         </Button>
//                         <Button className="type-button" onClick={() => {this.search("DoAn");}}>
//                             Món ăn
//                         </Button>
//                         <Button className="type-button" onClick={() => {this.search("Nuoc");}}>
//                             Nước uống
//                         </Button>
//                         <Button className="type-button" onClick={() => {this.search("Combo");}}>
//                             Combo
//                         </Button>
//                         <input style = {{ height: 46, width: 400}} type="text" name="searchFood" id="searchBar" placeholder="Tìm kiếm" />
//                         <img id="searchIcon" src= "image\OIP.jpg" alt="SearchIcon" />
//                     </Row>
//                     {/* <Scrollbars style={{height:640}}>
//                         <Row>
//                             {food_list}
//                         </Row>
//                     </Scrollbars> */}
//                                         <div class="scroll-bg-menu">
//                         <div class="scroll-div-menu">
//                             <div class="scroll-object-menu">
                        
//                             {food_list}
//                     </div>
//                     </div>
//                     </div>
//                 </Col>
            

//                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//                     <div class='itemContainer'>
//                         <div class="itemHeader">
//                         <h2 class='headerName'>Thêm vào giỏ hàng</h2>
//                         <button class="closeBtn" onClick={this.toggleModal}>X</button>
//                     </div>
//                 <div class="itemBody">
//                 <div className="Picbox">
//                 <img class={"itemPic"} src={this.state.currentFood.img}/>
//                 </div>
//                 <div class="itemDetail">
//                     <div class="itemPrice">
//                         <div className='itemPrice_1'>
//                             <h4>Name</h4>
//                             <h3>{this.state.currentFood.food_name}</h3>
//                         </div>
//                         <div className='itemPrice_3'>
//                             <h4>Price</h4>
//                             <h3 class="redColor">{this.state.currentFood.price}</h3>
//                         </div>
//                     </div>
//                     <div class="itemQuantity">
//                         <div class="itemQuantityText">Quantity</div>
//                         <div class="itemQuantityBtn">
//                             <button type="button" class="addMinusBtn" onClick={(e)=>this.adjustItem(this.state.currentFood,false)}>-</button>
//                             <input type="text" class="addMinusText" value={this.state.currentFood.num} name="amount" onChange={this.adjustFood}/>
//                             <button type="button" class="addMinusBtn" onClick={(e)=>this.adjustItem(this.state.currentFood,true)}>+</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="clear"></div>
//                 <div class="itemNutri">
//                         <h5>Protein: <span class="itemNutriText">{this.state.currentFood.Protein}</span> </h5>
//                         <h5>Additives: <span class="itemNutriText">{this.state.currentFood.Additives}</span> </h5>
//                         <h5>Baking material: <span class="itemNutriText">{this.state.currentFood.Material}</span> </h5>
//                         <h5>Food decoration: <span class="itemNutriText">{this.state.currentFood.decoration}</span> </h5>
                       
//                     </div>
//                     <button class="bottomBtn" type="button" onClick={()=>{this.addcurrFood(); this.toggleModal()}}>Xác nhận</button>
//                 </div>
//             </div>
//                 </Modal>
//             </Row>
//         );
//     }
// }

// export default EditMenu;















