import React from "react";
import ButtonAppStore from "./ButtonAppStore";

const MainContainer = ({}) => {
    return (
    <div style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'end'
    }}>
        <h1 style={{ 
            fontFamily: 'Impact', 
            fontWeight: '400', 
            fontSize: '48px', 
            color: 'white' 
        }}>Анна Зверева</h1>
        <p style={{ 
            fontFamily: 'Montserrat SemiBold',
            fontWeight: '600', 
            fontSize: '16px', 
            color: 'white' 
        }}>💪Персональный тренер тренажерного зала</p>
        <p style={{ 
            width: '390px', 
            marginTop: '20px', 
            fontFamily: 'Montserrat Regular', 
            fontSize: '16px', 
            color: 'lightgray'  
        }}>В своих тренировочных программах делаю акцент на ягодицы и осанку</p>
        <p style={{ 
            margin: '20px 0 60px 0', 
            fontFamily: 'Montserrat SemiBold',
            fontWeight: '600', 
            fontSize: '16px', 
            color: 'white'
        }}>Начните БЕСПЛАТНО прямо сейчас!</p>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '80px'}}>
            <ButtonAppStore store={'rustore'}/>
            <ButtonAppStore store={'appgallery'}/>
        </div>
    </div> 
    )
}

export default MainContainer