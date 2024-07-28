import { Layout, Grid, Button, Row, Col, Space, Select, Drawer, theme } from 'antd';
import NavLink from '../navlink';
import { useMemo, useState } from 'react';
import CompanyLogo from '../company-logo';
import Translate from '../translate';
import { useTranslateContext } from '@/context/TranslateContext';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';
import SVGIcon from '../svg-icon';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
    const { xs } = useBreakpoint();
    const { langCode, setLangCode } = useTranslateContext();
    const [openMenu, setOpenMenu] = useState(false);
    const {
        token: { colorPrimary },
    } = theme.useToken();

    const ArrLang = [
        {
            label: 'English',
            value: 'en',
        },
        {
            label: 'عربي',
            value: 'ar',
        },
    ];
    const MenuItems = useMemo(
        () => [
            { key: 'home', label: <NavLink {...(xs && { onClick: () => setOpenMenu(false) })} path={`/`} title="Home" />, order: 1 },
            { key: 'about-us', label: <NavLink {...(xs && { onClick: () => setOpenMenu(false) })} path={`/about-us`} title="About Us" />, order: 2 },
            { key: 'services', label: <NavLink {...(xs && { onClick: () => setOpenMenu(false) })} path={`/services`} title="Services" />, order: 3 },
            {
                key: 'reservations',
                label: <NavLink {...(xs && { onClick: () => setOpenMenu(false) })} path={`/reservations`} title="Reservations" />,
                order: 4,
            },
        ],
        []
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
                            <Button icon={<MenuOutlined />} type="primary" ghost onClick={() => setOpenMenu((open) => !open)} />
                        </Col>
                    </>
                ) : (
                    <>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CompanyLogo />
                        </Col>
                        <Col flex={1}>
                            <div className="menu-wrapper">
                                {MenuItems.map((item, index) => (
                                    <div key={index}>{item.label}</div>
                                ))}
                            </div>
                        </Col>
                        <Col>
                            <Space>
                                <Button ghost type="primary">
                                    <Link href="contact-us">
                                        <Translate>Contact Us</Translate>
                                    </Link>
                                </Button>

                                <Select
                                    value={langCode.toString()}
                                    options={ArrLang}
                                    onSelect={(val) => {
                                        setLangCode(val);
                                    }}
                                    popupMatchSelectWidth={false}
                                />
                            </Space>
                        </Col>
                    </>
                )}
            </Row>
            {xs && (
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
                    closeIcon={
                        <Button
                            ghost
                            type="primary"
                            style={{ height: 32, width: 32 }}
                            icon={<SVGIcon icon="close" style={{ fill: colorPrimary }} />}
                        />
                    }
                >
                    <div className="menu-wrapper">
                        {MenuItems.map((item, index) => (
                            <div key={index}>{item.label}</div>
                        ))}
                    </div>
                </Drawer>
            )}
        </Header>
    );
};

export default Navbar;
