import { useState } from "react";

import Logo from "../../assets/logo.png"
import NavLinks from '../../components/componentsHeader/navLink';
import Contact from '../../components/componentsHeader/Contact';
import Mobile from "../../components/menuMobile";

import { FcMenu } from "react-icons/fc"

import './styles.css'

const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleOpenModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    return (

        <header className='Header'>
            <Mobile open={isModalVisible ? true : false} />
            <nav className='nav'>
                <div className="Logo">
                    <img src={Logo} alt={Logo} />
                </div>
                <div className="nav-Header">
                    <NavLinks />
                </div>
                <div className="Contacts">
                    <Contact />
                </div>
                <FcMenu className="icon-menu" size={35} onClick={handleOpenModal} />
            </nav>
        </header>



    );
}
export default Header;