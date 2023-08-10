import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ContactComponent from '../components/contact';
import FooterComponent from '../components/footer';
import LayoutComponent from '../components/layout';
function ContactPage() {
    document.getElementById('root').style.backgroundColor='white';
    const [activeTab, setActiveTab] = useState('contact'); // Başlangıçta "home" aktif
    return (
        <>
            <LayoutComponent navClass={activeTab} />
            <Parallax pages={2}>
                <ParallaxLayer offset={0} className="parallax-layer4 w-100" >
                        <ContactComponent/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} className="parallax-layer5 w-100" >
                        <FooterComponent/>
                </ParallaxLayer>

            </Parallax>

        </>
    )

}

export default ContactPage;