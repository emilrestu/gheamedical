import SVGIcon from '@/components/svg-icon';
import Translate from '@/components/translate';
import { Col, Grid, Row, Typography } from 'antd';
import React from 'react';
import HowWeWorkIconsBG from '@/assets/components/HowWeWorkIconsBG.png';
import OurValuesIconsBGXS from '@/assets/components/OurValuesIconsBGXS.png';
import Image from 'next/image';
import { useThemesContext } from '@/context/ThemesContext';

const OurValues = () => {
    const { xs } = Grid.useBreakpoint();
    const { isArabic } = useThemesContext();

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

            <Row
                className="how-we-work-icons-wrapper about-us-our-values-icons"
                {...(xs && {
                    style: {
                        height: 628,
                    },
                })}
            >
                {/* <div className="bg-wrapper">{xs ? <OurValuesIconsBGXS /> : <HowWeWorkIconsBG />}</div> */}
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
