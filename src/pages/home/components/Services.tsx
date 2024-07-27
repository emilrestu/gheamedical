import Translate from '@/components/translate';
import { Button, Card, Col, Collapse, Row, theme, Typography } from 'antd';
import React, { useMemo, useState } from 'react';
import ServicesEnglish from '@/data/services/en.json';
import ServicesArabic from '@/data/services/ar.json';
import { useTranslateContext } from '@/context/TranslateContext';
import SVGIcon from '@/components/svg-icon';

const Services: React.FC = () => {
    const {
        token: { colorPrimary },
    } = theme.useToken();
    const { langCode } = useTranslateContext();
    const [activeKey, setActiveKey] = useState<string[]>(['0']);

    const ServiceData = useMemo(() => {
        if (langCode === 'ar') return ServicesArabic;

        return ServicesEnglish;
    }, [langCode]);

    return (
        <Row className="service-container" gutter={[48, 48]}>
            <Col span={12} className="service-image">
                <Card style={{ background: colorPrimary, minHeight: 240, height: 240, flex: 1 }} />
                <div style={{ display: 'flex', flex: 1, gap: 16, flexDirection: 'row' }}>
                    <Card style={{ background: colorPrimary, minHeight: 240, height: 240, flex: 1 }} />
                    <Card style={{ background: colorPrimary, minHeight: 240, height: 240, flex: 1 }} />
                </div>
                <Card style={{ background: colorPrimary, minHeight: 240, height: 240, flex: 1 }} />
            </Col>
            <Col span={12} className="service-description">
                <Row>
                    <Col span={24} className="service-description-header">
                        <Typography.Text className="title">
                            <Translate>Our Best Services for Your Health</Translate>
                        </Typography.Text>

                        <Typography.Paragraph className="description">
                            <Translate>
                                At GHEA Services, we are committed to providing top-notch care designed to meet your specific health needs.
                            </Translate>
                        </Typography.Paragraph>
                    </Col>

                    <Col span={24} className="service-accordion">
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
