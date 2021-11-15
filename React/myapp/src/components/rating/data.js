import BanhNgot from '../../imageFood/BanhNgot.jpg';
import CaHoiTeriyaki from '../../imageFood/CaHoiTeriyaki.jpg';
import cappuccino from '../../imageFood/cappuccino.jpg';
import Coca from '../../imageFood/Coca.jpg';
import coctailRose from '../../imageFood/coctailRose.jpg';
import res1 from '../../imageRes/res1.jpg';
import res2 from '../../imageRes/res2.jpg';
import res3 from '../../imageRes/res3.jpg';
import res4 from '../../imageRes/res4.jpg';
import res5 from '../../imageRes/res5.jpg';

const dataRes = [
    {
        img: res1,
        name: "Nhà hàng KFC 1", 
        addr: "248, Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM",
        averRate: 4.5,
        totalRate: 10000,
    },
    {
        img: res2,
        name: "Nhà hàng KFC 2", 
        addr: "248, Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM",
        averRate: 4.5,
        totalRate: 10000,
    },
    {
        img: res3,
        name: "Nhà hàng KFC 3", 
        addr: "248, Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM",
        averRate: 4.5,
        totalRate: 10000,
    },
    {
        img: res4,
        name: "Nhà hàng KFC 4", 
        addr: "248, Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM",
        averRate: 4.5,
        totalRate: 10000,
    },
    {
        img: res5,
        name: "Nhà hàng KFC 5", 
        addr: "248, Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM",
        averRate: 4.5,
        totalRate: 10000,
    },
];


const dataOrder = [
    {
        dateOrder: "29/02/2021", 
        dateRecv: "",
        res: "Nhà hàng KFC", stateOrder: 1,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "03/01/2021",
        res: "Nhà hàng KFC", stateOrder: 2,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "",
        res: "Nhà hàng KFC", stateOrder: 1,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "03/01/2021",
        res: "Nhà hàng KFC", stateOrder: 2,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "",
        res: "Nhà hàng KFC", stateOrder: 1,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "03/01/2021",
        res: "Nhà hàng KFC", stateOrder: 2,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "",
        res: "Nhà hàng KFC", stateOrder: 1,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "03/01/2021",
        res: "Nhà hàng KFC", stateOrder: 2,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "",
        res: "Nhà hàng KFC", stateOrder: 1,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "03/01/2021",
        res: "Nhà hàng KFC", stateOrder: 2,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "",
        res: "Nhà hàng KFC", stateOrder: 1,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "03/01/2021",
        res: "Nhà hàng KFC", stateOrder: 2,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "",
        res: "Nhà hàng KFC", stateOrder: 1,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "03/01/2021",
        res: "Nhà hàng KFC", stateOrder: 2,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "",
        res: "Nhà hàng KFC", stateOrder: 1,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "03/01/2021",
        res: "Nhà hàng KFC", stateOrder: 2,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "",
        res: "Nhà hàng KFC", stateOrder: 1,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "03/01/2021",
        res: "Nhà hàng KFC", stateOrder: 2,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "",
        res: "Nhà hàng KFC", stateOrder: 1,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
    {
        dateOrder: "29/02/2021", 
        dateRecv: "03/01/2021",
        res: "Nhà hàng KFC", stateOrder: 2,
        listFood: [
            {img: BanhNgot,name:"Bánh ngọt",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: CaHoiTeriyaki,name:"Cá hồi sốt Teriyaki",type: "DoAn", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: cappuccino,name:"Cappuccino",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: Coca,name:"Coca cola",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
            {img: coctailRose,name:"Cocktail hoa hồng",type: "Nuoc", price: 10000, num: 2, averRate: 4.5, totalRate: 10000},
        ]
    },
];
export {dataRes};
export default dataOrder;

