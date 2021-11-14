import BanhNgot from '../imageFood/BanhNgot.jpg';
import CaHoiTeriyaki from '../imageFood/CaHoiTeriyaki.jpg';
import cappuccino from '../imageFood/cappuccino.jpg';
import Coca from '../imageFood/Coca.jpg';
import coctailRose from '../imageFood/coctailRose.jpg';
import comboGiangSinh from '../imageFood/comboGiangSinh.jpg';
import Donut from '../imageFood/Donut.jpg';
import GaNuong from '../imageFood/GaNuong.jpg';
import GaRan from '../imageFood/GaRan.jpg';
import Hamburger from '../imageFood/Hamburger.jpg';
import KhoaiTayChien from '../imageFood/KhoaiTayChien.jpg';
import macaron from '../imageFood/macaron.jpg';
import myY from '../imageFood/myY.jpg';
import nemCongChaPhuong from '../imageFood/nemCongChaPhuong.jpg';
import nuocCam from '../imageFood/nuocCam.jpg';
import pancake from '../imageFood/pancake.jpg';
import pizza from '../imageFood/pizza.jpg';
import Sinhto from '../imageFood/Sinhto.jpg';
import sprite from '../imageFood/sprite.jpg';
import traiCayDam from '../imageFood/traiCayDam.jpg';
export const FoodOrdData = {
    food_list:[
        {food_name: "Bánh ngọt",type:"DoAn", price:100000,num:1 ,img: BanhNgot ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Cá hồi sốt Teriyaki",type:"DoAn", price:100000,num:1 ,img: CaHoiTeriyaki ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Hamburger",type:"DoAn", price:100000,num:1 ,img:Hamburger ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Bánh Donut",type:"DoAn", price:100000,num:1 ,img:Donut ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Gà nướng",type:"DoAn", price:100000,num:1 ,img:GaNuong ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Gà rán",type:"DoAn", price:100000,num:1 ,img: GaRan ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Khoai tây chiên",type:"DoAn", price:100000,num:1 ,img: KhoaiTayChien ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Bánh Macaron",type:"DoAn", price:100000,num:1 ,img:macaron ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Mỳ Ý",type:"DoAn", price:100000,num:1 ,img:myY ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name:"Nem công chả phượng",type:"DoAn",price:100000,num:1,img: nemCongChaPhuong ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name:"Pancake",type:"DoAn",price:100000,num:1,img: pancake ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name:"Pizza",type:"DoAn",price:100000,num:1,img:pizza ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Coca cola", type:"Nuoc",price:100,num:1, img: Coca ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Cappuccino", type:"Nuoc",price:100,num:1, img: cappuccino ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Cocktail hoa hồng", type:"Nuoc",price:100,num:1, img: coctailRose ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Nước cam", type:"Nuoc",price:100,num:1, img: nuocCam ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Sinh tố", type:"Nuoc",price:100,num:1, img: Sinhto ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Sprite", type:"Nuoc",price:100,num:1, img: sprite ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Trái cây dầm", type:"Nuoc",price:100,num:1, img: traiCayDam ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"},
        {food_name: "Combo Giáng sinh", type:"Combo",price:100000,num:1, img: comboGiangSinh,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese"}],
    food_display:[
        {food_name: "HongPhuc", price:100000,num:1},
        {food_name:"TK",price:100000,num:1}],
    cart: [
        {food_name: "Bánh ngọt",type:"DoAn", price:10000,img:BanhNgot ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese",num:3},
        {food_name: "Giáng sinh", type:"Combo",price:100000, img: comboGiangSinh ,Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese", num:5}],
    isModalOpen: false,
    currentFood:{food_name: "Bánh ngọt",type:"DoAn", price:100000,img:"image/BanhNgot.jpg",Protein:"Blank",Additives:"Sugar",Material:"Meat",decoration:"Cheese",num:3},
    totalCost:0,
}