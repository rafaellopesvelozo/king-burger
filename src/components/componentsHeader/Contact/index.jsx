import LogoContact from "../../../assets/icons/whatsapp.svg"
import Ifood from "../../../assets/icons/ifood.svg"
import Instagram from "../../../assets/icons/instagram.svg"

import './styles.css'

export const Contact = () => {
    return (
        <div className="Contact">
            <img src={Ifood} alt={Ifood} />
            <img src={Instagram} alt={Instagram} />

            <div className="contactWhatsapp">
                <img src={LogoContact} alt={LogoContact} />
                <p>Contato</p>
            </div>
        </div>
    );
}
export default Contact
