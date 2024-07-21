import { Col, Layout, Row, theme, Typography } from 'antd';
import Image from 'next/image';
import LogoFooter from '@/assets/logo/logo_02_01.png';
import Translate from '../translate';
import Link from 'next/link';
import { useMemo } from 'react';
import SVGIcon from '../svg-icon';

const { Footer: Footer_ } = Layout;

const Footer = () => {
    const {
        token: { colorPrimary, colorTextSecondary },
    } = theme.useToken();

    const PageItems = useMemo(
        () => [
            { href: '/', label: 'Home' },
            { href: '/about-us', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/reservations', label: 'Reservations' },
        ],
        []
    );

    const SocialMediaItems = useMemo(
        () => [
            { icon: <SVGIcon icon="twitter" />, title: 'GheaMedical', link: 'https://x.com/GheaMedical' },
            { icon: <SVGIcon icon="facebook" />, title: 'GHEA Medical', link: 'https://www.facebook.com/profile.php?id=100089815585576' },
            { icon: <SVGIcon icon="instagram" />, title: 'gheaservices.sa', link: 'https://www.instagram.com/gheaservices.sa/' },
        ],
        []
    );

    return (
        <Footer_ style={{ background: '#0F3630', paddingBlock: 24, paddingInline: 120 }}>
            <Row gutter={[8, 8]} style={{ padding: 16 }}>
                <Col span={12}>
                    <div style={{ width: 249 }}>
                        <Typography.Paragraph style={{ color: 'white', fontSize: 24, fontWeight: 600, marginBottom: 8 }}>
                            <Translate>We care for you and your family</Translate>
                        </Typography.Paragraph>
                        <Typography.Paragraph style={{ color: 'white', fontSize: 12, fontWeight: 400, marginBottom: 8 }}>
                            <Translate>You deserve the best from GHEA Medical Services</Translate>
                        </Typography.Paragraph>
                    </div>
                </Col>
                <Col span={12} style={{ display: 'flex', columnGap: 40, justifyContent: 'flex-end' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: 8 }}>
                        <Typography.Text style={{ color: 'white', fontSize: 14, fontWeight: 500 }}>
                            <Translate>Our Pages</Translate>
                        </Typography.Text>
                        {PageItems.map((item, index) => (
                            <Link key={index} href={item.href}>
                                <Typography.Text style={{ color: colorTextSecondary, fontSize: 14 }}>
                                    <Translate>{item.label}</Translate>
                                </Typography.Text>
                            </Link>
                        ))}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: 8 }}>
                        <Typography.Text style={{ color: 'white', fontSize: 14, fontWeight: 500 }}>
                            <Translate>Our Social Media</Translate>
                        </Typography.Text>
                        {SocialMediaItems.map((item, index) => (
                            <Link key={index} href={item.link} target="_blank">
                                <Typography.Text style={{ display: 'flex', color: colorTextSecondary, fontSize: 14, gap: 8 }}>
                                    {item.icon} <Translate>{item.title}</Translate>
                                </Typography.Text>
                            </Link>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row gutter={[8, 8]} style={{ padding: 16, borderTop: `1px solid ${colorPrimary}` }}>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={LogoFooter} height={32} alt="Ghea Services" />
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography.Text style={{ color: 'white', fontSize: 10 }}>
                        <Translate>Copyright &copy; GHEA Services 2024</Translate>
                    </Typography.Text>
                </Col>
            </Row>
        </Footer_>
    );
};

export default Footer;
