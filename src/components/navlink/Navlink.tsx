// import { NavLink as RNavlink } from 'react-router-dom';
import Link from 'next/link';
import Translate from '../translate';

const NavLink: React.FC<{ path: string; title: string }> = ({ path, title }) => {
    return (
        <div className="text-2xl p-2">
            <Link href={`${path}`}>
                <Translate>{title}</Translate>
            </Link>
        </div>
    );
};

export default NavLink;
