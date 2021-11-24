import React from 'react';
import Sidebar from '../../components/Sidebar'
import Carousel from 'react-elastic-carousel';
import Card from './card'
import './overview.css'
import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'
import slide4 from './slide4.jpg'
import slide5 from './slide5.jpg'
function OverviewCustomer() {
  return (
    <div className='overView'>
      <Sidebar type={0}/>
      <h1 style={{textAlign:'center', margin: "0px"}}>Chào mừng bạn đã đến nhà hàng của chúng tôi!</h1>
      <Carousel>
        <Card img = {slide1} />
        <Card img = {slide2} />
        <Card img = {slide3} />
        <Card img = {slide4} />
        <Card img = {slide5} />
      </Carousel> 
    </div>
  );
};
function OverviewChef() {
  return (
    <div className='home'>
      <Sidebar type={1}/>
      <h1 style={{textAlign:'center', margin: "0px"}}>Chào mừng bạn đã đến nhà hàng của chúng tôi!</h1>
      <Carousel>
        <Card img = {slide1} />
        <Card img = {slide2} />
        <Card img = {slide3} />
        <Card img = {slide4} />
        <Card img = {slide5} />
      </Carousel>
    </div>
  );
};
function OverviewManager() {
  return (
    <div className='home'>
      <Sidebar type={2}/>
      <h1 style={{textAlign:'center', margin: "0px"}}>Chào mừng bạn đã đến nhà hàng của chúng tôi!</h1>
      <Carousel>
        <Card img = {slide1} />
        <Card img = {slide2} />
        <Card img = {slide3} />
        <Card img = {slide4} />
        <Card img = {slide5} />
      </Carousel>
    </div>
  );
};
export {OverviewManager, OverviewChef}
export default OverviewCustomer;
