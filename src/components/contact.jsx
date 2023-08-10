import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

function ContactComponent() {
    return (
        <>
            <h1 className="project-title mt-5">İletişim Bilgilerimiz</h1>
            <div className="contact mt-3">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                        <div className="contact-widget">
                            <span><FiPhone /></span>
                            <h4><strong>Telefon</strong></h4>
                            <p>0(242)242432321</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                        <div className="contact-widget">
                            <span><FiMapPin /></span>
                            <h4><strong>Adres</strong></h4>
                            <p>Adres Bilgileri Burada yazacak</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                        <div className="contact-widget">
                            <span><FiClock /></span>
                            <h4><strong>Çalışma Saatleri</strong></h4>
                            <p>08.30-18:00 pm</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                        <div className="contact-widget">
                            <span><FiMail /></span>
                            <h4><strong>E-Posta</strong></h4>
                            <p>mimarlıkofisi@hotmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.940766814345!2d30.667935075552496!3d36.89176526253311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3902df5c6ed87%3A0xc9903ea8899f5e98!2sTMMOB%20Mimarlar%20Odas%C4%B1%20Antalya%20%C5%9Eubesi!5e0!3m2!1str!2str!4v1691614460881!5m2!1str!2str"
                width="100%"
                height="550"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
    );
}

export default ContactComponent;