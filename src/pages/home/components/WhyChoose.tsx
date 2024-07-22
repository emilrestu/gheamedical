import Translate from '@/components/translate';
import { Card, Col, Row, theme, Typography } from 'antd';
import React from 'react';

const WhyChoose: React.FC = () => {
    const {
        token: { colorPrimary },
    } = theme.useToken();

    return (
        <Row className="home-content-wrapper why-choose-container" gutter={[16, 16]}>
            <Col span={12}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Typography.Text className="title why-choose-title">
                            <Translate>Why Choose GHEA Services</Translate>
                        </Typography.Text>

                        <Typography.Text className="why-choose-description">
                            <Translate>Trust GHEA Services to deliver exceptional support and superior quality care every time.</Translate>
                        </Typography.Text>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Card>xxx</Card>
                    </Col>

                    <Col span={24}>
                        <Card>xxx</Card>
                    </Col>

                    <Col span={24}>
                        <Card>xxx</Card>
                    </Col>
                </Row>
            </Col>

            <Col span={12}>
                <Card style={{ background: colorPrimary, flex: 1, height: 624 }} />
            </Col>
        </Row>
    );
};

export default WhyChoose;
