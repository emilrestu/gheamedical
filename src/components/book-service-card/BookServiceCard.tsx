import Translate from '@/components/translate';
import useTranslate from '@/hooks/useTranslate';
import { EnvironmentOutlined, MailOutlined, MedicineBoxOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { theme, Row, Col, Card, Typography, Form, Input, Button } from 'antd';
import { PHONE_NUMBER } from '@/data/constants';
import Link from 'next/link';
import Select from '../select';
import { useMemo } from 'react';
import { useTranslateContext } from '@/context/TranslateContext';
import CityEnglish from '@/data/city/en.json';
import CityArabic from '@/data/city/ar.json';
import ServicesEnglish from '@/data/services/en.json';
import ServicesArabic from '@/data/services/ar.json';

const BookServiceCard = () => {
    const {
        token: { colorPrimary, colorText },
    } = theme.useToken();

    const { langCode } = useTranslateContext();

    const textFullName = useTranslate('FullName', 'Full Name');
    const textEmail = useTranslate('Email', 'Email');
    const textPhoneNumber = useTranslate('PhoneNumber', 'Phone Number');
    const textSelectLocation = useTranslate('SelectLocation', 'Select Location');
    const textSelectServices = useTranslate('SelectServices', 'Select Services');

    const CityData = useMemo(() => {
        if (langCode === 'ar') return CityArabic;

        return CityEnglish;
    }, [langCode]);

    const ServiceData = useMemo(() => {
        if (langCode === 'ar') return ServicesArabic;

        return ServicesEnglish;
    }, [langCode]);

    return (
        <Card
            className="book-services-card"
            title={
                <>
                    <Typography.Title level={4}>
                        <Translate>Book Our Services</Translate>
                    </Typography.Title>
                    <Typography.Paragraph style={{ color: colorText, fontSize: 12, fontWeight: 400, textWrap: 'wrap' }}>
                        <Translate>Schedule Your Appointment for Exceptional Family and Personal Health Care</Translate>
                    </Typography.Paragraph>
                </>
            }
        >
            <div>
                <Form>
                    <Form.Item name="full_name">
                        <Input prefix={<UserOutlined style={{ color: colorPrimary }} />} placeholder={textFullName} />
                    </Form.Item>

                    <Form.Item name="email">
                        <Input prefix={<MailOutlined style={{ color: colorPrimary }} />} placeholder={textEmail} />
                    </Form.Item>

                    <Form.Item name="phone">
                        <Input prefix={<PhoneOutlined style={{ color: colorPrimary }} />} placeholder={textPhoneNumber} />
                    </Form.Item>

                    <Form.Item name="location">
                        <Select
                            options={CityData.map((item, index) => ({
                                key: index,
                                value: item,
                                label: item,
                            }))}
                            title={textSelectLocation}
                            placeholder={
                                <>
                                    <EnvironmentOutlined style={{ color: colorPrimary }} /> {textSelectLocation}
                                </>
                            }
                            virtual
                        />
                    </Form.Item>

                    <Form.Item name="services">
                        <Select
                            options={ServiceData.map((item) => ({
                                value: item.label,
                                label: item.label,
                            }))}
                            title={textSelectServices}
                            placeholder={
                                <>
                                    <MedicineBoxOutlined style={{ color: colorPrimary }} /> {textSelectServices}
                                </>
                            }
                            virtual
                        />
                    </Form.Item>

                    <Form.Item>
                        <Row gutter={[8, 8]}>
                            <Col flex={1}>
                                <Link href={`https://wa.me/${PHONE_NUMBER}`} passHref target="_blank">
                                    <Button type="primary" block>
                                        <Translate>Book Now</Translate>
                                    </Button>
                                </Link>
                            </Col>
                            <Col flex={1}>
                                <Link href={`tel:${PHONE_NUMBER}`} passHref target="_blank">
                                    <Button ghost type="primary" block>
                                        <Translate>Call Now</Translate>
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </div>
        </Card>
    );
};

export default BookServiceCard;
