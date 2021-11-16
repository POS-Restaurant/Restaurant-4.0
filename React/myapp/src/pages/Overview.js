import React from 'react';
import Sidebar from '../components/Sidebar'
function OverviewCustomer() {
  return (
    <div className='home'>
      <Sidebar type={0}/>
      <h1>Chào mừng bạn đã đến website của chúng tôi!</h1>
    </div>
  );
};
function OverviewChef() {
  return (
    <div className='home'>
      <Sidebar type={1}/>
      <h1>Chào mừng bạn đã đến website của chúng tôi!</h1>
    </div>
  );
};
function OverviewManager() {
  return (
    <div className='home'>
      <Sidebar type={2}/>
      <h1>Chào mừng bạn đã đến website của chúng tôi!</h1>
    </div>
  );
};
function OverviewAdmin() {
  return (
    <div className='home'>
      <Sidebar type={3}/>
      <h1>Chào mừng bạn đã đến website của chúng tôi!</h1>
    </div>
  );
};
export {OverviewAdmin, OverviewManager, OverviewChef}
export default OverviewCustomer;
