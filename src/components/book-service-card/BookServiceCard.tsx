import Translate from '@/components/translate';
import useTranslate from '@/hooks/useTranslate';
import { EnvironmentOutlined, MailOutlined, MedicineBoxOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { theme, Row, Col, Card, Typography, Form, Input, Button } from 'antd';
import { PHONE_NUMBER } from '@/data/constants';
import Link from 'next/link';
import Select from '../select';

const BookServiceCard = () => {
    const {
        token: { colorPrimary, colorText },
    } = theme.useToken();

    const textFullName = useTranslate('FullName', 'Full Name');
    const textEmail = useTranslate('Email', 'Email');
    const textPhoneNumber = useTranslate('PhoneNumber', 'Phone Number');
    const textSelectLocation = useTranslate('SelectLocation', 'Select Location');
    const textSelectServices = useTranslate('SelectServices', 'Select Services');

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
                            title={textSelectLocation}
                            placeholder={
                                <>
                                    <EnvironmentOutlined style={{ color: colorPrimary }} /> {textSelectLocation}
                                </>
                            }
                        />
                    </Form.Item>

                    <Form.Item name="services">
                        <Select
                            title={textSelectServices}
                            placeholder={
                                <>
                                    <MedicineBoxOutlined style={{ color: colorPrimary }} /> {textSelectServices}
                                </>
                            }
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
