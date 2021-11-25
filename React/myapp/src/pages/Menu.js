import React, { Component } from "react";
// import { FaYenSign } from "react-icons/fa";
import { Container, Row, Col, Card, Input, Button, Modal } from "reactstrap";
//import { FoodOrdData } from "./FoodData";
import Sidebar from "../components/Sidebar";
import { FaClosedCaptioning, FaSearch } from "react-icons/fa";
import axios from "axios";

const idRes = localStorage.getItem("currentRes");
const idCus = localStorage.getItem("id");
console.log(idRes);
console.log(idCus);
class PickFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food_list: [],
            food_display: [],
            cart: [],
            isModalOpen: false,
            currentFood: {},
            totalCost: 0,
            searchTxt: "",
        }; // FoodOrdData;
        this.state.isModalOpen = false;
        this.togglePay = this.togglePay.bind(this);
        this.adjustItem = this.adjustItem.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.adjustFood = this.adjustFood.bind(this);
        this.addFood = this.addFood.bind(this);
        this.addcurrFood = this.addcurrFood.bind(this);
        this.rmvItem = this.rmvItem.bind(this);
        this.total = this.total.bind(this);
        this.searchText = this.searchText.bind(this);
        //     this.addDrug = this.addDrug.bind(this);
    }
    rmvItem(food) {
        const newCart = this.state.cart.filter(
            (item) => item.name !== food.name
        );
        this.state.cart = newCart;
        food.num = 1;
        this.total();
    }
    adjustItem(foodfix, more) {
        const A = foodfix;
        if (more) A.num++;
        else A.num--;
        if (A.num < 1) alert("Bạn đã nhập sai số lượng!");
        else {
            const newcart = this.state.cart.map((food) => {
                if (food === foodfix) return A;
                else return food;
            });
            this.setState({
                cart: newcart,
            });
            this.total();
        }
    }
    adjustFood(event) {
        const fix = this.state.currentCart;
        const newCart = this.state.cart.map((item) => {
            if (item === fix) {
                item.num = event.target.value;
            }
            return item;
        });
        this.setState({ cart: newCart });
        this.total();
    }
    addcurrFood() {
        this.addFood(this.state.currentFood);
    }
    addFood(food) {
        const exist = this.state.cart.filter((item) => item.name === food.name);
        if (exist.length > 0) {
            this.adjustItem(exist[0], true);
        } else {
            this.setState({
                carts: this.state.cart.push(food),
            });
        }
        this.total();
    }

    search(type) {
        this.setState({
            food_display: this.state.food_list.filter(
                (food) => food.kind === type
            ),
        });
    }
    searchText() {
        this.setState({
            food_display: this.state.food_list.filter((food) =>
                food.name.includes(this.state.searchTxt)
            ),
        });
        console.log(this.state.searchTxt);
    }
    showAll() {
        this.setState({
            food_display: this.state.food_list,
        });
    }
    total() {
        const sum = this.state.cart.reduce(
            (total, item) => total + item.price * item.num,
            0
        );
        this.setState({ totalCost: sum });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }
    togglePay() {
        try {
            let A =[];
            let B =[];
            let C =[];
            for(const x in this.state.cart){
                A.push(this.state.cart[x]._id)
                B.push("")
                C.push(this.state.cart[x].num)
            }
            const client = {
                customer: idCus,
                restaurant: idRes,
                dateOfPurchase: new Date(),
                dateOfReceipt: 0,
                listFood: A,
                listNote: B,
                listNum: C,
                total: this.state.totalCost
            }
            const response = axios.post("http://localhost:3000/Order/",client).then(
                (res) => {
                    console.log(res)
                    if(res.data.success=="Success")
                        this.setState({
                            cart: [],
                            totalCost: 0,
                        });
                    alert(res.data.success);
                })
          } catch (error) {
            console.log(error);
        }
    }
    componentDidMount() {
        const idRes = localStorage.getItem("currentRes");
        axios
            .get("http://localhost:3000/Food/get/menu", {
                params: { id: idRes },
            })
            .then((res) => {
                const FoodList = res.data.result;
                const returnValue = FoodList.map((food) => {
                    var newfood = food;
                    newfood.num = 1;
                    return newfood;
                });
                this.setState({ food_list: returnValue });
                this.setState({
                    food_display: this.state.food_list,
                });
                this.total();
            });
    }
    render() {
        let food_list = this.state.food_display.map((food) => {
            return (
                <div key={food.id} className="containCard">
                    <Card className="foodCard">
                        <Row className="foodRow">
                            <Col className="menuFoodImg">
                                <img
                                    className="menuFoodImg"
                                    src={food.img + ".png"}
                                    alt="None"
                                />
                            </Col>
                            <Col className="infoFood">
                                <div className="menuFoodName"> {food.name}</div>
                                <div className="menuFoodPrice">
                                    {" "}
                                    Giá tiền : {food.price}
                                </div>
                                <Button
                                    className="infobtn foodItemBtn"
                                    onClick={() => {
                                        this.setState({ currentFood: food });
                                        this.toggleModal();
                                    }}
                                >
                                    Xem chi tiết{" "}
                                </Button>
                                <Button
                                    className="addbtn foodItemBtn"
                                    onClick={(e) => {
                                        this.setState({ currentFood: food });
                                        this.addFood(food);
                                    }}
                                >
                                    Thêm vào giỏ hàng
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </div>
            );
        });
        const cart_food_list = this.state.cart.map((foodItem) => {
            return (
                <Container className="padding10">
                    <Card className="cartItemContent">
                        <Row className="incartItem">
                            {" "}
                            <img
                                className="menuFoodImg2"
                                src={foodItem.img + ".png"}
                                alt="Img Food"
                            />
                            <div className="foodCartInfo">
                                <span>{foodItem.name}</span>
                                <a className="singleCost">${foodItem.price}</a>
                            </div>
                            <div className="qty">
                                {" "}
                                <Button
                                    className="subCartItem"
                                    onClick={(e) => {
                                        this.adjustItem(foodItem, false);
                                    }}
                                >
                                    <span class="material-icons-outlined">
                                        remove
                                    </span>
                                </Button>
                                <input
                                    type="text"
                                    class="addMinusText"
                                    value={foodItem.num}
                                    name="amount"
                                    onChange={(e) => {
                                        this.setState({
                                            currentCart: foodItem,
                                        });
                                        this.adjustFood();
                                    }}
                                />
                                <Button
                                    className="addCartItem"
                                    onClick={(e) => {
                                        this.adjustItem(foodItem, true);
                                    }}
                                >
                                    <span class="material-icons-outlined">
                                        add
                                    </span>
                                </Button>{" "}
                            </div>
                            <div className="totalFoodPrice">
                                <a className="totalMoney">
                                    ${foodItem.price * foodItem.num}
                                </a>
                            </div>
                        </Row>
                        <Row>
                            <Input
                                className="note"
                                name="note"
                                type="text"
                                placeholder="OrderNote"
                            ></Input>
                            <Button
                                className="del"
                                onClick={(e) => {
                                    this.rmvItem(foodItem);
                                }}
                            >
                                <span class="material-icons-outlined">
                                    clear
                                </span>
                            </Button>
                        </Row>
                    </Card>
                </Container>
            );
        });

        return (
            <div>
                <Sidebar type={0} />
                <Row className="screen">
                    <Col className="MenuCard">
                        <Row>
                            <Button
                                className="type-button"
                                onClick={() => {
                                    this.showAll();
                                }}
                            >
                                Tất cả
                            </Button>
                            <Button
                                className="type-button"
                                onClick={() => {
                                    this.search("Food");
                                }}
                            >
                                Món ăn
                            </Button>
                            <Button
                                className="type-button"
                                onClick={() => {
                                    this.search("Drink");
                                }}
                            >
                                Nước uống
                            </Button>
                            <Button
                                className="type-button"
                                onClick={() => {
                                    this.search("Combo");
                                }}
                            >
                                Combo
                            </Button>
                            <Input
                                style={{ height: 46, width: 400 }}
                                type="text"
                                name="searchFood"
                                id="searchBar"
                                placeholder="Tìm kiếm"
                                onChange={(e) => {
                                    this.setState({
                                        searchTxt: e.target.value,
                                    });
                                }}
                            />

                            <FaSearch
                                id="searchIcon"
                                onClick={(e) => this.searchText()}
                            />
                        </Row>
                        <div class="scroll-bg-menu">
                            <div class="scroll-div-menu">
                                <div class="scroll-object-menu">
                                    {food_list}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="cart">
                        <div class="scroll-bg-cart">
                            <div class="scroll-div-cart">
                                <div class="scroll-object-cart">
                                    {cart_food_list}
                                </div>
                            </div>
                        </div>
                        <Container className="payment">
                            <h1 className="totalCostBar">
                                Tổng:{" "}
                                <span className="totalCost">
                                    ${this.state.totalCost}
                                </span>
                            </h1>

                            <div
                                class="btn2"
                                onClick={(e) => {
                                    this.togglePay();
                                }}
                            >
                                Thanh toán
                            </div>
                        </Container>
                    </Col>

                    <Modal
                        isOpen={this.state.isModalOpen}
                        toggle={this.toggleModal}
                    >
                        <div class="itemContainer">
                            <div class="itemHeader">
                                <h2 class="headerName">Thêm vào giỏ hàng</h2>
                                <button
                                    class="closeBtn"
                                    onClick={this.toggleModal}
                                >
                                    X
                                </button>
                            </div>
                            <div class="itemBody">
                                <div className="Picbox">
                                    <img
                                        class={"itemPic"}
                                        src={this.state.currentFood.img + ".png"}
                                        alt="Img Food"
                                    />
                                </div>
                                <div class="itemDetail">
                                    <div class="itemPrice">
                                        <div className="itemPrice_1">
                                            <h4>Name</h4>
                                            <h3>
                                                {this.state.currentFood.name}
                                            </h3>
                                        </div>
                                        <div className="itemPrice_3">
                                            <h4>Price</h4>
                                            <h3 class="redColor">
                                                {this.state.currentFood.price}
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="itemQuantity">
                                        <div class="itemQuantityText">
                                            Quantity
                                        </div>
                                        <div class="itemQuantityBtn">
                                            <button
                                                type="button"
                                                class="addMinusBtn"
                                                onClick={(e) =>
                                                    this.adjustItem(
                                                        this.state.currentFood,
                                                        false
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                class="addMinusText"
                                                value={
                                                    this.state.currentFood.num
                                                }
                                                name="amount"
                                                onChange={this.adjustFood}
                                            />
                                            <button
                                                type="button"
                                                class="addMinusBtn"
                                                onClick={(e) =>
                                                    this.adjustItem(
                                                        this.state.currentFood,
                                                        true
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                                <div class="itemNutri">
                                    <h5>
                                        Protein:{" "}
                                        <span class="itemNutriText">
                                            {this.state.currentFood.protein}
                                        </span>{" "}
                                    </h5>
                                    <h5>
                                        Baking material:{" "}
                                        <span class="itemNutriText">
                                            {this.state.currentFood.material}
                                        </span>{" "}
                                    </h5>
                                    <h5>
                                        Food decoration:{" "}
                                        <span class="itemNutriText">
                                            {this.state.currentFood.decoration}
                                        </span>{" "}
                                    </h5>
                                    <h5>
                                        Rating:{" "}
                                        <span class="itemNutriText">
                                            {this.state.currentFood.rating}
                                        </span>{" "}
                                    </h5>
                                </div>
                                <button
                                    class="bottomBtn"
                                    type="button"
                                    onClick={() => {
                                        this.addcurrFood();
                                        this.toggleModal();
                                    }}
                                >
                                    Xác nhận
                                </button>
                            </div>
                        </div>
                    </Modal>
                </Row>
            </div>
        );
    }
}

export default PickFood;
