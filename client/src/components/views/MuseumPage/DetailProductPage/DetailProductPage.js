/* eslint-disable */

import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import {Button, Carousel, Modal, Tabs} from 'antd'
import './DetailProductPage.css'
import ProductImage from './ProductImage'

function DetailProductPage(props) {

    const uploadId = props.match.params.uploadId

    const [Exhibit, setExhibit] = useState('')

    useEffect(() => {
      Axios
        .get(`/api/upload/uploads_by_id?id=${uploadId}&type=single`)
        .then(response => {
            console.log(response.data[0])
            setExhibit(response.data[0])
        })
    }, [])
    
    const mapper = () => {
        if (Exhibit.images !== undefined) {
            return <ProductImage images = { Exhibit.images } />
        }
    }

    const tab = (key) => {
        console.log(key)
    }

    const [Open, setOpen] = useState(false);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
                    className='detail_full_div'
                    style={{
                        padding: '59px 0px 59px 0px'
                    }}>
                    <div
                        className='detail_main_div'
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '30px',
                            background: '#343434',
                            boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.15)',
                            margin: '0px auto'
                        }}>
                        <div
                            className='detail_main_div_padding'
                            style={{
                                padding: '99px 177px 111px 175px'
                            }}>
                            <div
                                className='detail_sub_div'
                                style={{
                                    display: 'inline-flex',
                                    color: '#fff',
                                    alignItems: 'center',
                                    gap: '140px'
                                }}>
                                <div>
                                    {mapper()}
                                </div>
                                <div className='detail_text_div'>
                                    <p
                                        className='detail_title'
                                        style={{
                                            fontSize: '24px',
                                            letterSpacing: '0.3em',
                                            marginBottom: '35px'
                                        }}>{Exhibit.title}</p>
                                    <p
                                        className='detail_letter'
                                        style={{
                                            fontSize: '16px',
                                            letterSpacing: '0.1em',
                                            lineHeight: '23px',
                                            marginBottom: '35px',                         
                                            whiteSpace: 'pre-wrap',
                                            wordBreak: 'break-all',
                                        }}>
                                        {Exhibit.discription}
                                    </p>
                                    <Button
                                        className='detail_button'
                                        onClick={showModal}
                                        style={{
                                            width: '109px',
                                            height: '49px',
                                            background: '#575757',
                                            borderRadius: '10px',
                                            boxShadow: '4px 8px 30px 5px rgba(0, 0, 0, 0.15)',
                                            border: 0,
                                            fontSize: '16px',
                                            color: '#fff',
                                            marginRight: '81px'
                                        }}>B U Y</Button>
                                        <Modal
                                            title='작품 구매 연락처 안내'
                                            visible={isModalOpen}
                                            onCancel={handleCancel}
                                            width={500}
                                            footer={[
                                                <Button key='back' className='detail_modal_btn' onClick={handleCancel} style={{ width: '470px', height: '40px', borderRadius: '20px', background: '#575757', color: '#fff'}}>
                                                    확인
                                                </Button>
                                            ]}>
                                                <div>
                                                    <p>artudent는 작품 위탁 판매를 진행하지 않고 있습니다.</p>
                                                    <p>실물 작품 구매는 작가 개인 연락처로 연락 부탁드립니다.</p>
                                                    <p>{Exhibit.name} 작가 : {Exhibit.content}</p>
                                                </div>
                                            </Modal>
                                        <a href='https://www.wadiz.kr/web/campaign/detail/198188?utm_source=wadizshare_in&utm_medium=url'>
                                        <Button
                                            style={{
                                                width: '109px',
                                                height: '49px',
                                                background: '#575757',
                                                borderRadius: '10px',
                                                boxShadow: '4px 8px 30px 5px rgba(0, 0, 0, 0.15)',
                                                border: 0,
                                                fontSize: '16px',
                                                color: '#fff'
                                            }}>FUNDING</Button>
                                        </a>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '110px'
                                }}>
                                <Tabs
                                    defaultActiveKey="1"
                                    centered="centered"
                                    onChange={tab}
                                    style={{
                                        width: '600px',
                                        color: '#fff'
                                    }}>
                                    <Tabs.TabPane tab="Artist" key='1'>
                                        <table
                                            style={{
                                                textAlign: 'left',
                                                margin: '1rem auto',
                                                width: '300px'
                                            }}>
                                            <tbody>
                                                <tr>
                                                    <td>이름</td>
                                                    <td>{Exhibit.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>출생</td>
                                                    <td>{Exhibit.birth}</td>
                                                </tr>
                                                <tr>
                                                    <td>소개</td>
                                                    <td>{Exhibit.introduce}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Information" key='2'>
                                        <table
                                            style={{
                                                textAlign: 'left',
                                                margin: '1rem auto',
                                                width: '300px'
                                            }}>
                                            <tbody>
                                                <tr>
                                                    <td>제작 연도</td>
                                                    <td>{Exhibit.year}</td>
                                                </tr>
                                                <tr>
                                                    <td>작품 크기</td>
                                                    <td>{Exhibit.size}</td>
                                                </tr>
                                                <tr>
                                                    <td>작품 소재</td>
                                                    <td>{Exhibit.meterial}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Tabs.TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProductPage