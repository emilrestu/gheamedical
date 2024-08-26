import { Button, Carousel, Modal } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import PopUpBannerEn1 from '@/assets/home-popup/ghea-services-en-01.jpg';
import PopUpBannerEn2 from '@/assets/home-popup/ghea-services-en-02.jpg';
import PopUpBannerAr1 from '@/assets/home-popup/ghea-services-ar-01.jpg';
import PopUpBannerAr2 from '@/assets/home-popup/ghea-services-ar-02.jpg';
import { CloseOutlined } from '@ant-design/icons';
import { useTranslateContext } from '@/context/TranslateContext';

const PopupBanner = () => {
    const { langCode } = useTranslateContext();

    const [showPopup, setShowPopup] = useState(false);

    const ArrImage = useMemo(() => {
        if (langCode === 'ar')
            return [
                { src: PopUpBannerAr1.src, width: 540 },
                { src: PopUpBannerAr2.src, width: 540 },
            ];

        return [
            { src: PopUpBannerEn1.src, width: 540 },
            { src: PopUpBannerEn2.src, width: 540 },
        ];
    }, [langCode]);

    useEffect(() => {
        const lastVisit = localStorage.getItem('lastVisit');
        const now = new Date().getTime();
        const oneHour = 30 * 60 * 1000; // One hour in milliseconds

        if (!lastVisit || now - parseInt(lastVisit) > oneHour) {
            // If the last visit was more than an hour ago or no visit recorded, show the popup
            setShowPopup(true);
            localStorage.setItem('lastVisit', now.toString()); // Update last visit time
        }
    }, []);

    return (
        <Modal
            open={showPopup}
            onCancel={() => setShowPopup(false)}
            onClose={() => setShowPopup(false)}
            footer={null}
            closeIcon={<Button icon={<CloseOutlined />} />}
            styles={{
                content: {
                    backgroundColor: 'transparent',
                    padding: 0,
                    boxShadow: 'unset',
                },
            }}
            width={684}
            destroyOnClose
        >
            <div>
                <Carousel arrows={false} dotPosition="bottom" draggable autoplay autoplaySpeed={5000}>
                    {ArrImage.map((item, index) => (
                        <div key={index}>
                            <div
                                style={{
                                    height: 540,
                                    backgroundImage: `url(${item.src})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </Modal>
    );
};

export default PopupBanner;
