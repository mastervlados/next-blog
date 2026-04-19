import React from "react";
import ButtonTile from "../ui/ButtonTile";
import IconVK from "../ui/IconVK";
import IconTelegram from "../ui/IconTelegram";
import IconInstagram from "../ui/IconInstagram";
import styles from './Footer.module.css'

const Footer = ({}) => {
    return (
        <footer>
            <div 
                className="wrap"
                style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px', marginBottom: '150px' }}
            > 
                <div className={[styles.footerContainer]}>
                    <h3 className={[styles.footerUlHeading]}>Образование:</h3>
                    <ul className={[styles.footerUl]}>
                        <li>НГУ. Им. Лесгафта. Адаптивная физическая культура</li>
                        <li>Медицинский колледж №2</li>
                        <li>ООО «Анатомия»</li>
                        <li>ЧОУ ДПО «Корус»</li>
                        <li>Международная академия нутрициологии</li>
                    </ul>
                </div>
                <div className={[styles.footerContainer]}>
                    <h3 className={[styles.footerUlHeading]}>Специализация:</h3>
                    <ul className={[styles.footerUlEmoji]}>
                        <li>похудение</li>
                        <li>набор мышечной массы</li>
                        <li>составление программ тренировок и питания</li>
                        <li>коррекция осанки</li>
                    </ul>
                </div>
                <div className={[styles.footerContainer]}>
                    <h3 className={[styles.footerUlHeading]}>Подпишись:</h3>
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