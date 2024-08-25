import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import Translate from '@/components/translate';
import SVGIcon from '@/components/svg-icon';
import Link from 'next/link';
import { PHONE_NUMBER } from '@/data/constants';
import { ClockCircleOutlined } from '@ant-design/icons';
import BookServiceCard from '@/components/book-service-card';

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

            <Row className="contact-us" gutter={[16, 16]}>
                <Col sm={24} md={14}>
                    <Card style={{ width: '100%' }}>
                        <Typography.Text className="title">
                            <Translate>Contact Info</Translate>
                        </Typography.Text>

                        <Row>
                            <Col sm={24}>
                                <div className="icons-container">
                                    <div className="icons">
                                        <SVGIcon icon="phone" />
                                    </div>

                                    <Row style={{ flex: 'inherit', flexDirection: 'column' }}>
                                        <Col sm={24}>
                                            <Typography.Text className="title">
                                                <Translate>Phone</Translate>
                                            </Typography.Text>
                                        </Col>

                                        <Col sm={24}>
                                            <Typography.Text className="description">
                                                <Link href={`tel:${PHONE_NUMBER}`} passHref>
                                                    <Translate>+966 54 114 2624</Translate>
                                                </Link>
                                            </Typography.Text>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col sm={24}>
                                <div className="icons-container">
                                    <div className="icons">
                                        <SVGIcon icon="mail" />
                                    </div>

                                    <Row style={{ flex: 'inherit', flexDirection: 'column' }}>
                                        <Col sm={24}>
                                            <Typography.Text className="title">
                                                <Translate>Email</Translate>
                                            </Typography.Text>
                                        </Col>

                                        <Col sm={24}>
                                            <Typography.Text className="description">
                                                <Link href={`mailto:info@gheamedical.com`} passHref>
                                                    <Translate>info@gheamedical.com</Translate>
                                                </Link>
                                            </Typography.Text>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col sm={24}>
                                <div className="icons-container">
                                    <div className="icons">
                                        <ClockCircleOutlined width={32} height={32} style={{ fontSize: 28 }} />
                                    </div>

                                    <Row style={{ flex: 'inherit', flexDirection: 'column' }}>
                                        <Col sm={24}>
                                            <Typography.Text className="title">
                                                <Translate>Work Hours</Translate>
                                            </Typography.Text>
                                        </Col>
                                        <Col sm={24}>
                                            <Typography.Text className="description">
                                                <Translate>08:00 - 17:00</Translate>
                                            </Typography.Text>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col sm={24}>
                                <div className="icons-container">
                                    <div className="icons">
                                        <SVGIcon icon="location" />
                                    </div>

                                    <Row style={{ flex: 'inherit', flexDirection: 'column' }}>
                                        <Col sm={24}>
                                            <Typography.Text className="title">
                                                <Translate>Address</Translate>
                                            </Typography.Text>
                                        </Col>

                                        <Col sm={24}>
                                            <Typography.Text className="description">
                                                <Link href="https://maps.app.goo.gl/YYDMibRzYyfDC6JH8" passHref target="_blank">
                                                    <Translate>
                                                        بيسكس مساحات عمل مشتركة Basix Coworking Space No 2, 7755 Ahmad Al Attas, Al Zahra, Jeddah
                                                        23425, Saudi Arabia
                                                    </Translate>
                                                </Link>
                                            </Typography.Text>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col sm={24} md={10}>
                    <BookServiceCard />
                </Col>
            </Row>
        </>
    );
};

export default MainHeader;
