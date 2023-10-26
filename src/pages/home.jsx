import React, { useEffect, useState } from 'react';
import AboutComponent from '../components/about';
import FooterComponent from '../components/footer';
import Info1Component from '../components/info1';
import Info2Component from '../components/info2';
import LayoutComponent from "../components/layout";
import LoaderComponent from '../components/loader';
import SliderComponent from "../components/slider";
import TitleComponent from "../components/title";

function HomePage() {
    const navbarColorClass = 'navbar-transparent';
    const [imagesLoaded, setImagesLoaded] = useState(false);


    //RESİMLER YÜKLENMEDEN SAYFA YÜKLENMESİN
    useEffect(() => {
        const image1 = new Image();
        image1.src = '../css/images/bina-1.png';
    
        const image2 = new Image();
        image2.src = '../css/images/bina-2.png';
    
        let image1Loaded = false;
        let image2Loaded = false;
    
        const checkBothImagesLoaded = () => {
            if (image1Loaded && image2Loaded) {
                setImagesLoaded(true);
            }
        };
    
        image1.onload = () => {
            image1Loaded = true;
            checkBothImagesLoaded();
        };
    
        image2.onload = () => {
            image2Loaded = true;
            checkBothImagesLoaded();
        };
    }, []);

    if (!imagesLoaded) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor:'white', height: "100vh" }}>
            <LoaderComponent />
            </div>
       
        );
    }

    return (
        <>
            <LayoutComponent navClass={navbarColorClass} />
            <div className="row">
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
                <FooterComponent />
            </div>
        </>
    );
}

export default HomePage;
