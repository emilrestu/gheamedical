import Link from 'next/link';
import Translate from '../translate';
import { CSSProperties, useMemo } from 'react';
import { theme } from 'antd';
import { usePathname } from 'next/navigation';

const NavLink: React.FC<{ style?: CSSProperties; path: string; title: string }> = ({ style = {}, path, title }) => {
    const {
        token: { colorText, colorTextSecondary },
    } = theme.useToken();
    const pathname = usePathname();

    const isActive = useMemo(() => pathname === path, [pathname, path]);

    return (
        <div>
            <Link href={`${path}`} style={{ ...style, fontWeight: isActive ? 600 : 500, color: isActive ? colorText : colorTextSecondary }}>
                <Translate>{title}</Translate>
            </Link>
        </div>
    );
};

export default NavLink;
