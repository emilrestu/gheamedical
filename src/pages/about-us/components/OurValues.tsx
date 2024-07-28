import SVGIcon from '@/components/svg-icon';
import Translate from '@/components/translate';
import { Col, Grid, Row, Typography } from 'antd';
import React from 'react';
import HowWeWorkIconsBG from '@/assets/components/HowWeWorkIconsBG.svg';
import OurValuesIconsBGXS from '@/assets/components/OurValuesIconsBGXS.svg';

const OurValues = () => {
    const { xs } = Grid.useBreakpoint();

    return (
        <>
            <Row className="how-we-work-header-wrapper about-us-our-values-header">
                <Col md={24} xs={24}>
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

            <Row className="how-we-work-icons-wrapper about-us-our-values-icons">
                <div className="bg-wrapper">{xs ? <OurValuesIconsBGXS /> : <HowWeWorkIconsBG />}</div>

                <div className="icons-group-container">
                    <div className="icons-container" style={{ marginTop: xs ? -20 : 60 }}>
                        <div className="icons">
                            <SVGIcon icon="transparency" />
                        </div>
                        <div className="description">
                            <Translate>Transparency</Translate>
                        </div>
                    </div>

                    <div className="icons-container" style={{ marginTop: xs ? 40 : -30, ...(xs && { marginLeft: 120 }) }}>
                        <div className="icons">
                            <SVGIcon icon="doctor" />
                        </div>
                        <div className="description">
                            <Translate>Professional</Translate>
                        </div>
                    </div>

                    <div className="icons-container" style={{ marginTop: xs ? 60 : -30 }}>
                        <div className="icons">
                            <SVGIcon icon="trust" />
                        </div>
                        <div className="description">
                            <Translate>Trust</Translate>
                        </div>
                    </div>

                    <div className="icons-container" style={{ marginTop: xs ? 60 : 30, ...(xs && { marginLeft: 120 }) }}>
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
