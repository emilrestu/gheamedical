import SVGIcon from '@/components/svg-icon';
import Translate from '@/components/translate';
import { Card, Col, Grid, Row, Typography } from 'antd';
import React, { useMemo } from 'react';
import HowWeWorkIconsBG from '@/assets/components/HowWeWorkIconsBG.png';
import OurValuesIconsBGXS from '@/assets/components/OurValuesIconsBGXS.png';
import Image from 'next/image';
import { useThemesContext } from '@/context/ThemesContext';
import OurValuesEnglish from '@/data/our-values/en.json';
import OurValuesArabic from '@/data/our-values/ar.json';
import { useTranslateContext } from '@/context/TranslateContext';

const OurValues = () => {
    const { xs } = Grid.useBreakpoint();
    const { isArabic } = useThemesContext();
    const { langCode } = useTranslateContext();

    const OurValuesData = useMemo(() => {
        if (langCode === 'ar') return OurValuesArabic;

        return OurValuesEnglish;
    }, [langCode]);

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

            <Row className="about-us-vision-mission" gutter={[24, 24]}>
                {OurValuesData.map((item, index) => (
                    <Col key={index} md={24} xs={24}>
                        <Card>
                            <Typography.Text className="title">
                                <Translate>{item.title}</Translate>
                            </Typography.Text>
                            <Typography.Text className="description">
                                <Translate>{item.description}</Translate>
                            </Typography.Text>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row
                className="how-we-work-icons-wrapper about-us-our-values-icons"
                {...(xs && {
                    style: {
                        height: 628,
                    },
                })}
            >
                <div
                    className="bg-wrapper"
                    {...(xs && {
                        style: {
                            height: 628,
                            display: 'flex',
                            justifyContent: 'center',
                        },
                    })}
                >
                    <Image
                        {...(xs && {
                            style: {
                                width: 'unset',
                            },
                        })}
                        src={xs ? OurValuesIconsBGXS : HowWeWorkIconsBG}
                        alt="GHEA Services - How We Work"
                    />
                </div>

                <div className="icons-group-container">
                    <div className="icons-container" style={{ marginTop: xs ? 40 : 60, ...(isArabic && xs && { marginRight: 120 }) }}>
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

                    <div className="icons-container" style={{ marginTop: xs ? 60 : -30, ...(isArabic && xs && { marginRight: 120 }) }}>
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
