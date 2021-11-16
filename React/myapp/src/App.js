import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { Redirect } from 'react-router';
import OverviewCustomer, {OverviewAdmin, OverviewChef, OverviewManager} from './pages/Overview';
import EditMenu from './pages/EditMenu/EditMenu';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import PickFood from './pages/Menu';
import SortBill from './pages/Manager/ManageBill';
import SortFood from './pages/Manager/ManageFoodSell';
import React from 'react';
import Payment from './pages/Payment'
import OrdTable from './pages/Table/Table-home'
import ListOrder from './components/Account/viewOrder/listOrder'
import Rating from './components/rating/ratingCpn/rating'
import SignUp from './components/Sign/Signup/SignUp';
import Login from './components/Sign/Login/Login';
import PreLogin from './components/Sign/Login/prelogin';
import ForgetPass from './components/Sign/Forget/Forget';
import ForgetChangePass from './components/Sign/Forget/ForgetChangePass';
import UserInfo from './components/Account/Info/UserInfo';
import Noti from './components/Account/Noti/Noti';
import Address from './components/Account/Address/Address';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/chef/overview' exact component={OverviewChef} />
        <Route path='/admin/overview' exact component={OverviewAdmin} />
        <Route path='/customer/account/myorder' exact component={ListOrder} />
        <Route path='/customer/account/myaddress' exact component={Address} />
        <Route path='/customer/orderfood' exact component={PickFood} />
        <Route path='/customer/rating' exact component={Rating} />
        <Route path='/customer/payment' exact component={Payment} />
        <Route path='/customer/ordertable' exact component={OrdTable} />  
        <Route path='/customer/overview' exact component={OverviewCustomer} />
        <Route path='/customer/account' exact component={UserInfo} />
        <Route path='/customer/account/notify' exact component={Noti} />
        <Route path='/manager/overview' exact component={OverviewManager} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path ='/manager/menu' exact component={EditMenu} />
        <Route path='/manage/bill' exact component={SortBill}/>
        <Route path='/manage/food' exact component={SortFood}/> 
        <Route path='/signup' exact component={SignUp} />
        <Route path='/login' exact component={Login} />
        <Route path='/forgetpass' exact component={ForgetPass} />
        <Route path='/forgetchangepass' exact component={ForgetChangePass} />
        <Route path='/payment' exact component={Payment} />
        <Route path='/' exact component={PreLogin} />
        <Redirect to='/'/>
      </Switch>
    </Router>
  );
}

export default App;