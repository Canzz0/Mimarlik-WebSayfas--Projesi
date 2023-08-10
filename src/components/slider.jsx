import React from 'react';
import { Carousel } from 'react-carousel3';
import { Link } from 'react-router-dom';
function SliderComponent() {
    return (
        <>
            <h1 className="slider-title">Hizmetlerimiz</h1>
            <div className='slider'>
                <Carousel height={260} width={880} yOrigin={42} yRadius={48} autoPlay={true} aut>
                    <div key={1} >
                        <h3 className="slider-info">Güvenli Alışveriş</h3>
                        <img width={250} src='../css/images/laptop.png' alt="" />
                    </div>
                <div key={2} >
                    <a href="">
                        <img width={250} src='../css/images/shoes.png' alt="" />
                    </a>
                </div>
                <div key={3} >
                    <Link>
                        <img width={250} src='../css/images/t-shirt.png' alt="" />
                    </Link>
                </div>
            </Carousel>
        </div>
    </>
      
    )
}
export default SliderComponent;