import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>İletişim</h4>
                    <p>Email: info@mimarlikofisi.com</p>
                    <p>Tel: +90 555 123 4567</p>
                    <p>Adres: İstanbul, Türkiye</p>
                </div>
                
                <div className="footer-section">
                    <h4>Sosyal Medya</h4>
                    <div className="social-icons">
                        <a href="#" className="social-icon">
                            <FiFacebook />
                        </a>
                        <a href="#" className="social-icon">
                            <FiInstagram />
                        </a>
                        <a href="#" className="social-icon">
                            <FiTwitter />
                        </a>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h4>Motto</h4>
                    <p className="motto">'Kaliteli Hizmetin Tek Adresi'</p>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>© 2024 Mimarlık Ofisi. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
}

export default FooterComponent;
