import React from "react";
import ButtonTile from "./ui/ButtonTile";

const Footer = ({}) => {
    return (
        <footer>
            <div 
                className="wrap"
                style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}
            > 
                <div className="footer-container">
                    <h3 className="footer-ul-heading">Образование:</h3>
                    <ul className="footer-ul">
                        <li>НГУ. Им. Лесгафта. Адаптивная физическая культура</li>
                        <li>Медицинский колледж №2</li>
                        <li>ООО «Анатомия»</li>
                        <li>ЧОУ ДПО «Корус»</li>
                        <li>Международная академия нутрициологии</li>
                    </ul>
                </div>
                <div className="footer-container">
                    <h3 className="footer-ul-heading">Специализация:</h3>
                    <ul className="footer-ul">
                        <li>похудение</li>
                        <li>набор мышечной массы</li>
                        <li>составление программ тренировок и питания</li>
                        <li>коррекция осанки</li>
                    </ul>
                </div>
                <div className="footer-container">
                    <h3 className="footer-ul-heading">Подпишись:</h3>
                    <div style={{ display: 'flex', gap: '8px'}}>
                        <ButtonTile href={'https://t.me/anyagymrat'}/>
                        <ButtonTile href={'https://vk.com/anyachokavo'}/>
                        <ButtonTile href={'https://www.instagram.com/anyachokavo/'}/>
                    </div>
                </div>
            </div> 
        </footer>
    )
}

export default Footer