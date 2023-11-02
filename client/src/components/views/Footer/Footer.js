import React from 'react'
import Logo from './img/Logo.png'
import './Footer.css'

function Footer() {

    const footer = () => {
        if (window.location.href === 'http://localhost:3000/' || window.location.href === 'http://3.37.190.182/') {
            return <>
                <div style={{display: 'none'}} />
            </>
        } else {
            return <>
            <div className='footer_div' style={{backgroundColor: '#3E3E3E', width: '100%', height: '200px', display: 'inline-block'}}>
                <a href='/'>
                    <img src={Logo} alt='logo' style={{ width: '130px', height: '65px', margin: '67px 0px 68px 110px'}}/>
                </a>
                <div style={{float: 'right', margin: '46px 46px 46px 0px', color: '#fff', textAlign: 'right'}}>
                    <p>고객 문의</p>
                    <a href='/about' style={{color: '#fff'}}>
                        <p>About Artudent</p>
                    </a>
                    <p>(c) copyright all right reserved</p>
                </div>
            </div>
            </>
        }
    }
    return (
        <div>
            {footer()}
        </div>
    )
}

export default Footer
