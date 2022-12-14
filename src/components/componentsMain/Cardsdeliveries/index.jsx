import CardPhone from '../../../assets/card-phone.png'
import Whats from '../../../assets/icons/whatsapp.svg'
import Delivery from '../../../assets/icons/delivery.svg'
import IceCream from '../../../assets/icons/ice-cream.svg'
import Ifood from '../../../assets/icons/ifood.svg'
import Phone from '../../../assets/icons/phone.svg'

import './styles.css'

const CardDelivery = () => {
    return (
        <>
            <section className='service-deliveries'>
                <div className='woman-eat'>
                    <img src={CardPhone} alt={CardPhone} />
                </div>
                <div className='deliveries'>
                    <div className="title">
                        <p>NOSSAS ENTREGAS</p>
                    </div>
                    <div className='deliveries-cards'>
                        <div className='card'>
                            <div className="card-logo">
                                <img src={Whats} alt={Whats} />
                            </div>
                            <div className="card-info">
                                <p>WHATSAPP</p>
                                <p>Vamos direto ao ponto, sem perder tempo!</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="card-logo">
                                <img src={Delivery} alt={Delivery} />
                            </div>
                            <div className="card-info">
                                <p>ENTREGA</p>
                                <p>Entregamos em menos de 50 minutos na porta da sua casa!</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="card-logo">
                                <img src={IceCream} alt={IceCream} />
                            </div>
                            <div className="card-info">
                                <p>SOBREMESA</p>
                                <p>Pedidos acima de 100 reais, ganham brindes. </p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="card-logo">
                                <img id='SwitchColor' src={Ifood} alt={Ifood} />
                            </div>
                            <div className="card-info">
                                <p>IFOOD</p>
                                <p>Nossa loja ?? top 1 da regi??o!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="btn-delivery">
                <div>
                    <div className='logo-request'>
                        <img src={Phone} alt={Phone} />
                    </div>
                    <div className='title-request'>
                        <p>FA??A O SEU PEDIDO AGORA  MESMO!</p>
                        <p>venha saborear a melhor experi??ncia de hanburguense artesanal <br />
                            de <span>Empires Burger.</span> com tem??tica medieval!</p>
                    </div>
                </div>
                <div className="btn-request">
                    <button>SOLICITAR PEDIDO</button>
                </div>
            </section>
        </>
    );
}

export default CardDelivery;