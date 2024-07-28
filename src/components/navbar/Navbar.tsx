import { Layout, Grid, Button, Row, Col, Select, Drawer, theme } from 'antd';
import NavLink from '../navlink';
import { useMemo, useState } from 'react';
import CompanyLogo from '../company-logo';
import { useTranslateContext } from '@/context/TranslateContext';
import { MenuOutlined } from '@ant-design/icons';
import SVGIcon from '../svg-icon';
import Translate from '../translate';
import styled from 'styled-components';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const SelectMobileWrapper = styled.div`
    .ant-select-dropdown {
        position: relative;
        margin-top: 8px;
        top: unset !important;
        inset: unset !important;
        z-index: unset !important;
        box-shadow: unset !important;

        .ant-select {
            width: 100%;
        }

        .ant-select-item {
            margin: 4px;
            padding: 12px 16px;
        }
    }
`;

const Navbar = () => {
    const { xs } = useBreakpoint();
    const { langCode, setLangCode } = useTranslateContext();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [selectMobileOpen, setSelectMobileOpen] = useState<boolean>(false);

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
            {
                key: 'contact-us',
                label: <NavLink {...(xs && { onClick: () => setOpenMenu(false) })} path={`/contact-us`} title="Contact Us" />,
                order: 4,
            },
        ],
        [xs]
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
                        <Col flex={1}>
                            <div className="menu-wrapper">
                                {MenuItems.map((item, index) => (
                                    <div key={index}>{item.label}</div>
                                ))}
                            </div>
                        </Col>
                        <Col>
                            <Select
                                value={langCode.toString()}
                                options={ArrLang}
                                onSelect={(val) => {
                                    setLangCode(val);
                                }}
                                popupMatchSelectWidth={false}
                            />
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
                                <div key={index} className="nav-item">
                                    {item.label}
                                </div>
                            ))}

                            <div className="nav-item">
                                <Select
                                    value={langCode.toString()}
                                    options={ArrLang}
                                    onSelect={(val) => {
                                        setLangCode(val);
                                        setOpenMenu(false);
                                    }}
                                    {...(xs && {
                                        onClick: () => {
                                            if (xs) setSelectMobileOpen(true);
                                        },
                                        open: false,
                                        showSearch: false,
                                    })}
                                    popupMatchSelectWidth={false}
                                />
                            </div>
                        </div>
                    </Drawer>
                    <Drawer
                        title={<Translate>Select Language</Translate>}
                        height={402}
                        open={selectMobileOpen}
                        onClose={() => setSelectMobileOpen(false)}
                        closeIcon={null}
                        maskClosable
                        placement="bottom"
                        styles={{
                            header: {
                                textAlign: 'center',
                            },
                            content: {
                                borderTopRightRadius: 8,
                                borderTopLeftRadius: 8,
                            },
                            footer: {
                                display: 'flex',
                                justifyContent: 'center',
                            },
                        }}
                    >
                        <SelectMobileWrapper id="select-mobile-wrapper">
                            <Select
                                placeholder={<Translate>Select Language</Translate>}
                                onSelect={(val) => {
                                    setLangCode(val);
                                    setSelectMobileOpen(false);
                                    setOpenMenu(false);
                                }}
                                getPopupContainer={() => document.getElementById('select-mobile-wrapper') || document.body}
                                open
                                size="large"
                                options={ArrLang}
                            />
                        </SelectMobileWrapper>
                    </Drawer>
                </>
            )}
        </Header>
    );
};

export default Navbar;
