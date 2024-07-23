import Translate from '@/components/translate';
import { Col, Row, Typography } from 'antd';
import React from 'react';

const HowWeWork: React.FC = () => {
    return (
        <>
            <Row className="how-we-work-wrapper" gutter={[16, 16]}>
                <Col span={24}>
                    <Row className="how-we-work-header">
                        <Col span={24}>
                            <div className="text-wrapper">
                                <Typography.Text className="title">
                                    <Translate>How We Work</Translate>
                                </Typography.Text>

                                <Typography.Paragraph className="description">
                                    <Translate>
                                        We combine expertise, compassion, and state-of-the-art resources to ensure you receive the highest quality
                                        care.
                                    </Translate>
                                </Typography.Paragraph>
                            </div>
                        </Col>
                    </Row>

                    <Row className="how-we-work-icons" gutter={[16, 16]}></Row>
                </Col>
            </Row>
        </>
    );
};

export default HowWeWork;
