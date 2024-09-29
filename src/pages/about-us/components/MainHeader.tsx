import React from 'react';
import { Col, Row, Typography } from 'antd';
import Translate from '@/components/translate';

const MainHeader = () => {
    return (
        <Row className="about-us-main-header">
            <Col md={24} xs={24}>
                <div className="text-wrapper">
                    <Typography.Text className="title">
                        <Translate>Meet GHEA Services Where We Provide You With the Best Homecare For You and Your Family.</Translate>
                    </Typography.Text>

                    <Typography.Paragraph className="description">
                        <Translate>
                            GHEA Services is a leading provider specializing in homecare for all ages and needs. We provide skilled professionals
                            trained to address client needs. Our commitment is to offer exceptional assistance and enhance our client&apos;s daily
                            lives.
                        </Translate>
                    </Typography.Paragraph>
                </div>
            </Col>
        </Row>
    );
};

export default MainHeader;
