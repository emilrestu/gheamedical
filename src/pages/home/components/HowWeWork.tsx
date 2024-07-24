import SVGIcon from '@/components/svg-icon';
import Translate from '@/components/translate';
import { Col, Row, Typography } from 'antd';
import React from 'react';
import HowWeWorkIconsBG from '@/assets/components/HowWeWorkIconsBG.svg';

const HowWeWork: React.FC = () => {
    return (
        <>
            <Row className="how-we-work-header-wrapper">
                <Col span={24}>
                    <div className="text-wrapper">
                        <Typography.Text className="title">
                            <Translate>How We Work</Translate>
                        </Typography.Text>

                        <Typography.Paragraph className="description">
                            <Translate>
                                We combine expertise, compassion, and state-of-the-art resources to ensure you receive the highest quality care.
                            </Translate>
                        </Typography.Paragraph>
                    </div>
                </Col>
            </Row>

            <Row className="how-we-work-icons-wrapper">
                <div className="bg-wrapper">
                    <HowWeWorkIconsBG />
                </div>

                <div className="icons-group-container">
                    <div className="icons-container" style={{ marginTop: 60 }}>
                        <div className="icons">
                            <SVGIcon icon="chat" />
                        </div>
                        <div className="description">
                            <Translate>Request Service from the Site</Translate>
                        </div>
                    </div>

                    <div className="icons-container" style={{ marginTop: -80 }}>
                        <div className="icons">
                            <SVGIcon icon="cs" />
                        </div>
                        <div className="description">
                            <Translate>Customer service will contact you to schedule an appointment</Translate>
                        </div>
                    </div>

                    <div className="icons-container" style={{ marginTop: 50 }}>
                        <div className="icons">
                            <SVGIcon icon="team" />
                        </div>
                        <div className="description">
                            <Translate>Our team will serve you at the right time and place for you</Translate>
                        </div>
                    </div>
                </div>
            </Row>
        </>
    );
};

export default HowWeWork;
