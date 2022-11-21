import "./styles.css"

const Mobile = ({ open, setm }) => {
    if (!open || !setm) {
        return null
    }
    return (
        <div className="menu-mobile">
            <div className="mobile">
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
