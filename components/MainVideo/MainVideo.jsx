import React from "react";
import styles from './MainVideo.module.css'

const MainVideo = () => {
    const data = {
        videoSrc: 'https://light-vision.ucoz.ru/fairy/video/background.mp4',
        posterSrc: 'https://light-vision.ucoz.ru/fairy/video/preview.jpg'
    }
    return (
        <video 
            className={`w-full h-full ${styles.mainVideo}`}
            poster={data.posterSrc} 
            // autoPlay
            playsInline
            // loop 
            muted
            preload="auto"
        >
            <source src={data.videoSrc} type="video/mp4"/>
        </video>    
    )
}

export default MainVideo