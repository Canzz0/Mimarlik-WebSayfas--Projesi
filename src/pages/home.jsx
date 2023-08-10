import React, { useState } from 'react';
import LayoutComponent from "../components/layout";
import SliderComponent from "../components/slider";
import TitleComponent from "../components/title";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import AboutComponent from '../components/about';
import ContactComponent from '../components/contact';
import ProjectComponent from '../components/project';
import FooterComponent from '../components/footer';

function HomePage() {
    const navbarColorClass = 'navbar-transparent';  


    return (
        <>
            
            <Parallax pages={5} onScroll={(offset) => console.log('Offset:', offset)}>
                <ParallaxLayer offset={0} className="parallax-layer1" >
                    <LayoutComponent navClass={navbarColorClass} />
                    <div className="row" >
                        <TitleComponent />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} className="parallax-layer2" >
                    <AboutComponent />
                </ParallaxLayer>
                <ParallaxLayer offset={2} className="parallax-layer3" >
                        <ProjectComponent/>
                </ParallaxLayer>
                <ParallaxLayer offset={3} className="parallax-layer4" >
                        <SliderComponent/>
                </ParallaxLayer>
                <ParallaxLayer offset={4} className="parallax-layer5" >
                        <FooterComponent/>
                </ParallaxLayer>

            </Parallax>

        </>
    )

}

export default HomePage;