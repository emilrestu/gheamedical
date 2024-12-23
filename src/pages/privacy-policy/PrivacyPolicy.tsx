import Page from '@/components/page';
import { Col, Row, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <Page>
            <Row className="privacy-policy">
                <Col span={24}>
                    <Typography.Title level={2}>Privacy Policy</Typography.Title>
                    <Typography.Paragraph style={{ textAlign: 'right' }}>
                        <strong>Effective Date:</strong> 24 December 2024
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        and protect the personal information you provide when visiting our website, At Ghea Services, we are committed to protecting
                        the privacy of our users. This Privacy Policy explains how we collect, use,
                        <a href="https://www.gheamedical.com">www.gheamedical.com</a> (the &quot;Website&quot;).
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        By using the Website, you agree to the terms outlined in this Privacy Policy. If you do not agree, please do not use the
                        Website.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>1. Information We Collect</Typography.Title>
                    <ul>
                        <li>
                            <strong>Personal Information:</strong> Name, email address, and location.
                        </li>
                        <li>
                            <strong>Service Details:</strong> Information about your needs (e.g., type of homecare services required).
                        </li>
                        <li>
                            <strong>Automatically Collected Data:</strong> When you visit the Website, we may collect technical information such as
                            your IP address, browser type, and usage data through cookies.
                        </li>
                    </ul>

                    <Typography.Title level={4}>2. How We Use Your Information</Typography.Title>
                    <ul>
                        <li>To understand your needs and provide the appropriate homecare services.</li>
                        <li>To respond to your inquiries and communicate with you.</li>
                        <li>To improve the functionality and usability of our Website.</li>
                        <li>To comply with legal obligations in Saudi Arabia.</li>
                    </ul>

                    <Typography.Title level={4}>3. How We Protect Your Information</Typography.Title>
                    <ul>
                        <li>
                            <strong>Data Encryption:</strong> Securing data during transmission.
                        </li>
                        <li>
                            <strong>Restricted Access:</strong> Limiting access to personal data only to authorized personnel.
                        </li>
                        <li>
                            <strong>Regular Audits:</strong> Conducting regular security checks on our systems.
                        </li>
                    </ul>
                    <Typography.Paragraph>
                        Despite our efforts, no system can be completely secure. Therefore, you share information at your own risk.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>4. Cookies</Typography.Title>
                    <Typography.Paragraph>
                        Our Website uses cookies to enhance your browsing experience. For details on how we use cookies, please refer to our Cookies
                        Policy.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>5. Sharing Your Information</Typography.Title>
                    <ul>
                        <li>
                            <strong>With Service Providers:</strong> To fulfill your requests, we may share information with third-party professionals
                            who provide homecare services.
                        </li>
                        <li>
                            <strong>Legal Compliance:</strong> When required by Saudi Arabian law or to protect our legal rights.
                        </li>
                    </ul>

                    <Typography.Title level={4}>6. Your Rights</Typography.Title>
                    <Typography.Paragraph>As a user, you have the following rights regarding your personal data:</Typography.Paragraph>
                    <ul>
                        <li>
                            <strong>Access:</strong> Request a copy of the information we have collected about you.
                        </li>
                        <li>
                            <strong>Correction:</strong> Request updates or corrections to inaccurate information.
                        </li>
                        <li>
                            <strong>Deletion:</strong> Request the deletion of your data, subject to legal and operational requirements.
                        </li>
                        <li>
                            <strong>Opt-Out:</strong> Withdraw your consent for us to use your data for certain purposes, such as marketing
                            communications.
                        </li>
                    </ul>
                    <Typography.Paragraph>
                        To exercise these rights, please contact us at <Link href="mailto:info@gheamedical.com">info@gheamedical.com</Link>.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>7. Retention of Information</Typography.Title>
                    <Typography.Paragraph>
                        We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with
                        legal obligations, or resolve disputes.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>8. Children&apos;s Privacy</Typography.Title>
                    <Typography.Paragraph>
                        We are committed to protecting the privacy of children. If we discover that a child under 18 has provided personal data
                        without parental consent, we will delete the information immediately.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>9. Changes to This Privacy Policy</Typography.Title>
                    <Typography.Paragraph>
                        We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and the
                        &quot;Effective Date&quot; will be updated. Continued use of the Website after changes are made indicates your acceptance of
                        the updated Privacy Policy.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>10. Contact Us</Typography.Title>
                    <Typography.Paragraph>
                        If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
                    </Typography.Paragraph>
                    <div className="contact">
                        <Typography.Paragraph>
                            <strong>Ghea Services</strong>
                            <br />
                            Jeddah, Saudi Arabia
                            <br />
                            Email: <Link href="mailto:info@gheamedical.com">info@gheamedical.com</Link>
                        </Typography.Paragraph>
                    </div>
                </Col>
            </Row>
        </Page>
    );
};

export default PrivacyPolicy;
