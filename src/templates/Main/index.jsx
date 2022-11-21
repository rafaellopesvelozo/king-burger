import Offers from '../../components/componentsMain/Offers';
import Brand from '../../components/componentsMain/Brands';
import MenuEmpire from '../../components/componentsMain/MenuEmpire';
import CardsComents from '../../components/componentsMain/CardComents';
import CardDelivery from '../../components/componentsMain/Cardsdeliveries';

import WomanEat from '../../assets/card-woman-eating.png';
import BurguerPublications from '../../assets/Burger.jpg'

import './styles.css'

const Main = () => {
    return (
        <div id="scrollHome" className='Main'>
            <section>
                <div className='bg-img-hero'>
                    <div className='info-king-burguer'>
                        <p>Uma nova experiência!</p>
                        <h1><strong>KING <span>BURGUER</span></strong></h1>
                        <p>Para quem tem um <span>Apetite de um REI!</span></p>
                    </div>
                    <div className="btn-king-gurguer">
                        <button>Comprar Agora</button>
                    </div>
                </div>
            </section>

            <div> <Brand /></div>
            <div><Offers /></div>
            <div><MenuEmpire /></div>

            <div className='personalized-service'>
                <div className='service'>
                    <div className='woman-eat'>
                        <img src={WomanEat} alt={WomanEat} />
                    </div>
                    <div className='information'>
                        <p>ATENDIMENTO <br /> <span>PERSONALIZADO</span></p>
                        <p>todos os nossos clientes são tratados como rei e <br /> rainha, com a nossa culinária artesanal.</p>

                        <div className='btn-menu'>
                            <button>Cardápio Imperial</button>
                        </div>
                    </div>
                </div>
                <div id="row"><hr /></div>

                <div><CardsComents /></div>
            </div>

            <div className="publications-social-media">
                <div className='title-publication'>
                    <p>PUBLICAÇÕES DO INSTAGRAM</p>
                    <p>todos os nossos clientes são tratados como rei e rainha, com a nossa culinária artesanal.</p>
                </div>
                <div className='publications-images'>
                    <img src={BurguerPublications} alt={BurguerPublications} />
                    <img src={BurguerPublications} alt={BurguerPublications} />
                    <img src={BurguerPublications} alt={BurguerPublications} />
                    <img src={BurguerPublications} alt={BurguerPublications} />
                    <img src={BurguerPublications} alt={BurguerPublications} />
                </div>
                <div className='empireBurger'>
                    <p>#EMPIREBURGER .#EMPIREBURGER .#EMPIREBURGER .#EMPIREBURGER .#EMPIREBURGER . #EMPIREBURGER . #EMPIREBURGER . #EMPIREBURGER . #EMPIREBURGER . </p>
                </div>
            </div>

            <div className='our-deliveries'>
                <CardDelivery />
            </div>

            <div id='scrollocalization' className='localization'>
                <div className="localization-title">
                    <p>ONDE FICA NOSSO CASTELO</p>
                    <p>Estaremos de portas abertas para a nossa realeza.</p>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197490294439!2d-46.65868298497128!3d-23.561349567477137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1668784081534!5m2!1spt-BR!2sbr"
                        title="This is a unique title"
                        width="600"
                        height="450"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen="">
                    </iframe>
                </div>
            </div>
        </div>
    );
}
export default Main;
