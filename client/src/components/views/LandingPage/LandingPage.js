import React from 'react'
import Logo from './img/Logo.png'
import Poster from './img/Poster.png'
import '../LandingPage/LandingPage.css'
import WaterText from './WaterText'
import {Button} from 'antd'

function LandingPage() {

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: '#282828'
            }}>
            <WaterText />
            <div
                style={{
                    width: '80%',
                    margin: '0px auto'
                }}>
                <div className='logo__bar'>
                    <img
                        src={Logo}
                        alt='logo'
                        style={{
                            width: '130px',
                            height: '65px'
                        }}/>
                    <hr
                        style={{
                            width: '85%',
                            float: 'right',
                            marginTop: '30px',
                            border: 0,
                            background: '#7F7F7F',
                            height: '1px'
                        }}/>
                </div>
                <div
                    className='main_div'
                    style={{
                        width: '100%',
                        height: '100%',
                        background: '#343434',
                        marginTop: '35px',
                        borderRadius: '50px',
                        padding: '100px',
                        marginBottom: '100px'
                    }}>
                    <div
                        className='container'
                        style={{
                            display: 'inline-flex',
                            justifyContent: 'space-evenly',
                            width: '100%',
                            gap: '30px'
                        }}>
                        <div
                            style={{
                                margin: 'auto 0'
                            }}>
                            <p
                                id='gradient'
                                style={{
                                    fontSize: '50px',
                                    fontWeight: 'bold',
                                    marginBottom: '16px'
                                }}>1st</p>
                            <p
                                id='text'
                                style={{
                                    fontSize: '36px',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    letterSpacing: '0.1em',
                                    marginBottom: '16px'
                                }}>EXHIBITION,</p>
                            <p
                                id='text'
                                style={{
                                    fontSize: '36px',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    letterSpacing: '0.1em'
                                }}>SHOW YOUR RELAXATION</p>
                            <div
                                style={{
                                    textAlign: 'center',
                                    gap: '40px',
                                    display: 'inline-flex',
                                    width: '100%',
                                    justifyContent: 'space-evenly'
                                }}>
                                <a href='./museum'>
                                <Button
                                    style={{
                                        width: '200px',
                                        height: '50px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        letterSpacing: '0.1em',
                                        // marginRight:'41px'
                                    }}>Museum</Button>
                                    </a>
                                    <a href='./about'>
                                <Button
                                    style={{
                                        width: '200px',
                                        height: '50px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        letterSpacing: '0.1em'
                                    }}>About Us</Button>
                                    </a>
                            </div>
                            <div
                                className='date_div'
                                style={{
                                    marginTop: '75px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    gap: '10px'
                                }}>
                                <div
                                    style={{
                                        width: '100%',
                                        display: 'inline-flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'column'
                                    }}>
                                    <p
                                        className='date_title'
                                        style={{
                                            fontSize: '22px',
                                            fontWeight: 'bold',
                                            letterSpacing: '0.1em',
                                            color: '#8C8C8C'
                                        }}>From</p>
                                    <p
                                        className='date'
                                        style={{
                                            fontSize: '32px',
                                            fontWeight: 'bold',
                                            letterSpacing: '0.1em',
                                            color: '#C8C8C8'
                                        }}>NOV 4th</p>
                                </div>
                                <div
                                    style={{
                                        width: '100%',
                                        display: 'inline-flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'column',
                                        marginLeft: 'auto'
                                    }}>
                                    <p
                                        className='date_title'
                                        style={{
                                            fontSize: '22px',
                                            fontWeight: 'bold',
                                            letterSpacing: '0.1em',
                                            color: '#8C8C8C'
                                        }}>To</p>
                                    <p
                                        className='date'
                                        style={{
                                            fontSize: '32px',
                                            fontWeight: 'bold',
                                            letterSpacing: '0.1em',
                                            color: '#C8C8C8'
                                        }}>NOV 13th</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                className='image_div'
                                src={Poster}
                                alt='poster'
                                style={{
                                    width: '538px',
                                    height: '650px',
                                    // borderRadius: '20px'
                                }}/>
                        </div>
                    </div>
                </div>
                <div>
                    @artudent
                </div>
            </div>
        </div>
    )
}

export default LandingPage
