import LogoContact from "../../../assets/icons/whatsapp.svg"
import Ifood from "../../../assets/icons/ifood.svg"
import Instagram from "../../../assets/icons/instagram.svg"

import './styles.css'

export const Contact = () => {
    return (
        <div className="Contact">
            <a href="https://www.ifood.com.br" target="_blank" rel="noopener noreferrer"><img src={Ifood} alt={Ifood} /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt={Instagram} /></a>

            <div className="contactWhatsapp">
                <a href="https://www.whatsapp.com/?lang=pt_br" target="_blank" rel="noopener noreferrer"><img src={LogoContact} alt={LogoContact} /></a>
                <p>Contato</p>
            </div>
        </div>
    );
}
export default Contact
