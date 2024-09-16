import SVGIcon from '@/components/svg-icon';
import Translate from '@/components/translate';
import { PHONE_NUMBER } from '@/data/constants';
import { Button, Col, Row, Space, Typography } from 'antd';
import Link from 'next/link';
import React, { useMemo } from 'react';
import ServicesDetailEnglish from '@/data/services-detail/en.json';
import ServicesDetailArabic from '@/data/services-detail/ar.json';
import { useTranslateContext } from '@/context/TranslateContext';
import Head from 'next/head';

export type ServiceDetailType = {
    serviceId?:
        | 'personal-service'
        | 'personal-service-assistance'
        | 'child-services'
        | 'service-for-the-elderly'
        | 'service-for-all-ages'
        | 'alzheimers-service';
};

const ServiceDetail: React.FC<ServiceDetailType> = ({ serviceId }) => {
    const { langCode } = useTranslateContext();

    const ServiceData = useMemo(() => {
        if (langCode === 'ar') return ServicesDetailArabic;

        return ServicesDetailEnglish;
    }, [langCode]).filter((item) => (serviceId ? item.serviceId === serviceId : 1 === 1));

    return (
        <>
            {ServiceData.length === 1 && (
                <Head>
                    <title dir="ltr">{`GHEA Services | ${ServiceData?.[0]?.pageTitle}`}</title>
                </Head>
            )}
            <Row className="services-detail-container">
                <Col md={24}>
                    {ServiceData.map((item, i) => (
                        <Row className="services-detail-item" key={i}>
                            <Col md={12} xs={24} className="left-item">
                                <div className="icons-container">
                                    <div className="icons">
                                        <SVGIcon icon={item.icon as 'personal-services'} />
                                    </div>
                                </div>

                                <Typography.Text className="title">
                                    <Translate>{item.title}</Translate>
                                </Typography.Text>

                                <Typography.Paragraph className="description">
                                    <Translate>{item.description}</Translate>
                                </Typography.Paragraph>

                                <Space>
                                    <Link href={`https://wa.me/${PHONE_NUMBER}`} passHref target="_blank">
                                        <Button type="primary">
                                            <Translate>Book Now</Translate>
                                        </Button>
                                    </Link>
                                    {ServiceData.length > 1 ? (
                                        <Link href={`services/${item.serviceId}`}>
                                            <Button>
                                                <Translate>View Detail</Translate>
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Link href="/services">
                                            <Button>
                                                <Translate>View Other Services</Translate>
                                            </Button>
                                        </Link>
                                    )}
                                </Space>
                            </Col>
                            <Col md={12} xs={24} className="right-item">
                                <Typography.Text className="title">
                                    <Translate>What will you get</Translate>
                                </Typography.Text>

                                <ul>
                                    {item.details.map((detail, ix) => (
                                        <li key={ix}>{detail}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </>
    );
};

export default ServiceDetail;
