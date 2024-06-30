import { Layout, Menu } from 'antd';
import NavLink from '../navlink';
import { useMemo } from 'react';

const { Header } = Layout;

const Navbar = () => {
    const menuItems = useMemo(
        () => [
            { key: 'home', label: <NavLink path={`/`} title="Home" /> },
            { key: 'about-us', label: <NavLink path={`/about-us`} title="About Us" /> },
            { key: 'services', label: <NavLink path={`/services`} title="Services" /> },
            { key: 'contact-us', label: <NavLink path={`/contact-us`} title="Contact Us" /> },
        ],
        []
    );

    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Menu mode="horizontal" items={menuItems} />
        </Header>
    );
};

export default Navbar;
