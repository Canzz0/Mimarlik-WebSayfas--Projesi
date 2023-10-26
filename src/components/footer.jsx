import { FiInstagram,FiTwitter,FiFacebook, } from "react-icons/fi";
function FooterComponent(){
    return(
        <>
            <div class="footer text-center">
        <footer>
            <div class="social">
                <a href="#"class="icon-f"><i ><FiFacebook /></i></a>
                <a href="#"class="icon-i"><i ><FiInstagram/></i></a>
                <a href="#"class="icon-t"><i ><FiTwitter/></i></a>
            </div>
            <span class="footer-text"> 
                'Kaliteli Hizmetin Tek Adresi'
            </span>
            <div className="row">
            <h3 className="footer-title"> Mimarlık Ofisi © 2023</h3>
            </div>
        </footer>
    </div>
  
        </>
    )

}

export default FooterComponent;
