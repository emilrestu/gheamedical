import React from 'react';
import { Col, Row, Typography } from 'antd';
import Translate from '@/components/translate';

const MainHeader = () => {
    return (
        <Row className="about-us-main-header">
            <Col md={24}>
                <div className="text-wrapper">
                    <Typography.Text className="title">
                        <Translate>Meet our exceptional team and book a session with our expert.</Translate>
                    </Typography.Text>

                    <Typography.Paragraph className="description">
                        <Translate>
                            At GHEA Services, your well-being is our priority, and we are committed to delivering personalized, professional care that
                            helps you achieve your health and wellness goals. Secure your appointment today and take the first step towards a
                            healthier, happier you.
                        </Translate>
                    </Typography.Paragraph>
                </div>
            </Col>
        </Row>
    );
};

export default MainHeader;
