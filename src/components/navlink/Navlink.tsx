import Link from 'next/link';
import Translate from '../translate';
import { CSSProperties, MouseEventHandler, useMemo } from 'react';
import { theme } from 'antd';
import { usePathname } from 'next/navigation';

const NavLink: React.FC<{ style?: CSSProperties; path: string; title: string; onClick?: () => any }> = ({ style = {}, path, title, onClick }) => {
    const {
        token: { colorText, colorTextSecondary },
    } = theme.useToken();
    const pathname = usePathname();

    const isActive = useMemo(() => pathname === path, [pathname, path]);

    return (
        <div>
            <Link
                href={`${path}`}
                {...(onClick && { onClick: onClick() })}
                style={{ ...style, fontWeight: isActive ? 600 : 500, color: isActive ? colorText : colorTextSecondary }}
            >
                <Translate>{title}</Translate>
            </Link>
        </div>
    );
};

export default NavLink;
