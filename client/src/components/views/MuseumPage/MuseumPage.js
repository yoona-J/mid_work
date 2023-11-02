/* eslint-disable */

import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Card, Button } from 'antd'
import './MuseumPage.css'
import ImageSlider from '../ImageSlider/ImageSlider'

const { Meta } = Card;

function MuseumPage() {

    const [Uploads, setUploads] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(9)
    const [PostSize, setPostSize] = useState(0)

    //paginational
    useEffect(() => {

        let body = {
            skip: Skip,
            limit: Limit
        }

        getUploads(body)

    }, [])

    //loadMore
    const getUploads = (body) => {
        Axios
            .post('/api/upload/uploads', body)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data) 
                    
                    console.log('loadmore=', body.loadMore)
                    // loadMoreHandler의 body를 가져온다. --> 값이 있으면 skip +
                    // Limit 값을 불러와 게시물을 나타낸다
                    if (body.loadMore) {
                        setUploads([
                            ...Uploads,
                            ...response.data.productInfo
                        ])
                    } 
                    else {
                        setUploads(response.data.productInfo)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert("상품을 가져오는데 실패했습니다.")
                }
            })
    }

    //더보기 버튼 res
    const loadMoreHandler = () => {

        let skip = Skip + Limit

        let body = {
            skip: skip,
            limit: Limit,
            loadMore: true
        }

        getUploads(body)
        setSkip(skip)

    }

    const renderCards = Uploads.map((upload, index) => {

        console.log('upload', upload)

        return <div className='museum_card_div' style={{marginTop: '100px', marginBottom: '80px'}} key={index}>
        <a href={`/museum/${upload._id}`}>
            <Card
                style={{
                    width: '300px',
                    height: '400px',
                    background: '#343434',
                    border: '1px solid #343434',
                    borderRadius: '10px',
                    boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                    objectFit: 'contain'
                }}
                cover={
                    <ImageSlider images = { upload.images } />
                }
            >
                <Meta title={upload.name} description={upload.title} style={{letterSpacing: '0.1em'}} />
            </Card>
        </a>
    </div>
    })

    return (
        <div style={{width: '100%', height:'100%', background: '#282828'}}>
            <div className='font' style={{width: '80%', margin: '0px auto', textAlign: 'center'}}>
                <div className='museum_category_button_padding' style={{paddingTop: '123px'}}>
                    <div className='museum_category_button' style={{width: '200px', height: '50px', borderRadius: '10px', backgroundColor: '#343434', boxShadow: '4px 8px 30px 5px rgba(0, 0, 0, 0.15)', margin: '0px auto'}}>
                        <p style={{fontWeight: '700', fontSize: '20px', letterSpacing: '0.1em', color: '#C2C2C2', paddingTop: '11px'}}>Category</p>
                    </div>
                </div>
                <div className='museum_main_div' style={{display: 'inline-flex', flexFlow: 'row wrap', justifyContent: 'center', width: '80%', gap: '115px'}}>
                    {renderCards}
                </div>
                {PostSize >= Limit && (
                    <div className='museum_more_button' style={{padding: '113px 0px 80px 0px', margin: '0px auto'}}>
                        <Button onClick={loadMoreHandler} style={{width: '140px', height: '70px', backgroundColor: '#343434', borderRadius: '10px', boxShadow: '4px 8px 30px 5px rgba(0, 0, 0, 0.15)', border: '1px solid #343434'}}>
                            <p style={{color: '#CFCFCF', fontSize: '20px', letterSpacing: '0.1em', paddingTop: '20px'}}>more</p>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MuseumPage