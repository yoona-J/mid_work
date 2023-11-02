import React from 'react'
import './AboutPage.css'
import AboutImage from './img/AboutImage.png'

function AboutPage() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: '#282828'
            }}>
            <div
                className='font'
                style={{
                    width: '80%',
                    margin: '0px auto',
                    textAlign: 'center'
                }}>
                <div
                    className='about_div_padding'
                    style={{
                        paddingTop: '62px',
                        paddingBottom: '86px'
                    }}>
                    <div
                        className='about_full_div'
                        style={{
                            width: '100%',
                            height: '800px',
                            background: '#343434',
                            borderRadius: '30px',
                            boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.05)',
                            margin: '0px auto',
                        }}>
                        <div
                            className='about_main_div'
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                margin: '150px 75px 0px 74px',
                                gap: '60px'
                            }}>
                            <div>
                                <img
                                    src={AboutImage}
                                    alt='mainImage'
                                    style={{
                                        width: '800px',
                                        height: '500px'
                                    }}/>
                            </div>
                            <div
                                style={{
                                    color: '#fff',
                                    // marginRight: '75px'
                                }}>
                                <p
                                    className='about_title_div'
                                    style={{
                                        fontSize: '24px',
                                        letterSpacing: '0.1em'
                                    }}>Artudent</p>
                                <div
                                    className='about_letter_div'
                                    style={{
                                        fontSize: '15px',
                                        letterSpacing: '0.1em',
                                        lineHeight: '26px'
                                    }}>
                                    <p>
                                        ARTUDENT는 학생 작가 및 예비작가에게 다양한 온/오프라인 지원 서비스를 제공함으로써 작가들의 가치를 높이는 서비스 플랫폼입니다.
                                    </p>
                                    <p>
                                        국내 학생작가는 낮은 인지도와 경력의 부족함으로 인하여, 작가로서 활동할 수 있는 기회가 축소되고 있습니다.
                                    </p>
                                    <p>
                                        학생작가의 활동을 지원하는 다양한 서비스를 통해 작가로서의 새로운 가치를 발견하도록 도와줍니다.
                                    </p>
                                    <p>
                                        플랫폼 내에 다양한 작가 지원 서비스를 통해 작가들은 경력 부족에 대한 문제를 해결하고, 더불어 전시, 판매, 그리고 홍보까지의 작품활동에 대한
                                        고민을 해결합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage