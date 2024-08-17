import { Layout, Grid, Button, Row, Col, Drawer, theme, Space } from 'antd';
import { useMemo, useState } from 'react';
import CompanyLogo from '../company-logo';
import { useTranslateContext } from '@/context/TranslateContext';
import { GlobalOutlined, MenuOutlined } from '@ant-design/icons';
import Translate from '../translate';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
    const { xs } = useBreakpoint();
    const { langCode, setLangCode } = useTranslateContext();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const pathname = usePathname();

    const {
        token: { colorText, colorTextSecondary },
    } = theme.useToken();

    const ArrLang = useMemo(
        () => [
            {
                label: 'English',
                value: 'en',
            },
            {
                label: 'عربي',
                value: 'ar',
            },
        ],
        []
    );

    const NotActiveLang = useMemo(() => {
        return ArrLang.filter((item) => item.value.toString() !== langCode.toString())?.[0];
    }, [ArrLang, langCode]);

    const MenuItems = useMemo(
        () => [
            { key: 'home', path: '/', title: <Translate>Home</Translate>, order: 1 },
            {
                key: 'about-us',
                path: '/about-us',
                title: <Translate>About Us</Translate>,
                order: 2,
            },
            {
                key: 'services',
                path: '/services',
                title: <Translate>Services</Translate>,
                order: 3,
            },
            {
                key: 'book-now',
                path: '/book-now',
                title: <Translate>Book Now</Translate>,
                order: 4,
            },
            {
                key: 'contact-us',
                path: '/contact-us',
                title: <Translate>Contact Us</Translate>,
                order: 4,
            },
        ],
        []
    );

    const SelectLanguage = () => (
        <Col>
            <div
                style={{ cursor: 'pointer', fontWeight: 600 }}
                onClick={() => {
                    setLangCode(NotActiveLang.value);
                    if (xs) {
                        setOpenMenu(false);
                    }
                }}
            >
                <Space>
                    <div>{NotActiveLang.label}</div>
                    <GlobalOutlined />
                </Space>
            </div>
        </Col>
    );

    return (
        <Header className="header-wrapper">
            <Row style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                {xs ? (
                    <>
                        <Col xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <CompanyLogo />
                        </Col>
                        <Col xs={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Button icon={<MenuOutlined />} type="primary" ghost onClick={() => setOpenMenu(true)} />
                        </Col>
                    </>
                ) : (
                    <>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CompanyLogo />
                        </Col>
                        <Col flex={1} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 16 }}>
                            {MenuItems.map((item, index) => {
                                const isActive = item.path === '/' ? item.path === pathname : pathname.includes(item.path);

                                return (
                                    <div key={index}>
                                        <Link
                                            href={item.path}
                                            onClick={() => setOpenMenu(false)}
                                            style={{ fontWeight: isActive ? 600 : 500, color: isActive ? colorText : colorTextSecondary }}
                                        >
                                            {item.title}
                                        </Link>
                                    </div>
                                );
                            })}
                        </Col>
                        <Col>
                            <SelectLanguage />
                        </Col>
                    </>
                )}
            </Row>
            {xs && (
                <>
                    <Drawer
                        open={openMenu}
                        onClose={() => setOpenMenu(false)}
                        placement="left"
                        className="drawer-navbar-menu"
                        getContainer={() => document?.getElementById('app-layout') || document.body}
                        title={
                            <>
                                <CompanyLogo />
                            </>
                        }
                    >
                        <div className="menu-wrapper">
                            {MenuItems.map((item, index) => {
                                const isActive = item.path === '/' ? item.path === pathname : pathname.includes(item.path);

                                return (
                                    <div key={index} className="nav-item">
                                        <Link
                                            href={item.path}
                                            onClick={() => setOpenMenu(false)}
                                            style={{ fontWeight: isActive ? 600 : 500, color: isActive ? colorText : colorTextSecondary }}
                                        >
                                            {item.title}
                                        </Link>
                                    </div>
                                );
                            })}

                            <div className="nav-item">
                                <SelectLanguage />
                            </div>
                        </div>
                    </Drawer>
                </>
            )}
        </Header>
    );
};

export default Navbar;
