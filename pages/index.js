import React from "react";
import VideoWithOverlay from "../components/VideoWithOverlay";
import Head from "next/head";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <>
            <Head>
                <title>АННА ЗВЕРЕВА | Программы Тренировок Для Женщин, Фитнес - Анна Зверева</title>
                <meta name="description" content="Персональный тренер тренажерного зала" />
            </Head>
            <VideoWithOverlay
                videoSrc={'https://light-vision.ucoz.ru/fairy/video/background.mp4'}
                posterSrc={'https://light-vision.ucoz.ru/fairy/video/preview.jpg'}
                overlayColor={'black'}
            />
            <Footer/>
        </>
    )
}

export default Index