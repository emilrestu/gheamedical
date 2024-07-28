import SVGIcon from '@/components/svg-icon';
import Translate from '@/components/translate';
import { DARK_BACKGROUND, SECONDARY_COLOR } from '@/data/constants';
import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import StrengthImage from '../assets/strength.jpeg';

const Strength = () => {
    return (
        <Row className="about-us-strength-wrapper" style={{ backgroundColor: DARK_BACKGROUND }}>
            <Col md={24} xs={24}>
                <Row gutter={[24, 24]} className="about-us-strength">
                    <Col md={12} xs={24}>
                        <Card className="strengh-card">
                            <Card className="strength-image" style={{ backgroundImage: `url(${StrengthImage.src})` }}>
                                <div className="strength-image-mask" />
                            </Card>

                            <Typography.Text className="title">
                                <Translate>Our Strength</Translate>
                            </Typography.Text>
                            <Typography.Text className="description">
                                <Translate>
                                    Our strength lies in our unwavering commitment to providing exceptional care that prioritizes the well-being of
                                    our clients. We combine expertise, compassion, and innovation to deliver personalized services that meet the
                                    unique needs of each individual. GHEA Services a trusted partner in your journey towards better health and
                                    well-being.
                                </Translate>
                            </Typography.Text>
                        </Card>
                    </Col>
                    <Col md={12} xs={24}>
                        <Card className="strengh-card-wrapper">
                            <Card className="strengh-card">
                                <div className="icon-container" style={{ backgroundColor: SECONDARY_COLOR }}>
                                    <SVGIcon icon="best-staff" />
                                </div>
                                <Typography.Text className="title">
                                    <Translate>Best-trained and experienced staff</Translate>
                                </Typography.Text>
                                <Typography.Text className="description">
                                    <Translate>
                                        Our professionals are not only experts in their respective fields but are also continuously updated with the
                                        latest advancements in healthcare.
                                    </Translate>
                                </Typography.Text>
                            </Card>

                            <Card className="strengh-card">
                                <div className="icon-container" style={{ backgroundColor: SECONDARY_COLOR }}>
                                    <SVGIcon icon="best-home-services" />
                                </div>
                                <Typography.Text className="title">
                                    <Translate>Best Home Care System</Translate>
                                </Typography.Text>
                                <Typography.Text className="description">
                                    <Translate>
                                        Our comprehensive home care system combines advanced technology, personalized care plans, and a the best
                                        possible care in your own home.
                                    </Translate>
                                </Typography.Text>
                            </Card>

                            <Card className="strengh-card">
                                <div className="icon-container" style={{ backgroundColor: SECONDARY_COLOR }}>
                                    <SVGIcon icon="best-prices" />
                                </div>
                                <Typography.Text className="title">
                                    <Translate>Best Prices for Everyone</Translate>
                                </Typography.Text>
                                <Typography.Text className="description">
                                    <Translate>
                                        Our comprehensive range includes expert consultations, diagnostic tests, and treatments, all at prices
                                        designed to fit every budget.
                                    </Translate>
                                </Typography.Text>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Strength;
