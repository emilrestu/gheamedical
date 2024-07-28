import Translate from '@/components/translate';
import { Button, Card, Col, Collapse, Row, theme, Typography } from 'antd';
import React, { useMemo, useState } from 'react';
import ServicesEnglish from '@/data/services/en.json';
import ServicesArabic from '@/data/services/ar.json';
import Services01 from '../assets/banner-03.jpeg';
import Services02 from '../assets/banner-04.jpeg';
import Services03 from '../assets/services-01.png';
import Services04 from '../assets/services-02.png';
import { useTranslateContext } from '@/context/TranslateContext';
import SVGIcon from '@/components/svg-icon';
import { useThemesContext } from '@/context/ThemesContext';

const Services: React.FC = () => {
    const {
        token: { colorPrimary },
    } = theme.useToken();
    const { langCode } = useTranslateContext();
    const { isArabic } = useThemesContext();
    const [activeKey, setActiveKey] = useState<string[]>(['0']);

    const ServiceData = useMemo(() => {
        if (langCode === 'ar') return ServicesArabic;

        return ServicesEnglish;
    }, [langCode]);

    return (
        <Row className="service-container" gutter={[48, 48]}>
            <Col md={12} xs={24} className="service-image">
                <Card style={{ minHeight: 240, height: 240, flex: 1, backgroundImage: `url(${Services01.src})` }}>
                    <div className="image-mask" />
                </Card>
                <div style={{ display: 'flex', flex: 1, gap: 16, flexDirection: 'row' }}>
                    <Card style={{ minHeight: 240, height: 240, flex: 1, backgroundImage: `url(${Services02.src})` }}>
                        <div className="image-mask" />
                    </Card>
                    <Card style={{ minHeight: 240, height: 240, flex: 1, backgroundImage: `url(${Services03.src})` }}>
                        <div className="image-mask" />
                    </Card>
                </div>
                <Card style={{ minHeight: 240, height: 240, flex: 1, backgroundImage: `url(${Services04.src})` }}>
                    <div className="image-mask" />
                </Card>
            </Col>
            <Col md={12} xs={24} className="service-description">
                <Row>
                    <Col md={24} xs={24} className="service-description-header">
                        <Typography.Text className="title">
                            <Translate>Our Best Services for Your Health</Translate>
                        </Typography.Text>

                        <Typography.Paragraph className="description">
                            <Translate>
                                At GHEA Services, we are committed to providing top-notch care designed to meet your specific health needs.
                            </Translate>
                        </Typography.Paragraph>
                    </Col>

                    <Col md={24} xs={24} className={`service-accordion ${isArabic ? 'arabic' : ''}`.trim()}>
                        <Collapse
                            accordion
                            ghost
                            items={ServiceData.map((item) => ({
                                ...item,
                                label: <div className="title">{item.label}</div>,
                                children: <div className="description" dangerouslySetInnerHTML={{ __html: item.children }} />,
                            }))}
                            expandIcon={(props) => (
                                <Button
                                    {...(!props.isActive && { ghost: true })}
                                    type="primary"
                                    icon={
                                        <SVGIcon
                                            icon={props.isActive ? 'close' : 'plus'}
                                            style={props.isActive ? { fill: 'white' } : { fill: colorPrimary }}
                                        />
                                    }
                                />
                            )}
                            expandIconPosition="end"
                            defaultActiveKey={activeKey}
                            onChange={(key) => {
                                if (Array.isArray(key)) {
                                    setActiveKey(key);
                                } else {
                                    setActiveKey([key]);
                                }
                            }}
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Services;
