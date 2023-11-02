import React from 'react'
import Logo from '../img/Logo.png'
import Poster from '../img/Poster.png'
import '../LandingPage.css'
import WaterText from '../WaterText'
import {Button} from 'antd'

function LandingPageWeb() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: '#282828'
            }}>
            <WaterText/>
            <div
                style={{
                    width: '80%',
                    margin: '0px auto'
                }}>
                <div style={{
                        paddingTop: '60px'
                    }}>
                    <img
                        src={Logo}
                        style={{
                            width: '130px',
                            height: '65px'
                        }}/>
                    <hr
                        style={{
                            width: '88%',
                            float: 'right',
                            marginTop: '30px',
                            border: 0,
                            background: '#7F7F7F',
                            height: '1px'
                        }}/>
                </div>
                <div
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
                        style={{
                            display: 'inline-flex',
                            justifyContent: 'space-between',
                            width: '100%'
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
                                    textAlign: 'center'
                                }}>
                                <Button
                                    style={{
                                        width: '200px',
                                        height: '50px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        letterSpacing: '0.1em',
                                        margin: '39px 51px 0px 0px'
                                    }}>Museum</Button>
                                <Button
                                    style={{
                                        width: '200px',
                                        height: '50px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        letterSpacing: '0.1em'
                                    }}>About Us</Button>
                            </div>
                            <div
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
                                        style={{
                                            fontSize: '22px',
                                            fontWeight: 'bold',
                                            letterSpacing: '0.1em',
                                            color: '#8C8C8C'
                                        }}>From</p>
                                    <p
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
                                        style={{
                                            fontSize: '22px',
                                            fontWeight: 'bold',
                                            letterSpacing: '0.1em',
                                            color: '#8C8C8C'
                                        }}>To</p>
                                    <p
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
                                src={Poster}
                                style={{
                                    width: '600px',
                                    height: '600px'
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

export default LandingPageWeb