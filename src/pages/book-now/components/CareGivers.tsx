import { Button, Card, Col, Row, Typography } from 'antd';
import CareGiversEnglish from '@/data/caregivers/en.json';
import CareGiversArabic from '@/data/caregivers/ar.json';
import React, { useMemo } from 'react';
import { useTranslateContext } from '@/context/TranslateContext';
import Link from 'next/link';
import Translate from '@/components/translate';
import { PHONE_NUMBER } from '@/data/constants';
import useTranslate from '@/hooks/useTranslate';

const CareGivers = () => {
    const { langCode } = useTranslateContext();

    const textIwantBookServices = useTranslate('HELLOIWANTTOBOOKYOURSERVICES', 'Hello, I want to book your services');
    const textCareGivers = useTranslate('CareGiver', 'Caregiver');

    const BannerData = useMemo(() => {
        if (langCode === 'ar') return CareGiversArabic;

        return CareGiversEnglish;
    }, [langCode]);

    const bookHandler = (name: string) => {
        const ArrValue = [`${textIwantBookServices}\n`];

        ArrValue.push(`${textCareGivers}: ${name}`);

        window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURI(ArrValue.join('\n'))}`, '_blank');
    };

    return (
        <Row className="reservations-care-givers">
            <Col md={24} xs={24}>
                {BannerData.map((item, key) => (
                    <Card key={key}>
                        <div className="caregiver-avatar">{/* <Image /> */}</div>

                        <div className="caregiver-description">
                            <Typography.Text className="title">{item.name}</Typography.Text>
                            <Typography.Text className="description">{item.position}</Typography.Text>
                        </div>

                        <div className="caregiver-button-group">
                            <Button type="primary" ghost>
                                <Link href={`/assets/cv/${item.cv_link}`} passHref target="_blank">
                                    <Translate>View CV</Translate>
                                </Link>
                            </Button>

                            <Button
                                type="primary"
                                onClick={() => {
                                    bookHandler(item.name);
                                }}
                            >
                                <Translate>Book Now</Translate>
                            </Button>
                        </div>
                    </Card>
                ))}
            </Col>
        </Row>
    );
};

export default CareGivers;
