import Translate from '@/components/translate';
import { Card, Col, Row, Typography } from 'antd';
import React from 'react';

const VisionMission = () => {
    return (
        <Row className="about-us-vision-mission" gutter={[24, 24]}>
            <Col md={12} xs={24}>
                <Card>
                    <div className="button-title">
                        <Translate>Our Vision</Translate>
                    </div>
                    <Typography.Text className="title">
                        <Translate>We aspire to provide our services to everyone to gain their trust and let us be their first choice</Translate>
                    </Typography.Text>
                    <Typography.Text className="description">
                        <Translate>
                            At GHEA Services, our vision is to become the trusted partner in health and wellness for every individual and family we
                            serve. We believe in delivering exceptional care that not only meets but exceeds expectations.
                        </Translate>
                    </Typography.Text>
                </Card>
            </Col>
            <Col md={12} xs={24}>
                <Card>
                    <div className="button-title">
                        <Translate>Our Mission</Translate>
                    </div>
                    <Typography.Text className="title">
                        <Translate>
                            Our supreme mission is to provide our customers with the best care and help them go about their lives easily.
                        </Translate>
                    </Typography.Text>
                    <Typography.Text className="description">
                        <Translate>
                            Our mission is rooted in a commitment to excellence, ensuring that every interaction and service we provide is of the
                            highest quality. We strive to create a seamless and supportive experience for our customers.
                        </Translate>
                    </Typography.Text>
                </Card>
            </Col>
        </Row>
    );
};

export default VisionMission;
