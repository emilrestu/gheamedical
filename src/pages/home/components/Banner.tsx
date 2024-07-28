import BookServiceCard from '@/components/book-service-card';
import { Carousel, Row, Col, Typography } from 'antd';
import BannerEnglish from '@/data/banner/en.json';
import BannerArabic from '@/data/banner/ar.json';
import { useMemo } from 'react';
import { useTranslateContext } from '@/context/TranslateContext';
import Banner01 from '../assets/banner-01.jpeg';
import Banner02 from '../assets/banner-02.png';
import Banner03 from '../assets/banner-03.jpeg';
import Banner04 from '../assets/banner-04.jpeg';
import { StaticImageData } from 'next/image';

const Banner = () => {
    const { langCode } = useTranslateContext();

    const BannerImage: { [key: string]: StaticImageData } = {
        banner01: Banner01,
        banner02: Banner02,
        banner03: Banner03,
        banner04: Banner04,
    };

    const BannerData = useMemo(() => {
        if (langCode === 'ar') return BannerArabic;

        return BannerEnglish;
    }, [langCode]);

    return (
        <Row className="banner-container">
            <Col span={24} xs={24}>
                <Carousel arrows={false} dots={false} draggable autoplay>
                    {BannerData.map((item, index) => (
                        <div key={index}>
                            <div className="banner-card-wrapper">
                                <div className="banner-card" style={{ backgroundImage: `url(${BannerImage[item.image].src})` }}>
                                    <div className="banner-card-mask" />
                                    <div className={`testi-title ${langCode === 'ar' ? 'arabic' : ''}`.trim()}>
                                        <Typography.Text>{item.title}</Typography.Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </Col>

            <BookServiceCard />
        </Row>
    );
};

export default Banner;
