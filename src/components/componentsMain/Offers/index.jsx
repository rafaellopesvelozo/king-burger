import OpenHours from '../openingHours';
import './styles.css'

const Offers = () => {
    return (
        <section  className='Offers'>
            <div id="scrollPromotion"  className="title-offers">
                <p ><strong>OFERTAS ESPECIAIS</strong></p>
                <p>Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque estamos mudando nosso cardáipio.</p>
            </div>
            <div className="grid-offers">
                <div className="burger-imperial">
                    <div >
                        <p className='offer-imperial'>BURGER IMPERIAL+BATATA</p>
                        <p id="price-offer-imperial">250kg</p>
                    </div>

                    <div id="today">
                        <p>Apenas </p>
                        <p><span>HOJE</span></p>
                    </div>
                </div>
                <div className="potato">
                    <p className='potatoAndIceCream'>BATATA</p>
                    <p id="Weight">150kg</p>
                </div>
                <div className="Ice-cream">
                    <p className='potatoAndIceCream'>SORVETE</p>
                    <p id="Weight">50kg</p>
                </div>
            </div>
            <div>
                <OpenHours />
            </div>
        </section>
    );
}

export default Offers;