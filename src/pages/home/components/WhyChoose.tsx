import SVGIcon from '@/components/svg-icon';
import Translate from '@/components/translate';
import { SECONDARY_COLOR } from '@/data/constants';
import { Card, Carousel, Col, Row, theme, Typography } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import React, { useRef, useState } from 'react';

type ChooseData = {
    title: string;
    icon: 'badge' | 'wellness' | 'doctor';
    description: string;
    image: string;
    alt: string;
}[];

const WhyChooseData: ChooseData = [
    {
        title: 'Superior Quality Assistant',
        icon: 'badge',
        description:
            "GHEA Services offers exceptional quality assistance and support tailored to meet your family' health and personal care needs, ensuring you receive the best possible service.",
        image: '',
        alt: 'superior-quality-assistant',
    },
    {
        title: 'Personalized Wellness Care',
        icon: 'wellness',
        description:
            'Our comprehensive approach ensures that every aspect of your well-being is addressed, providing you and your family with exceptional care and support..',
        image: '',
        alt: 'personalized-wellness-care',
    },
    {
        title: 'Services with Best Individuals',
        icon: 'doctor',
        description:
            'We have assembled a team of highly skilled and compassionate professionals dedicated to providing the highest quality care. Our team brings expertise, experience, and a genuine commitment to your well-being.',
        image: '',
        alt: 'services-with-best-individuals',
    },
];

const WhyChoose: React.FC = () => {
    const {
        token: { colorPrimary },
    } = theme.useToken();

    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef<CarouselRef>(null);

    return (
        <Row className="home-content-wrapper why-choose-container" gutter={[16, 16]}>
            <Col span={12}>
                <Row gutter={[16, 16]} style={{ marginBlockEnd: 24 }}>
                    <Col span={24}>
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
                        <Col key={i} span={24}>
                            <Card
                                className={`card-slider ${activeSlide === i ? 'active' : ''}`.trim()}
                                {...(activeSlide === i && { style: { backgroundColor: colorPrimary } })}
                                onClick={() => {
                                    sliderRef?.current?.goTo(i);
                                    // setActiveSlide(i);
                                }}
                            >
                                <Row gutter={[16, 16]}>
                                    <Col span={24} className="title">
                                        <div className="icon-container" {...(activeSlide === i && { style: { backgroundColor: SECONDARY_COLOR } })}>
                                            <SVGIcon icon={item.icon} />
                                        </div>
                                        <Typography.Text>{item.title}</Typography.Text>
                                    </Col>

                                    <Col span={24}>
                                        <Typography.Paragraph>{item.description}</Typography.Paragraph>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>

            <Col span={12} style={{ height: 642 }}>
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
                            <Card style={{ background: colorPrimary, flex: 1, height: 642 }}>{item.title}</Card>
                        </div>
                    ))}
                </Carousel>
            </Col>
        </Row>
    );
};

export default WhyChoose;
