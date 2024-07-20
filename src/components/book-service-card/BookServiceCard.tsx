import Translate from '@/components/translate';
import useTranslate from '@/hooks/useTranslate';
import { CalendarOutlined, EnvironmentOutlined, MailOutlined, MedicineBoxOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { theme, Row, Col, Card, Typography, Form, Input, DatePicker, Select, Button } from 'antd';
import { PHONE_NUMBER } from '@/data/contants';
import Link from 'next/link';

const BookServiceCard = () => {
    const {
        token: { colorPrimary, colorText },
    } = theme.useToken();

    const textFullName = useTranslate('FullName', 'Full Name');
    const textEmail = useTranslate('Email', 'Email');
    const textPhoneNumber = useTranslate('PhoneNumber', 'Phone Number');
    const textSelectLocation = useTranslate('SelectLocation', 'Select Location');
    const textSelectServices = useTranslate('SelectServices', 'Select Services');
    const textSelectDate = useTranslate('SelectDate', 'Select Date');

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
                            placeholder={
                                <>
                                    <EnvironmentOutlined style={{ color: colorPrimary }} /> {textSelectLocation}
                                </>
                            }
                        />
                    </Form.Item>

                    <Form.Item name="services">
                        <Select
                            placeholder={
                                <>
                                    <MedicineBoxOutlined style={{ color: colorPrimary }} /> {textSelectServices}
                                </>
                            }
                        />
                    </Form.Item>

                    <Form.Item name="date">
                        <DatePicker placeholder={textSelectDate} suffixIcon={<CalendarOutlined style={{ color: colorPrimary }} />} />
                    </Form.Item>

                    <Form.Item>
                        <Row gutter={[8, 8]}>
                            <Col flex={1}>
                                <Button type="primary" block>
                                    <Link href="tel:88888" passHref>
                                        <Translate>Book Now</Translate>
                                    </Link>
                                </Button>
                            </Col>
                            <Col flex={1}>
                                <Button ghost type="primary" block>
                                    <Link href={`tel:${PHONE_NUMBER}`} passHref>
                                        <Translate>Call Now</Translate>
                                    </Link>
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </div>
        </Card>
    );
};

export default BookServiceCard;
