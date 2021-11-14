import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import PickFood from './pages/Menu';
import SortBill from './pages/Manager/ManageBill';
import SortFood from './pages/Manager/ManageFoodSell';
import React from 'react';
import Payment from './pages/Payment'
function App() {
  return (
    <Router>
      <Sidebar />
      <Router>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/menu' exact component={PickFood} />
<<<<<<< Updated upstream
        <Route path='/manage/bill' exact component={SortBill}/>
        <Route path='/manage/food' exact component={SortFood}/>
        
        <Redirect to='/menu' />
=======
        <Route path='/payment' exact component={Payment} />
        {/* <Redirect to='/menu' /> */}
>>>>>>> Stashed changes
      </Router>
    </Router>
  );
}

export default App;