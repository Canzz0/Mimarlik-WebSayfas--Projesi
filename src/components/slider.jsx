import React from 'react';
import { Carousel } from 'react-carousel3';
import { Link } from 'react-router-dom';
function SliderComponent() {
    return (
        <>
            <div className="row">
            <div className='slider-wrapper'>
                <h1 className="slider-title">Hizmetlerimiz</h1>
            <div className='slider'>
                <Carousel height={240} width={830} yOrigin={42} yRadius={48} autoPlay={true} aut>
                    <div key={1} >
                        <h3 className="slider-info">Hızlı Çözüm</h3>
                        <img className="slider-image" src="../css/images/fast.jpg" alt="" />
 
                    </div>
                <div key={2} >
                    <h3 className="slider-info">Kaliteli Hizmet</h3>
                    <img className="slider-image" src="../css/images/work.jpg" alt="" />
 
                </div>
                <div key={3} >
                    <h3 className="slider-info">Mutlu Müşteri</h3>
                    <img className="slider-image" src="../css/images/happy.jpg" alt="" />
 
                </div>
            </Carousel>
        </div>

            </div>
            </div>
            

        </>

    )
}
export default SliderComponent;