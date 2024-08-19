import { Col, Row } from 'antd';
import React from 'react';
import HightlightImage from '@/assets/images/banner-09.jpg';

const Highlight = () => {
    return (
        <Row className="about-us-highlight">
            <Col md={24} xs={24}>
                <div className="banner-card" style={{ backgroundImage: `url(${HightlightImage.src})` }}>
                    <div className="banner-card-mask" />
                </div>
            </Col>
        </Row>
    );
};

export default Highlight;
