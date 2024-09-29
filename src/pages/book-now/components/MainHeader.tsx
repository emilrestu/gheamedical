import React from 'react';
import { Col, Row, Typography } from 'antd';
import Translate from '@/components/translate';

const MainHeader = () => {
    return (
        <Row className="about-us-main-header">
            <Col md={24}>
                <div className="text-wrapper">
                    <Typography.Text className="title">
                        <Translate>Meet our exceptional team Call us and book now a session with our home healthcare expert.</Translate>
                    </Typography.Text>

                    <Typography.Paragraph className="description">
                        <Translate>
                            At GHEA Services, your well-being is our top priority. We are dedicated to providing personalized and professional
                            homecare to help you reach your health and wellness goals. Schedule your appointment today and take the first step towards
                            a healthier life.
                        </Translate>
                    </Typography.Paragraph>
                </div>
            </Col>
        </Row>
    );
};

export default MainHeader;
