import React from 'react';
import Sidebar from '../../components/Sidebar'
import Carousel from 'react-elastic-carousel';
import Card from './card'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './overview.css'

function OverviewCustomer() {
  const [data,setData]=useState([]);
  const idRes = localStorage.getItem("currentRes");
  const  checkData=async ()=>{
    await axios.get("http://localhost:3000/Restaurant/get/res_info", { params: { id: idRes } }).then(res=>{
      console.log(res.data.results);
      setData(res.data.results);}
    )}
    useEffect(() => {
        setTimeout(() => {
            checkData();
        }, 100);
      },[]);
  if(data.length > 0) {
    console.log( data[0].imgOverview) }
  return (
    <div className='overView'>
      <Sidebar type={0}/>
      <h1 style={{textAlign:'center', margin: "1% 0px"}}>Chào mừng bạn đã đến nhà hàng của chúng tôi!</h1>
      <Carousel>
        {data.length > 0 && data[0].imgOverview.map((item, index) => {
          return(
          <Card img = {item + '.jpg'} key={index} />
          )
        })}
      </Carousel>
    </div>
  )
};
function OverviewChef() {
  const [data,setData]=useState([]);
  const idRes = localStorage.getItem("currentRes");
  const  checkData=async ()=>{
    await axios.get("http://localhost:3000/Restaurant/get/res_info", { params: { id: idRes } }).then(res=>{
      console.log(res.data.results);
      setData(res.data.results);}
    )}
    useEffect(() => {
        setTimeout(() => {
            checkData();
        }, 100);
      },[]);
  if(data.length > 0) {
    console.log( data[0].imgOverview) }
  return (
    <div className='overView'>
      <Sidebar type={1}/>
      <h1 style={{textAlign:'center', margin: "1% 0px"}}>Chào mừng bạn đã đến nhà hàng của chúng tôi!</h1>
      <Carousel>
        {data.length > 0 && data[0].imgOverview.map((item, index) => {
          return(
          <Card img = {item + '.jpg'} key={index} />
          )
        })}
      </Carousel>
    </div>
  )
};
function OverviewManager() {
  const [data,setData]=useState([]);
  const idRes = localStorage.getItem("currentRes");
  const  checkData=async ()=>{
    await axios.get("http://localhost:3000/Restaurant/get/res_info", { params: { id: idRes } }).then(res=>{
      console.log(res.data.results);
      setData(res.data.results);}
    )}
    useEffect(() => {
        setTimeout(() => {
            checkData();
        }, 100);
      },[]);
  if(data.length > 0) {
    console.log( data[0].imgOverview) }
  return (
    <div className='overView'>
      <Sidebar type={2}/>
      <h1 style={{textAlign:'center', margin: "1% 0px"}}>Chào mừng bạn đã đến nhà hàng của chúng tôi!</h1>
      <Carousel>
        {data.length > 0 && data[0].imgOverview.map((item, index) => {
          return(
          <Card img = {item + '.jpg'} key={index} />
          )
        })}
      </Carousel>
    </div>
  )
};
export {OverviewManager, OverviewChef}
export default OverviewCustomer;
