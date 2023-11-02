import React, { useState } from 'react';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import Logo from './img/Logo.png'

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  const navbar = () => {
    if (window.location.href === 'http://localhost:3000/' || window.location.href === 'http://3.37.190.182/') {
      return <>
        <nav style={{display: 'none'}} />
      </>
    } else {
      return (
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
          <div className="menu__container">
            <a href="/" className='menu_left'>
              <Icon type='home' theme='filled' style={{fontSize: '35px', color: '#fff'}} />
            </a>
            <hr style={{width: '350px', backgroundColor: '#fff', border: 0, height: '1px'}} />
            <a href='/'>
            <div className="menu__logo">
              <img src={Logo} alt='logo' style={{width: '130px', height: '65px'}}/>
            </div>
            </a>
            <hr style={{width: '350px', backgroundColor: '#fff', border: 0, height: '1px'}} />
              <Button
                className="menu__mobile-button"
                type="text"
                onClick={showDrawer}
                style={{ background: 'none', border: 'none' }}
              >
                <Icon type="menu" style={{color: '#fff', fontSize: '35px'}} />
              </Button>
              <Drawer
                title=""
                placement="right"
                className="menu_drawer"
                closable={false}
                onClose={onClose}
                visible={visible}
              >
                <RightMenu mode="inline" />
              </Drawer>
          </div>
        </nav>
      )
    }
  }

  return (
    <>
      {navbar()}
    </>
  )
}

export default NavBar