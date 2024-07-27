import { Col, Row } from 'antd';
import React from 'react';
import HightlightImage from '../assets/highlight.jpeg';

const Highlight = () => {
    return (
        <Row className="about-us-highlight">
            <Col span={24}>
                <div className="banner-card" style={{ backgroundImage: `url(${HightlightImage.src})` }}>
                    <div className="banner-card-mask" />
                </div>
            </Col>
        </Row>
    );
};

export default Highlight;
