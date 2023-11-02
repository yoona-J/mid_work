import React from 'react';
import { Icon, Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode} style={{background: 'none'}}>
    <Menu.Item key="home">
      <a href="/">
        <Icon type='home' theme='filled' style={{fontSize: '35px', color: '#fff'}} />
      </a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu