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
        <Row style={{ marginInline: -120 }}>
            <Col span={24}>
                <div
                    style={{
                        background: colorPrimary,
                    }}
                >
                    <Carousel {...settings}>
                        {Array.from({ length: 20 })
                            .map((_, i) => ({
                                from: `From ${i}`,
                                testi: `Lorem Ipsum Dolor Setamot Lorem Ipsum Dolor Setamot Lorem Ipsum Dolor Setamot `,
                            }))
                            .map((item, i) => (
                                <div key={i}>
                                    <div
                                        style={{
                                            padding: 16,
                                            margin: 16,
                                            minHeight: 150,
                                            minWidth: 250,
                                            maxWidth: 300,
                                            backgroundColor: 'white',
                                            borderRadius: 16,
                                        }}
                                    >
                                        <Typography.Title level={3}>{item.from}</Typography.Title>
                                        <Typography.Paragraph>{item.testi}</Typography.Paragraph>
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
