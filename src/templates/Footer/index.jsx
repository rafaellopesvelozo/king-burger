import LogoFooter from "../../assets/logo.png"
import Ifood from '../../assets/icons/ifood.svg'
import Instagram from '../../assets/icons/instagram.svg'

import './styles.css'

const Footer = () => {
    return (
        <div id='scrollContact' className='Footer'>
            <div>
                <div className="Logo-footer">
                    <img src={LogoFooter} alt={LogoFooter} />
                </div>
                <div className="scrool-footer">
                    <section>
                        <ul>
                            <li><a href="#scrollHome">Home</a></li>
                            <li><a href="#scrollocalization">Localização</a></li>
                            <li><a href="#scrollmenu">Cardápio</a></li>
                            <li><a href=" ">Sobre</a></li>
                        </ul>
                    </section>
                </div>
                <div className="social-media">
                    <img src={Ifood} alt={Ifood} />
                    <img src={Instagram} alt={Instagram} />
                </div>
            </div>
            <hr />
            <div className="Copyright">
                <p><span>2022 © EmpireBurger.</span> Todos os direitos reservados.</p>
            </div>
        </div>
    );
}
export default Footer;
