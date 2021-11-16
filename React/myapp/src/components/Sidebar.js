import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarDataCus, {SidebarDataAdmin, SidebarDataChef, SidebarDataMngr} from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './Sidebar.css'
// import { Form, FormGroup, Input, Button } from 'reactstrap';
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 15%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

function Sidebar({type}) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () =>{setSidebar(!sidebar);
    let x = document.querySelector(".MenuCard")
    if (x !=null)
        x.classList.toggle('active');
  }
  function show(){
    if (type === -1) return <div></div>
    if (type === 0)
      return SidebarDataCus.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      })
    if (type === 1)
      return SidebarDataChef.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      })
    if (type === 2)
      return SidebarDataMngr.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      })
    if (type === 3)
      return SidebarDataAdmin.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      })
  }
  return (
    <div className={type === -1 ? "close-side-bar" : "open-side-bar"}>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1 font-color='#000' id = "titleFeature" style={{marginLeft: "20px"}}>Qui Take</h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {show()}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
