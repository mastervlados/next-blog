import React from "react";
import VideoWithOverlay from "../components/VideoWithOverlay";

const Index = () => {
    return (
        <VideoWithOverlay
            videoSrc={'https://light-vision.ucoz.ru/fairy/video/background.mp4'}
            posterSrc={'https://light-vision.ucoz.ru/fairy/video/preview.jpg'}
            overlayColor={'black'}
        />
    )
}

export default Index