import { DARK_BACKGROUND } from '@/data/contants';
import { Card, Carousel, Col, Row, Typography, theme } from 'antd';
import React from 'react';

const Testimonial = () => {
    const {
        token: { colorPrimary },
    } = theme.useToken();

    const settings = {
        className: 'slider variable-width',
        dots: false,
        arrow: false,
        infinite: true,
        // centerMode: true,
        variableWidth: true,
        draggable: true,
        slidesToShow: 1,
        autoplay: true,
    };

    return (
        <Row className="testimonial-wrapper" style={{ backgroundColor: DARK_BACKGROUND }}>
            <Col span={24}>
                <div>
                    <Carousel {...settings}>
                        {Array.from({ length: 20 })
                            .map((_, i) => ({
                                from: `From ${i}`,
                                testi: `Lorem Ipsum Dolor Setamot Lorem Ipsum Dolor Setamot Lorem Ipsum Dolor Setamot `,
                            }))
                            .map((item, i) => (
                                <div key={i}>
                                    <div className="testi-card-wrapper">
                                        <Card className="testi-card">
                                            <Typography.Title level={3}>{item.from}</Typography.Title>
                                            <Typography.Paragraph>{item.testi}</Typography.Paragraph>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                    </Carousel>
                </div>
            </Col>
        </Row>
    );
};

export default Testimonial;
