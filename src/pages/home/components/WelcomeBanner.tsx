import Translate from '@/components/translate';
import useTranslate from '@/hooks/useTranslate';
import { Card, Col, Row, theme, Typography } from 'antd';
import React from 'react';

const WelcomeBanner: React.FC = () => {
    const {
        token: { colorPrimary },
    } = theme.useToken();

    const textwelcometogheaserviceswherewedeliver = useTranslate('WELCOMETOGHEASERVICESWHEREWEDELIVER', 'Welcome to GHEA Services, Where We Deliver');
    const textexceptionalcareforyouandyourfamily = useTranslate('EXCEPTIONALCAREFORYOUANDYOURFAMILY', 'Exceptional Care for You and Your Family');

    return (
        <Row className="welcome-banner-wrapper" gutter={[16, 16]}>
            <Col span={14} className="welcome-banner-image">
                <Card style={{ background: colorPrimary, height: '100%', flex: 1 }} />
                <div style={{ display: 'flex', flex: 1, rowGap: 16, flexDirection: 'column' }}>
                    <Card style={{ background: colorPrimary, height: '50%', flex: 1 }} />
                    <Card style={{ background: colorPrimary, height: '50%', flex: 1 }} />
                </div>
                <Card style={{ background: colorPrimary, height: '100%', flex: 1 }} />
                {/* <Card style={{ background: colorPrimary, height: '100%', flex: 1, width: 300 }} />
                <div>
                    <Card style={{ background: colorPrimary, height: '100%' }} />
                    <Card style={{ background: colorPrimary, height: '100%' }} />
                </div>
                <Card style={{ background: colorPrimary, height: '100%', width: 180 }} /> */}
            </Col>
            <Col span={10}>
                <Typography.Paragraph className="welcome-title">
                    {textwelcometogheaserviceswherewedeliver}{' '}
                    <Typography.Text italic underline style={{ color: colorPrimary }}>
                        {textexceptionalcareforyouandyourfamily}
                    </Typography.Text>
                </Typography.Paragraph>

                <Typography.Paragraph className="welcome-description">
                    <Translate>
                        GHEA Services is a top provider specializing in comprehensive family support for all ages and needs. We supply individuals
                        trained to meet client&apos;s needs.
                    </Translate>
                </Typography.Paragraph>

                <Typography.Paragraph className="welcome-description">
                    <Translate>We aspire to provide our services to everyone to gain their trust and let us be their first choice.</Translate>
                </Typography.Paragraph>

                <Typography.Paragraph className="welcome-description">
                    <Translate>We are dedicated to delivering exceptional assistance, and facilitating our client&apos;s daily lives.</Translate>
                </Typography.Paragraph>
            </Col>
        </Row>
    );
};

export default WelcomeBanner;
