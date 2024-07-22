import BookServiceCard from '@/components/book-service-card';
import { Carousel, Row, Col, Typography } from 'antd';
import BannerEnglish from '@/data/banner/en.json';
import BannerArabic from '@/data/banner/ar.json';
import { useMemo } from 'react';
import { useTranslateContext } from '@/context/TranslateContext';

const Banner = () => {
    const { langCode } = useTranslateContext();

    const BannerData = useMemo(() => {
        if (langCode === 'ar') return BannerArabic;

        return BannerEnglish;
    }, [langCode]);

    return (
        <Row className="banner-container">
            <Col span={24}>
                <Carousel arrows={false} dots={false} draggable autoplay>
                    {BannerData.map((item, index) => (
                        <div key={index}>
                            <div className="banner-card-wrapper">
                                <div className="banner-card">
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
