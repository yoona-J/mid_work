import React from 'react'
import { Carousel } from 'antd'

function ProductImage(props) {
    return (
        <div>
            <Carousel>
                {props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{width: '500px', height: '500px', objectFit: 'contain'}}
                        src={`http://localhost:5000/${image}`}
                        alt='img' />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ProductImage