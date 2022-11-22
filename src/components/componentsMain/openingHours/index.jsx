import { useEffect, useState } from "react"

import Timer from "../../../assets/icons/timer.svg"

import "./styles.css"

const OpenHours = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();
        const day = date.getDay();

        if (day !== 0 && hours >= 17) {
            setOpen(true);
        }
        if (day !== 0 && hours >= 23) {
            setOpen(false);
        }

        if (day === 7 && hours >= 18.30) {
            setOpen(open);
        }
        if (day === 7 && hours >= 23) {
            setOpen(!open);
        }
        if (day === 0 && hours >= 18.30) {
            setOpen(open);
        }
        if (day === 0 && hours >= 23) {
            setOpen(!open);
        }
    }, [])


    return (
        <div className="open-hours-for-client">
            <div className={`open-hours-time  ${open ? "Open" : "Closed"} `}  >
                <div className="logo-time">
                    <img src={Timer} alt={Timer} />
                </div>
                <div className="open-hours">
                    <section >
                        <p>HORÁRIO DE FUNCIONAMENTO </p>
                        <p>
                            Segunda-feira a sesta-feira: <span>17h00 - 23h00</span>  <br />
                            Sábado e Domingo:  <span>18h30 - 23h00</span>
                        </p>
                    </section>
                </div>
            </div>
            <div id="empire">
                <section>
                    <p>Não esqueca de marcar a gente no instagram:</p>
                    <p>#EMPIREBURGUER</p>
                </section>
            </div>
        </div>
    );
}

export default OpenHours;