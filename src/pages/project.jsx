import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ProjectComponent from '../components/project';
import FooterComponent from '../components/footer';
import LayoutComponent from '../components/layout';
function ProjectPage() {
    document.getElementById('root').style.backgroundColor='white';
    const [activeTab] = useState('project'); // Başlangıçta "home" aktif
    return (
        <>
            <LayoutComponent navClass={activeTab} />
            <ProjectComponent/>
            <FooterComponent/>
       </>
    )
}
export default ProjectPage;