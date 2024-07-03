import { Card, Carousel, Typography, theme } from 'antd';
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
        // slidesToShow: 1,
        // slidesToScroll: 1,
        variableWidth: true,
        draggable: true,
        slidesToShow: 1,
        autoplay: true,
    };

    return (
        <div
            style={{
                background: colorPrimary,
            }}
        >
            <Carousel {...settings}>
                {Array.from({ length: 20 })
                    .map((_, i) => ({
                        from: `From ${i}`,
                        testi: `XXX xxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxx
                        \n xxxxx `,
                    }))
                    .map((item, i) => (
                        <div key={i}>
                            <div style={{ padding: 16, margin: 16, height: 150, minWidth: 100, backgroundColor: 'white', borderRadius: 16 }}>
                                <Typography.Paragraph>
                                    <Typography.Title level={3}>{item.from}</Typography.Title>
                                    <blockquote style={{ whiteSpace: 'pre-wrap' }}>{item.testi}</blockquote>
                                </Typography.Paragraph>
                            </div>
                        </div>
                    ))}
            </Carousel>
        </div>
    );
};

export default Testimonial;
