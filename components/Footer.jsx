import React from "react";
import ButtonTile from "./ui/ButtonTile";
import IconVK from "./ui/IconVK";
import IconTelegram from "./ui/IconTelegram";
import IconInstagram from "./ui/IconInstagram";

const Footer = ({}) => {
    return (
        <footer>
            <div 
                className="wrap"
                style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px', marginBottom: '150px' }}
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
                    <ul className="footer-ul-emoji">
                        <li>похудение</li>
                        <li>набор мышечной массы</li>
                        <li>составление программ тренировок и питания</li>
                        <li>коррекция осанки</li>
                    </ul>
                </div>
                <div className="footer-container">
                    <h3 className="footer-ul-heading">Подпишись:</h3>
                    <div style={{ display: 'flex', gap: '8px'}}>
                        <ButtonTile icon={() => <IconTelegram width={19} height={19} color="#FFFFFF"/>} href={'https://t.me/anyagymrat'}/>
                        <ButtonTile icon={() => <IconVK width={20} height={20} color="#FFFFFF"/>} href={'https://vk.com/anyachokavo'}/>
                        <ButtonTile icon={() => <IconInstagram width={20} height={20} color="#FFFFFF"/>} href={'https://www.instagram.com/anyachokavo/'}/>
                    </div>
                </div>
            </div> 
        </footer>
    )
}

export default Footer