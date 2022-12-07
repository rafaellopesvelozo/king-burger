import { useEffect, useRef, useState } from 'react';

import { api } from '../../../services/api';

import './styles.css';

const CardsComents = () => {
    const [listComent, setListComent] = useState([])
    const carousel = useRef()
    
    useEffect(() => {
        api.get('api/empire-burger/testimonials').then(({ data }) => {
            setListComent(data)
        })
        // eslint-disable-next-line
    }, [])

    const handLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth - 685
        if (carousel.current.scrollLeft === 0) {
            carousel.current.scrollLeft = 2927
        }

        if (carousel.current.scrollLeft === 2726) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth - 850
        }

        if (carousel.current.offsetWidth === 342) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth + 10
        }
    }

    const handleMidleClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft = 1747
        if (carousel.current.scrollLeft === 2410) {
            carousel.current.scrollLeft = 1405
        }
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth - 685
        if (carousel.current.scrollLeft === 2810) {
            carousel.current.scrollLeft = 0
        }

        if (carousel.current.offsetWidth === 342) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth - 692
        }
    }
 
    return (
        <section id="scrollComent" className='main-cards'>
            <div className='cards-coments'>
                <p>NOSSA REALEZA</p>
                <p>A satisfação de nossos clientes em primeiro lugar</p>
            </div>
            <div className="cards-carroussel" ref={carousel}>
                {
                    listComent.length < 0 && (
                        <div className='cards-loading'>
                            <p>Carregando Cardápio...</p>
                        </div>
                    )
                }
                {
                    listComent.map(coments => (
                        < div className='cards' key={coments.name}>
                            <div className='coments'>
                                <p>{coments.testimonial}</p>
                            </div>
                            <div className='perfil'>
                                <div className='avatar'>
                                    <img src={coments.image} alt={coments.image} />
                                </div>
                                <div className="name-age">
                                    <p>{coments.name}</p>
                                    <p>{coments.age} Anos</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='next-prev'>
                <span onClick={handLeftClick}></span>
                <span onClick={handleMidleClick}></span>
                <span onClick={handleRightClick}></span>
            </div>
        </section>
    );
}
export default CardsComents;
