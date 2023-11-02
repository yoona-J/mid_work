import React from 'react'
import { Carousel } from 'antd'

function ImageSlider(props) {
    return (
        <div>
            <Carousel>
                {props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{width: '250px', height: '250px', margin: '1rem auto'}}
                        src={`http://localhost:5000/${image}`}
                        alt='img' />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider