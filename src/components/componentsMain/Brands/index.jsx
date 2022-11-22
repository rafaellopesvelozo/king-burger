import Burguer from '../../../assets/icons/burger.svg'
import Delivery from '../../../assets/icons/delivery.svg'
import Headset from '../../../assets/icons/headset.svg'

import './styles.css'

const Brand = () => {
   
    return (
        <div className='brands' id="toggleMenu">
            <section>
                <div className='artisanal'>
                    <div className='brands-logo'>
                        <img src={Burguer} alt={Burguer} />
                    </div>
                    <div className="brands-info">
                        <p>ARTESANAL</p>
                        <p>Nossas receitas são feitas com todo cuidado</p>
                    </div>
                </div>
                <div id="line-vertical"></div>
                <div className='attendance'>
                    <div className='brands-logo'>
                        <img src={Headset} alt={Headset} />
                    </div>
                    <div className="brands-info">
                        <p>ATENDIMENTO</p>
                        <p>Totalmente personalizado</p>
                    </div>
                </div>
                <div id="line-vertical"></div>
                <div className='delivery-speed'>
                    <div className='brands-logo'>
                        <img src={Delivery} alt={Delivery}/>
                    </div>
                    <div className="brands-info">
                        <p>DELIVERY SPEED</p>
                        <p>Entregamos em menos de 45minutos</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Brand;