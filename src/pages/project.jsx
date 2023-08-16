import React, { useEffect, useState } from 'react';
import ProjectComponent from '../components/project';
import FooterComponent from '../components/footer';
import LayoutComponent from '../components/layout';
function ProjectPage() {
    useEffect(() => {
   
        const rootDiv = document.getElementById('root'); 
        rootDiv.classList.add('contact-root');
    
        return () => {
          //Sayfadan çıkınca
          rootDiv.classList.remove('contact-root');
        };
      }, []);
    
    const [activeTab] = useState('project'); 
    return (
        <>
            <LayoutComponent navClass={activeTab} />
            <ProjectComponent/>
            <FooterComponent/>
       </>
    )
}
export default ProjectPage;