import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import Translate from '@/components/translate';
import SVGIcon from '@/components/svg-icon';
import Link from 'next/link';
import { PHONE_NUMBER } from '@/data/constants';
import { ClockCircleOutlined } from '@ant-design/icons';

const MainHeader = () => {
    return (
        <>
            <Row className="contact-us-main-header">
                <Col md={24}>
                    <div className="text-wrapper">
                        <Typography.Text className="title">
                            <Translate>Get in touch</Translate>
                        </Typography.Text>
                    </div>
                </Col>
            </Row>
            <Row className="contact-us-details">
                <Col md={24} className="details-wrapper">
                    <Card>
                        <div className="icons-container">
                            <div className="icons">
                                <SVGIcon icon="phone" />
                            </div>
                        </div>
                        <Typography.Text className="title">
                            <Translate>Phone</Translate>
                        </Typography.Text>
                        <Typography.Text className="description">
                            <Link href={`tel:${PHONE_NUMBER}`} passHref>
                                <Translate>+966 54 114 2624</Translate>
                            </Link>
                        </Typography.Text>
                    </Card>

                    <Card>
                        <div className="icons-container">
                            <div className="icons">
                                <SVGIcon icon="mail" />
                            </div>
                        </div>
                        <Typography.Text className="title">
                            <Translate>Email</Translate>
                        </Typography.Text>
                        <Typography.Text className="description">
                            <Link href={`mailto:info@gheamedical.com`} passHref>
                                <Translate>info@gheamedical.com</Translate>
                            </Link>
                        </Typography.Text>
                    </Card>

                    <Card>
                        <div className="icons-container">
                            <div className="icons">
                                <ClockCircleOutlined width={32} height={32} style={{ fontSize: 28 }} />
                            </div>
                        </div>
                        <Typography.Text className="title">
                            <Translate>Work Hours</Translate>
                        </Typography.Text>
                        <Typography.Text className="description">
                            <Translate>08:00 - 17:00</Translate>
                        </Typography.Text>
                    </Card>
                </Col>

                <Col md={24} style={{ marginTop: 16 }} className="address-wrapper">
                    <Card>
                        <div className="icons-container">
                            <div className="icons">
                                <SVGIcon icon="location" />
                            </div>
                        </div>
                        <Typography.Text className="title">
                            <Translate>Address</Translate>
                        </Typography.Text>
                        <Typography.Text className="description">
                            <Translate>3703 Dammam Road Gharnata h, Riyadh 1324 2, Saudi Arabia</Translate>
                        </Typography.Text>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default MainHeader;
