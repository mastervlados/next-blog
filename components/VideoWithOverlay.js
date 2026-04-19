import React from "react";
import MainContainer from "./MainContainer";
import MainVideo from "./MainVideo";
import MainPoster from "./MainPoster";

const VideoWithOverlay = ({overlayColor}) => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div>
                <MainPoster/>
                <MainVideo/>
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