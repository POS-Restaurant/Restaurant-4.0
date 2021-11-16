import './App.css';
import Sidebar from './components/Sidebar';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { Redirect } from 'react-router';
import Overview from './pages/Overview';
import EditMenu from './pages/EditMenu/EditMenu';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import PickFood from './pages/Menu';
import SortBill from './pages/Manager/ManageBill';
import SortFood from './pages/Manager/ManageFoodSell';
import React from 'react';
import Payment from './pages/Payment'
import ListOrder from './components/viewOrder/listOrder'
import Rating from './components/rating/ratingCpn/rating'
import SignUp from './components/Sign/Signup/SignUp';
import Login from './components/Sign/Login/Login';
import PreLogin from './components/Sign/Login/prelogin';
function App() {
  return (
    <Router>
      <Sidebar type = {-1}/>
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/account/vieworder' exact component={ListOrder} />
        <Route path='/rating' exact component={Rating} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/menu' exact component={PickFood} />
        <Route path ='/messages/message2' exact component={EditMenu} />
        
        {/* <Redirect to='/messages/message2' /> */}
        <Route path='/manage/bill' exact component={SortBill}/>
        <Route path='/manage/food' exact component={SortFood}/> 
        <Route path='/payment' exact component={Payment} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/login' exact component={Login} />
        <Route path='/prelogin' exact component={PreLogin} />
        <Redirect to='/prelogin'/>
      </Switch>
    </Router>
  );
}

export default App;