import Ifood from "../../assets/icons/ifood.svg"
import Instagram from "../../assets/icons/instagram.svg"
import LogoContact from "../../assets/icons/whatsapp.svg"
import "./styles.css"

const Mobile = ({ open }) => {

    return (
        <div className={`${open ? "open-menu-mobile" : "close-menu-mobile "} `}  >
            <div className="Menu-mobile">
                <ul>
                    <li> <a href="#scrollHome">Home</a></li>
                    <li><a href="#scrollPromotion">Promoção</a></li>
                    <li><a href="#scrollmenu">Cardápio</a> </li>
                    <li><a href="#scrollComent">Comentário</a></li>
                    <li><a href="#scrollContact">Contato</a></li>
                </ul>
                <div className="Contact-mobile">
                    <a href="https://www.ifood.com.br" target="_blank"  rel="noopener noreferrer"><img src={Ifood} alt={Ifood} /></a>
                    <a href="https://www.instagram.com" target="_blank"  rel="noopener noreferrer"> <img src={Instagram} alt={Instagram} /></a>

                    <div className="mobile-contactWhatsapp">
                        <a href="https://www.whatsapp.com/?lang=pt_br" target="_blank"  rel="noopener noreferrer"><img src={LogoContact} alt={LogoContact} /></a>
                        <p>Contato</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Mobile;
