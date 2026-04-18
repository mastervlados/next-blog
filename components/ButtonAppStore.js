import Link from "next/link";
import React from "react";

const ButtonAppStore = ({ store }) => {
    const content = {
        rustore: {
            storeName: 'RuStore',
            text: 'Скачайте из',
            link: 'https://www.rustore.ru/catalog/app/com.vladelizarov.gymbro',
            iconSrc: 'https://light-vision.ucoz.ru/fairy/market/RuStore.png',
            backgroundColor: '#ffffff',
            textColor: '#000000'
        },
        appgallery: {
            storeName: 'AppGallery',
            text: 'Get it On',
            link: 'https://appgallery.huawei.com/app/C117233503',
            iconSrc: 'https://light-vision.ucoz.ru/fairy/market/AppGallery.png',
            backgroundColor: '#000000',
            textColor: '#ffffff'
        }
    }

    return (
        <Link 
            href={content[store].link} 
            target="_blank"
            style={{ 
                display: 'block',  
                borderRadius: '10px', 
                backgroundColor: content[store].backgroundColor, 
                width: '156px',
                height: '48px',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', gap: '10px' }}>
                <img src={content[store].iconSrc} style={{ width: '36px', height: '36px', display: 'block', paddingLeft: '8px'}}/>
                <div style={{width: '100%'}}>
                    <p style={{ fontSize: '14px', color: content[store].textColor }}>{content[store].text}</p>
                    <p style={{ fontSize: '18px', color: content[store].textColor }}>{content[store].storeName}</p>
                </div>
            </div>

        </Link>
    )
}

export default ButtonAppStore