import "./styles.css"

const Mobile = ({ open }) => {
    return (
        <div className={open ? "open-menu-mobile" : "close-menu-mobile"}>
            <div className="Menu-mobile">
                <ul>
                    <li><a href="#scrollHome">Home</a></li>
                    <li><a href="#scrollPromotion">Promoção</a></li>
                    <li><a href="#scrollmenu">Cardápio</a> </li>
                    <li><a href="#scrollComent">Comentário</a></li>
                    <li><a href="#scrollContact">Contato</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Mobile;
