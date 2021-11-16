import './prelogin.css'
import {Link} from 'react-router-dom';
import Admin from './Admin.jpg';
import Chef from './Chef.jpg';
import Customer from './Customer.jpg';
import Manager from './Manager.jpg';

var typeUser = -1;


function PreLogin() {
    const styleComponent = {
        width: "200px",
        height: "250px",
        marginLeft: "5%"
    };
    const styleComponent1 = {
        width: "200px",
        height: "250px",
        marginLeft: "5%",
        marginRight: "5%",
    };
    const styleComponent2 = {
        width: "200px",
        height: "250px",
        marginRight: "5%",
    };
    const styleComponent3 = {
        width: "200px",
        height: "250px",
        marginRight: "5%"
    };

    return (
        <div id = "PreLoginr"> 
            <div id = "PreLogincontainer">
                
                <div style= {styleComponent}>
                    <div className = "PreLoginuser-container">
                        <Link className="PreloginLink" to="/login" onClick = {function() {typeUser = 3}}>
                            <div id = "PreLoginAdmin"> <img src={Admin} alt="AdminImg" /></div>
                            <div className = "PreLoginFrame" style={{border: "solid #58BAAB"}}>
                                <div className="PreLogintext">Admin</div>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div style= {styleComponent1}>
                    <div className = "PreLoginuser-container">
                        <Link className="PreloginLink" to="/login"  onClick = {function() {typeUser = 2}}>
                            <div id = "PreLoginManager"> <img src={Manager} alt="ManagerImg" /> </div>
                            <div className = "PreLoginFrame" style={{border: "solid #58BAAB"}}>
                                <div className="PreLogintext">Manager</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div style= {styleComponent2}>
                    <div className = "PreLoginuser-container">
                        <Link className="PreloginLink" to="/login" onClick = {function() {typeUser = 0}}>
                            <div id = "PreLoginCustomer"> <img src={Customer} alt="CustomerImg" /> </div>
                            <div className = "PreLoginFrame" style={{border: "solid #58BAAB"}}>
                                <div className="PreLogintext">Customer</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div style= {styleComponent3}>
                    <div className = "PreLoginuser-container">
                        <Link className="PreloginLink" to="/login" onClick = {function() {typeUser = 1}}>
                            <div id = "PreLoginChef"> <img src={Chef} alt="ChefImg" /> </div>
                            <div className = "PreLoginFrame" style={{border: "solid #58BAAB"}}>
                                <div className="PreLogintext">Chef</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }
export {typeUser};
export default PreLogin;