import React from "react";
import MainContainer from "./MainContainer";

const VideoWithOverlay = ({videoSrc, posterSrc, overlayColor}) => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div>
                <video 
                    className="w-full h-full"
                    style={{ 
                        display: 'block',
                        objectFit: 'cover',  // Масштабирует видео, обрезая края
                        objectPosition: 'top center', // Центрирует кадр
                        minHeight: '100%',
                        minWidth: '100%',
                        maxHeight: '600px',
                    }}
                    poster={posterSrc} 
                    // autoPlay
                    playsInline
                    // loop 
                    muted
                    preload="auto"
                >
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
            <div 
                className="w-full h-full"
                style={{
                    opacity: .4,
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: overlayColor,
                    zIndex: 666
                }}
            />
            <div
                className="w-full h-full"
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 777,
                    display: 'flex',
                }}
            >  
                <MainContainer/>
            </div>       
        </div>
    )
}

export default VideoWithOverlay