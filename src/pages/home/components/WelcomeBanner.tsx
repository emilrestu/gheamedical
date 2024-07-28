import Translate from '@/components/translate';
import useTranslate from '@/hooks/useTranslate';
import { Card, Col, Grid, Row, theme, Typography } from 'antd';
import React from 'react';
import WelcomeBanner01 from '../assets/welcome-banner-01.png';
import WelcomeBanner02 from '../assets/welcome-banner-02.png';
import WelcomeBanner03 from '../assets/welcome-banner-03.png';
import WelcomeBanner04 from '../assets/welcome-banner-04.png';

const WelcomeBanner: React.FC = () => {
    const {
        token: { colorPrimary },
    } = theme.useToken();
    const { xs } = Grid.useBreakpoint();

    const textwelcometogheaserviceswherewedeliver = useTranslate('WELCOMETOGHEASERVICESWHEREWEDELIVER', 'Welcome to GHEA Services, Where We Deliver');
    const textexceptionalcareforyouandyourfamily = useTranslate('EXCEPTIONALCAREFORYOUANDYOURFAMILY', 'Exceptional Care for You and Your Family');

    return (
        <Row className="home-content-wrapper welcome-banner-wrapper" gutter={[16, 16]}>
            <Col md={14} xs={24} className="welcome-banner-image">
                {xs ? (
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', rowGap: 8, gap: 8 }}>
                        <div style={{ display: 'flex', flex: 1, rowGap: 8 }}>
                            <Card
                                style={{ background: colorPrimary, flex: 1, backgroundImage: `url(${WelcomeBanner01.src})` }}
                                styles={{ body: { height: 227.5 } }}
                            >
                                <div className="image-mask" />
                            </Card>
                        </div>
                        <div style={{ display: 'flex', flex: 1, rowGap: 8, gap: 8 }}>
                            <div style={{ display: 'flex', flex: 1, rowGap: 8, flexDirection: 'column' }}>
                                <Card
                                    style={{ background: colorPrimary, height: 227.5, flex: 1, backgroundImage: `url(${WelcomeBanner02.src})` }}
                                    styles={{ body: { height: 227.5 } }}
                                >
                                    <div className="image-mask" />
                                </Card>
                            </div>
                            <div style={{ display: 'flex', flex: 1, rowGap: 8, flexDirection: 'column' }}>
                                <Card style={{ background: colorPrimary, height: '50%', flex: 1, backgroundImage: `url(${WelcomeBanner03.src})` }}>
                                    <div className="image-mask" />
                                </Card>
                                <Card style={{ background: colorPrimary, height: '100%', flex: 1, backgroundImage: `url(${WelcomeBanner04.src})` }}>
                                    <div className="image-mask" />
                                </Card>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <Card style={{ background: colorPrimary, height: '100%', flex: 1, backgroundImage: `url(${WelcomeBanner01.src})` }}>
                            <div className="image-mask" />
                        </Card>
                        <div style={{ display: 'flex', flex: 1, rowGap: 16, flexDirection: 'column' }}>
                            <Card style={{ background: colorPrimary, height: '50%', flex: 1, backgroundImage: `url(${WelcomeBanner02.src})` }}>
                                <div className="image-mask" />
                            </Card>
                            <Card style={{ background: colorPrimary, height: '50%', flex: 1, backgroundImage: `url(${WelcomeBanner03.src})` }}>
                                <div className="image-mask" />
                            </Card>
                        </div>
                        <Card style={{ background: colorPrimary, height: '100%', flex: 1, backgroundImage: `url(${WelcomeBanner04.src})` }}>
                            <div className="image-mask" />
                        </Card>
                    </>
                )}
            </Col>
            <Col md={10} xs={24}>
                <Typography.Paragraph className="title welcome-title">
                    {textwelcometogheaserviceswherewedeliver}{' '}
                    <Typography.Text italic underline style={{ color: colorPrimary }}>
                        {textexceptionalcareforyouandyourfamily}
                    </Typography.Text>
                </Typography.Paragraph>

                <Typography.Paragraph className="description welcome-description">
                    <Translate>
                        GHEA Services is a top provider specializing in comprehensive family support for all ages and needs. We supply individuals
                        trained to meet client&apos;s needs.
                    </Translate>
                </Typography.Paragraph>

                <Typography.Paragraph className="description welcome-description">
                    <Translate>We aspire to provide our services to everyone to gain their trust and let us be their first choice.</Translate>
                </Typography.Paragraph>

                <Typography.Paragraph className="description welcome-description">
                    <Translate>We are dedicated to delivering exceptional assistance, and facilitating our client&apos;s daily lives.</Translate>
                </Typography.Paragraph>
            </Col>
        </Row>
    );
};

export default WelcomeBanner;
