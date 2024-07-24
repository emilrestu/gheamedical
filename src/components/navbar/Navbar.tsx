import { Layout, Grid, Button, Row, Col, Space, Select } from 'antd';
import NavLink from '../navlink';
import { useMemo } from 'react';
import CompanyLogo from '../company-logo';
import Translate from '../translate';
import { useTranslateContext } from '@/context/TranslateContext';
import { useThemesContext } from '@/context/ThemesContext';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
    const { xs } = useBreakpoint();
    const { langCode, setLangCode } = useTranslateContext();
    const { isArabic } = useThemesContext();

    const ArrLang = [
        {
            label: 'English',
            value: 'en',
        },
        {
            label: 'Arabic',
            value: 'ar',
        },
    ];
    const MenuItems = useMemo(
        () =>
            [
                { key: 'home', label: <NavLink path={`/`} title="Home" />, order: 1 },
                { key: 'about-us', label: <NavLink path={`/about-us`} title="About Us" />, order: 2 },
                { key: 'services', label: <NavLink path={`/services`} title="Services" />, order: 3 },
                { key: 'reservations', label: <NavLink path={`/reservations`} title="Reservations" />, order: 4 },
            ].sort((a, b) => (langCode.toUpperCase() === 'AR' ? b.order - a.order : a.order - b.order)),
        [langCode]
    );

    return (
        <Header className="header-wrapper">
            <Row style={{ display: 'flex', alignItems: 'center', flexDirection: isArabic ? 'row-reverse' : 'row', width: '100%' }}>
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
                            <Translate>Contact Us</Translate>
                        </Button>

                        <Select
                            value={langCode.toString()}
                            options={ArrLang}
                            onSelect={(val) => {
                                setLangCode(val);
                            }}
                        />
                    </Space>
                </Col>
            </Row>
        </Header>
    );
};

export default Navbar;
