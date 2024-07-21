import { DARK_BACKGROUND } from '@/data/contants';
import { Card, Carousel, Col, Row, Typography, theme } from 'antd';
import Image from 'next/image';
import React, { useMemo } from 'react';
import EllipsOne from '@/assets/components/ellipse_01.png';
import EllipsTwo from '@/assets/components/ellipse_02.png';
import Quotes from '@/assets/components/quotes.png';
import Translate from '@/components/translate';
import TestiEnglish from '@/data/testimonials/en.json';
import TestiArabic from '@/data/testimonials/ar.json';
import { useTranslateContext } from '@/context/TranslateContext';

const splitArrayIntoTwo = (arr: { title: string; content: string }[]) => {
    let middleIndex = Math.ceil(arr.length / 2);
    let firstHalf = arr.slice(0, middleIndex);
    let secondHalf = arr.slice(middleIndex);

    return [firstHalf, secondHalf];
};

const Testimonial = () => {
    const {
        token: { colorPrimary },
    } = theme.useToken();
    const { langCode } = useTranslateContext();

    const settings = {
        dots: false,
        arrow: false,
        infinite: true,
        variableWidth: true,
        draggable: true,
        slidesToShow: 1,
        autoplay: true,
    };

    const TestiData = useMemo(() => {
        if (langCode === 'ar') return TestiArabic;

        return splitArrayIntoTwo(TestiEnglish);
    }, [langCode]);

    return (
        <Row className="testimonial-wrapper" style={{ backgroundColor: DARK_BACKGROUND }}>
            <Col span={24} className="testi-title">
                <Translate>What Our Customers Say About Us</Translate>
            </Col>
            <Col span={24} className="testi-carousel-wrapper">
                {TestiData.map((testi, i) => {
                    return (
                        <Carousel key={`carousel-${i}`} {...settings} className={`carousel-${i + 1}`}>
                            {(testi as { content: string; title: string }[]).map((item, i) => (
                                <div key={i}>
                                    <div className="testi-card-wrapper">
                                        <Card className="testi-card" style={{ backgroundColor: colorPrimary, border: 0 }}>
                                            <Image className="ellips-01" src={EllipsOne} alt="Ghea SERVICES Testimonials" />
                                            <Image className="ellips-02" src={EllipsTwo} alt="Ghea SERVICES Testimonials" />
                                            <div className="content-wrapper">
                                                <Typography.Paragraph className="content-text" style={{ marginBottom: 24 }}>
                                                    {item.content}
                                                </Typography.Paragraph>
                                            </div>
                                            <div className="title-wrapper">
                                                <Typography.Text>{item.title}</Typography.Text>
                                                <Image className="quotes" src={Quotes} alt="Ghea SERVICES Testimonials" />
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    );
                })}
            </Col>
        </Row>
    );
};

export default Testimonial;
