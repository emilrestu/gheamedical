import Page from '@/components/page';
import { Col, Row, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

const TermsConditions = () => {
    return (
        <Page>
            <Row className="terms-conditions">
                <Col span={24}>
                    <Typography.Title level={2}>Cookies Policy</Typography.Title>
                    <Typography.Paragraph>
                        Welcome to Ghea Services&apos; website (the &quot;Website&quot;). By accessing or using the Website at{' '}
                        <Link href="https://www.gheamedical.com">www.gheamedical.com</Link>, you agree to our use of cookies in accordance with this
                        Cookies Policy, as part of our broader Terms and Conditions.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>1. About Cookies</Typography.Title>
                    <Typography.Paragraph>
                        Cookies are small files placed on your device (computer, tablet, or mobile) to enhance your browsing experience. These files
                        help us understand user preferences, improve website functionality, and provide a better user experience.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>2. Types of Cookies We Use</Typography.Title>
                    <ul>
                        <li>
                            <strong>Essential Cookies:</strong> These are necessary for the Website to function properly. They enable basic features
                            like navigation and access to secure areas.
                        </li>
                        <li>
                            <strong>Performance Cookies:</strong> These help us monitor and analyze how visitors use the Website to improve
                            performance and usability.
                        </li>
                        <li>
                            <strong>Functional Cookies:</strong> These allow us to remember your preferences (e.g., location) to provide personalized
                            experiences.
                        </li>
                        <li>
                            <strong>Analytics Cookies:</strong> We may use third-party analytics services to understand Website traffic and usage
                            patterns.
                        </li>
                    </ul>

                    <Typography.Title level={4}>3. Consent to Use Cookies</Typography.Title>
                    <Typography.Paragraph>
                        By using our Website, you consent to the use of cookies. Upon your first visit, a cookie banner will appear asking for your
                        consent to non-essential cookies. You can manage your preferences through the cookie settings on the Website or your browser
                        settings.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>4. Managing Cookies</Typography.Title>
                    <Typography.Paragraph>
                        You can disable or delete cookies through your browser settings at any time. However, this may affect your ability to use
                        certain features of the Website. For more information, consult your browser&apos;s help section or visit{' '}
                        <Link href="https://www.allaboutcookies.org">www.allaboutcookies.org</Link>.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>5. Third-Party Cookies</Typography.Title>
                    <Typography.Paragraph>
                        We may allow third-party services to place cookies on your device for analytics or functionality purposes. We ensure that
                        these parties comply with applicable privacy laws, but we are not responsible for their cookie policies.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>6. Legal Compliance</Typography.Title>
                    <Typography.Paragraph>
                        Our cookie practices comply with applicable laws and regulations in Saudi Arabia, including the Kingdom&apos;s Personal Data
                        Protection Law (PDPL). We ensure your data is collected, stored, and used transparently and securely.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>7. Changes to This Policy</Typography.Title>
                    <Typography.Paragraph>
                        We reserve the right to update this Cookies Policy to reflect changes in legal requirements or Website functionality. Any
                        updates will be posted on this page with the effective date noted.
                    </Typography.Paragraph>

                    <Typography.Title level={4}>8. Contact Us</Typography.Title>
                    <Typography.Paragraph>
                        If you have any questions about our use of cookies or this policy, please contact us at:
                    </Typography.Paragraph>
                    <div className="contact">
                        <Typography.Paragraph>
                            <strong>Ghea Services</strong>
                            <br />
                            Saudi Arabia
                            <br />
                            Email: <a href="mailto:info@gheamedical.com">info@gheamedical.com</a>
                        </Typography.Paragraph>
                    </div>
                </Col>
            </Row>
        </Page>
    );
};

export default TermsConditions;
