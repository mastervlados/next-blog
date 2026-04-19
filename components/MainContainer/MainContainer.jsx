import React from "react";
import ButtonAppStore from "../ButtonAppStore";
import styles from './MainContainer.module.css'

const MainContainer = ({}) => {
    return (
        <div className={`wrap ${styles.mainContainer}`}>
            <h1 className={styles.mainHeading}>Анна Зверева</h1>
            <p className={styles.mainPosition}>💪Персональный тренер тренажерного зала</p>
            <p className={styles.mainDescription}>В своих тренировочных программах делаю акцент на ягодицы и осанку</p>
            <p className={styles.mainPromo}>Начните БЕСПЛАТНО прямо сейчас!</p>
            <div className={styles.mainButtonsContainer}>
                <ButtonAppStore store={'rustore'}/>
                <ButtonAppStore store={'appgallery'}/>
            </div>
        </div> 
    )
}

export default MainContainer