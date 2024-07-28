import SVGIcon from '@/components/svg-icon';
import Translate from '@/components/translate';
import { SECONDARY_COLOR } from '@/data/constants';
import { Card, Carousel, Col, Grid, Row, theme, Typography } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import React, { useMemo, useRef, useState } from 'react';
import WhyChooseImage01 from '../assets/why-choose-01.jpeg';
import WhyChooseImage02 from '../assets/banner-03.jpeg';
import WhyChooseImage03 from '../assets/banner-04.jpeg';
import WhyChooseEnglish from '@/data/why-choose/en.json';
import WhyChooseArabic from '@/data/why-choose/ar.json';
import { useTranslateContext } from '@/context/TranslateContext';
import { StaticImageData } from 'next/image';

const WhyChoose: React.FC = () => {
    const {
        token: { colorPrimary },
    } = theme.useToken();
    const { langCode } = useTranslateContext();
    const { xs } = Grid.useBreakpoint();

    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef<CarouselRef>(null);

    const WhyChooseData = useMemo(() => {
        if (langCode === 'ar') return WhyChooseArabic;

        return WhyChooseEnglish;
    }, [langCode]);

    const WhyChooseImage: { [key: string]: StaticImageData } = {
        whychoose01: WhyChooseImage01,
        whychoose02: WhyChooseImage02,
        whychoose03: WhyChooseImage03,
    };

    return (
        <Row className="home-content-wrapper why-choose-container" gutter={[16, 16]}>
            <Col md={12} xs={24}>
                <Row gutter={[16, 16]} style={{ marginBlockEnd: 24 }}>
                    <Col md={24} xs={24}>
                        <Typography.Text className="title why-choose-title">
                            <Translate>Why Choose GHEA Services</Translate>
                        </Typography.Text>

                        <Typography.Text className="why-choose-description">
                            <Translate>Trust GHEA Services to deliver exceptional support and superior quality care every time.</Translate>
                        </Typography.Text>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    {WhyChooseData.map((item, i) => (
                        <Col key={i} md={24}>
                            <Card
                                className={`card-slider ${activeSlide === i ? 'active' : ''}`.trim()}
                                {...(activeSlide === i && { style: { backgroundColor: colorPrimary } })}
                                onClick={() => {
                                    sliderRef?.current?.goTo(i);
                                }}
                            >
                                <Row gutter={[16, 16]}>
                                    <Col md={24} xs={24} className="title">
                                        <div className="icon-container" {...(activeSlide === i && { style: { backgroundColor: SECONDARY_COLOR } })}>
                                            <SVGIcon icon={item.icon as 'badge' | 'wellness' | 'doctor'} />
                                        </div>
                                        <Typography.Text>{item.title}</Typography.Text>
                                    </Col>

                                    <Col md={24} xs={24}>
                                        <Typography.Paragraph>{item.description}</Typography.Paragraph>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>

            <Col md={12} xs={24} style={{ height: xs ? 343 : 687 }}>
                <Carousel
                    ref={sliderRef}
                    arrows={false}
                    dots={false}
                    draggable
                    slidesToShow={1}
                    autoplay
                    autoplaySpeed={5000}
                    beforeChange={(_, currentSlide) => setActiveSlide(currentSlide)}
                    afterChange={(currentSlide) => setActiveSlide(currentSlide)}
                >
                    {WhyChooseData.map((item, i) => (
                        <div key={i}>
                            <Card style={{ flex: 1, height: xs ? 343 : 687 }}>
                                <div className="why-choose-image" style={{ backgroundImage: `url(${WhyChooseImage[item.image].src})` }} />
                                <div className="why-choose-background-mask" />
                            </Card>
                        </div>
                    ))}
                </Carousel>
            </Col>
        </Row>
    );
};

export default WhyChoose;
