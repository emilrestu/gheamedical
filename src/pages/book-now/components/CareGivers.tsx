import { Button, Card, Col, Row, Typography } from 'antd';
// import Image from 'next/image';
import CareGiversEnglish from '@/data/caregivers/en.json';
import CareGiversArabic from '@/data/caregivers/ar.json';
import React, { useMemo } from 'react';
import { useTranslateContext } from '@/context/TranslateContext';
import Link from 'next/link';
import Translate from '@/components/translate';
import { PHONE_NUMBER } from '@/data/constants';

const CareGivers = () => {
    const { langCode } = useTranslateContext();

    const BannerData = useMemo(() => {
        if (langCode === 'ar') return CareGiversArabic;

        return CareGiversEnglish;
    }, [langCode]);

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
                            {/* <Button type="primary" ghost>
                                <Translate>View CV</Translate>
                            </Button> */}

                            <Link href={`https://wa.me/${PHONE_NUMBER}`} passHref target="_blank">
                                <Button type="primary">
                                    <Translate>Book Now</Translate>
                                </Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </Col>
        </Row>
    );
};

export default CareGivers;
