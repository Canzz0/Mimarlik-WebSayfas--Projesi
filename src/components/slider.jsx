import React from 'react';
import { Carousel } from 'react-carousel3';

function SliderComponent() {
    return (
        <section className="slider-wrapper">
            <h2 className="slider-title">Hizmetlerimiz</h2>
            <div className="slider">
                <Carousel 
                    height={280} 
                    width={1200} 
                    yOrigin={42} 
                    yRadius={48} 
                    autoPlay={true}
                    interval={5000}
                    showArrows={true}
                    showDots={true}
                >
                    <div key={1}>
                        <h3 className="slider-info">Hızlı Çözüm</h3>
                        <img 
                            className="slider-image" 
                            src="../css/images/fast.jpg" 
                            alt="Hızlı çözüm hizmeti" 
                        />
                    </div>
                    <div key={2}>
                        <h3 className="slider-info">Kaliteli Hizmet</h3>
                        <img 
                            className="slider-image" 
                            src="../css/images/work.jpg" 
                            alt="Kaliteli hizmet" 
                        />
                    </div>
                    <div key={3}>
                        <h3 className="slider-info">Mutlu Müşteri</h3>
                        <img 
                            className="slider-image" 
                            src="../css/images/happy.jpg" 
                            alt="Mutlu müşteri deneyimi" 
                        />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

export default SliderComponent;