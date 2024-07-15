import { Layout, Menu, Grid, Button, Row, Col } from 'antd';
import NavLink from '../navlink';
import { useMemo } from 'react';
import CompanyLogo from '../company-logo';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
    const { xs } = useBreakpoint();
    const menuItems = useMemo(
        () =>
            [
                { key: 'home', label: <NavLink path={`/`} title="Home" />, order: 1 },
                { key: 'about-us', label: <NavLink path={`/about-us`} title="About Us" />, order: 2 },
                { key: 'services', label: <NavLink path={`/services`} title="Services" />, order: 3 },
                { key: 'contact-us', label: <NavLink path={`/contact-us`} title="Contact Us" />, order: 4 },
            ].sort((a, b) => b.order - a.order),
        []
    );

    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                padding: 0,
                paddingInline: 16,
            }}
        >
            <Row style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', padding: 8, width: '100%' }}>
                <Col style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <CompanyLogo />
                </Col>
                <Col flex={1} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    {xs ? <Button icon={<MenuOutlined />} /> : <Menu mode="horizontal" items={menuItems} />}
                </Col>
            </Row>
        </Header>
    );
};

export default Navbar;
