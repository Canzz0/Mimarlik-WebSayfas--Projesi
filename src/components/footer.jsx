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
            <p class="copyright">Mimarlık Ofisi © 2018</p>
        </footer>
    </div>
  
        </>
    )

}

export default FooterComponent;