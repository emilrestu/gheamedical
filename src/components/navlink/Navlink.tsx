import { NavLink as RNavlink } from 'react-router-dom';
import Translate from '../translate';

const NavLink: React.FC<{ path: string; title: string }> = ({ path, title }) => {
    return (
        <div className="text-2xl p-2">
            <RNavlink to={`${path}`}>
                <Translate>{title}</Translate>
            </RNavlink>
        </div>
    );
};

export default NavLink;
