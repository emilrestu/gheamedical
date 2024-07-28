import { Carousel, Col, Row } from 'antd';
import React from 'react';
import Banner01 from '../../home/assets/banner-01.jpeg';
import Banner02 from '../../home/assets/banner-02.png';
import Banner03 from '../../home/assets/banner-03.jpeg';

const Banner = () => {
    const BannerData = [Banner01, Banner02, Banner03, Banner02];

    return (
        <Row className="services-banner-container">
            <Col md={24} xs={24}>
                <Carousel arrows={false} dots={false} slidesToShow={1} infinite variableWidth draggable autoplay>
                    {BannerData.map((item, i) => (
                        <div key={i}>
                            <div className="banner-card-wrapper">
                                <div className="banner-card" style={{ backgroundImage: `url(${item.src})`, width: 800 }}>
                                    <div className="banner-card-mask" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </Col>
        </Row>
    );
};

export default Banner;
