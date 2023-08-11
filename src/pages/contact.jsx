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
            <ContactComponent/>
            <FooterComponent/>
       </>
    )
}
export default ContactPage;