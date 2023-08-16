import React, { useState } from 'react';
import LayoutComponent from "../components/layout";
import SliderComponent from "../components/slider";
import TitleComponent from "../components/title";
import AboutComponent from '../components/about';
import FooterComponent from '../components/footer';
import Info1Component from '../components/info1';
import Info2Component from '../components/info2';

function HomePage() {
    const navbarColorClass = 'navbar-transparent';  
    return (
        <>
                    <LayoutComponent navClass={navbarColorClass} />
                    <div className="row" >
                        <TitleComponent />
                    </div>

                    <div className="row">
                    <AboutComponent />
                    </div>
                    <div className="row">
                    <SliderComponent />
                    </div>
                  
                    <div className="row">
                    <Info1Component />
                    </div>

                <div className="row">
                    <Info2Component />
                    </div>

              
                    <div className="row">
                    <FooterComponent/>
                    </div>

        </>
    )
}
export default HomePage;