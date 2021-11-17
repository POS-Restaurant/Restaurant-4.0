import React from 'react';
import Sidebar from '../components/Sidebar'
import OverViewCpn from './overViewCpn';
function OverviewCustomer() {
  return (
    <div className='home'>
      <Sidebar type={0}/>
      <h1>Chào mừng bạn đã đến website của chúng tôi!</h1>
      <OverViewCpn />
    </div>
  );
};
function OverviewChef() {
  return (
    <div className='home'>
      <Sidebar type={1}/>
      <h1>Chào mừng bạn đã đến website của chúng tôi!</h1>
      <OverViewCpn />
    </div>
  );
};
function OverviewManager() {
  return (
    <div className='home'>
      <Sidebar type={2}/>
      <h1>Chào mừng bạn đã đến website của chúng tôi!</h1>
      <OverViewCpn />
    </div>
  );
};
export {OverviewManager, OverviewChef}
export default OverviewCustomer;
