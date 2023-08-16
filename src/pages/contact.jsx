import React, { useEffect, useState } from 'react';
import ContactComponent from '../components/contact';
import FooterComponent from '../components/footer';
import LayoutComponent from '../components/layout';
function ContactPage() {
  useEffect(() => {
   
    const rootDiv = document.getElementById('root'); 
    rootDiv.classList.add('contact-root');

    return () => {
      //Sayfadan çıkınca
      rootDiv.classList.remove('contact-root');
    };
  }, []);

  const [activeTab] = useState('contact'); 
  return (
    <>
      <LayoutComponent navClass={activeTab} />
      <ContactComponent />
      <FooterComponent />
    </>
  )
}
export default ContactPage;