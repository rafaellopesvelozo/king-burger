import { useEffect, useState } from 'react';

import { ApiMenu } from '../../../services/api.menuempire';
import { formatCurrency } from '../../../utils/formatCurrency';

import './styles.css'

const MenuEmpire = () => {
    const [listMenu, setListMenu] = useState([])

    useEffect(() => {
        ApiMenu.get('api/empire-burger/menu').then(({ data }) => {
            setListMenu(data)
        })
        console.log(listMenu)

        // eslint-disable-next-line
    }, [])

    return (
        <div id="scrollmenu" className="menu-empire">
            <div className="bg-empire">
                <p>
                    ESCOLHA SEU COMBO <br /> IMPERIAL,<span>PEÇA AGORA!</span>
                </p>

                <p>
                    temos vários tipos de prato para nossa realeza,
                    fique <br /> poruqe temos sempre promoação!
                </p>
                <div className="btn-menu">
                    <button>Ver Cardápio Completo</button>
                </div>
            </div>
            <div className="menu-list">
                <div className="tile-menu">
                    <p>
                        CARDÁPIO IMPERIAL <span></span> BURGER
                    </p>
                </div>
                <div className='items-menu'>
                    <ul>
                        {
                            listMenu.length <= 0 && (
                                <div className='loading-menu'>
                                    <p>Carregando Cardápio...</p>
                                </div>
                            )
                        }
                        {
                            listMenu.length > 0 && (
                                listMenu.map(items => (
                                    <div key={items.plate}>
                                        <div className="plate-price" >
                                            <p >{items.plate}</p>
                                            <span></span>
                                            <p>{formatCurrency(items.price)}</p>
                                        </div>
                                        <div className='ingredients'>
                                            <p >{items.ingredients}</p>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
}
export default MenuEmpire;
