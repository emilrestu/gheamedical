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
    const [form] = Form.useForm();

    const textFullName = useTranslate('FullName', 'Full Name');
    const textEmail = useTranslate('Email', 'Email');
    const textPhoneNumber = useTranslate('PhoneNumber', 'Phone Number');
    const textSelectLocation = useTranslate('SelectLocation', 'Select Location');
    const textSelectServices = useTranslate('SelectServices', 'Select Services');
    const textIwantBookServices = useTranslate('HELLOIWANTTOBOOKYOURSERVICES', 'Hello, I want to book your services');
    const textMyDetails = useTranslate('HERESMYDETAILS', "Here's my details");
    const textLocation = useTranslate('LOCATION', ' Location');
    const textServices = useTranslate('SERVICES', ' Services');

    const formValue = Form.useWatch(null, form);

    const CityData = useMemo(() => {
        if (langCode === 'ar') return CityArabic;

        return CityEnglish;
    }, [langCode]);

    const ServiceData = useMemo(() => {
        if (langCode === 'ar') return ServicesArabic;

        return ServicesEnglish;
    }, [langCode]);

    const getWALink = () => {
        const ArrValue = [`${textIwantBookServices}\n`];

        if (formValue?.full_name || formValue?.email || formValue?.phone || formValue?.location || formValue?.services) {
            ArrValue.push(`${textMyDetails}:`);

            if (formValue?.full_name) ArrValue.push(`${textFullName}: ${formValue?.full_name}`);
            if (formValue?.email) ArrValue.push(`${textEmail}: ${formValue?.email}`);
            if (formValue?.phone) ArrValue.push(`${textPhoneNumber}: ${formValue?.phone}`);
            if (formValue?.location) ArrValue.push(`${textLocation}: ${formValue?.location}`);
            if (formValue?.location) ArrValue.push(`${textServices}: ${formValue?.services}`);
        }

        return `https://wa.me/${PHONE_NUMBER}?text=${encodeURI(ArrValue.join('\n'))}`;
    };

    return (
        <Card
            className="book-services-card"
            title={
                <>
                    <Typography.Title level={4}>
                        <Translate>Book Our Services</Translate>
                    </Typography.Title>
                    <Typography.Paragraph style={{ color: colorText, fontSize: 12, fontWeight: 400, textWrap: 'wrap' }}>
                        <Translate>Schedule Your Appointment for Exceptional Family and Personal Health Care in Saudi Arabia</Translate>
                    </Typography.Paragraph>
                </>
            }
        >
            <div>
                <Form form={form}>
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
                            options={ServiceData.map((item, index) => ({
                                key: index,
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
                                <Link href={getWALink()} passHref target="_blank">
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
