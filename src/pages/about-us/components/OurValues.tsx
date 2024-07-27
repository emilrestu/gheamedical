import SVGIcon from '@/components/svg-icon';
import Translate from '@/components/translate';
import { Col, Row, Typography } from 'antd';
import React from 'react';
import HowWeWorkIconsBG from '@/assets/components/HowWeWorkIconsBG.svg';

const OurValues = () => {
    return (
        <>
            <Row className="how-we-work-header-wrapper">
                <Col span={24}>
                    <div className="text-wrapper">
                        <Typography.Text className="title">
                            <Translate>Our Core Values</Translate>
                        </Typography.Text>

                        <Typography.Paragraph className="description">
                            <Translate>
                                Our core values guide us in our mission to deliver superior services, ensuring that every interaction with us is
                                marked by integrity, excellence, and heartfelt care.
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
                            <SVGIcon icon="transparency" />
                        </div>
                        <div className="description">
                            <Translate>Transparency</Translate>
                        </div>
                    </div>

                    <div className="icons-container" style={{ marginTop: -30 }}>
                        <div className="icons">
                            <SVGIcon icon="doctor" />
                        </div>
                        <div className="description">
                            <Translate>Professional</Translate>
                        </div>
                    </div>

                    <div className="icons-container" style={{ marginTop: -30 }}>
                        <div className="icons">
                            <SVGIcon icon="trust" />
                        </div>
                        <div className="description">
                            <Translate>Trust</Translate>
                        </div>
                    </div>

                    <div className="icons-container" style={{ marginTop: 30 }}>
                        <div className="icons">
                            <SVGIcon icon="passion" />
                        </div>
                        <div className="description">
                            <Translate>Kindness and Passion</Translate>
                        </div>
                    </div>
                </div>
            </Row>
        </>
    );
};

export default OurValues;
