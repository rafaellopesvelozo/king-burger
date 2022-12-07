import LogoFooter from "../../assets/logo.png"
import Ifood from '../../assets/icons/ifood.svg'
import Instagram from '../../assets/icons/instagram.svg'

import './styles.css'

const Footer = () => {
    return (
        <footer className='Footer' id='scrollContact' >
            <div>
                <div className="Logo-footer">
                    <img src={LogoFooter} alt={LogoFooter} />
                    <div id="rowFooter"></div>
                </div>
                <div className="scrool-footer">
                    <section>
                        <ul>
                            <li><a href="#scrollHome">Home</a></li>
                            <li><a href="#scrollocalization">Localização</a></li>
                            <li><a href="#scrollmenu">Cardápio</a></li>
                            <li><a href="#scrollHome">Sobre</a></li>
                        </ul>
                    </section>
                    <div id="rowFooter"></div>
                </div>
                <div className="social-media">
                    <img src={Ifood} alt={Ifood} />
                    <img src={Instagram} alt={Instagram} />
                    <div id="rowFooter"></div>
                </div>
            </div>
            <div className="Copyright">
                <div id="rowFooterCopiright"></div>
                <p><span>2022 © EmpireBurger.</span> Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
export default Footer;
