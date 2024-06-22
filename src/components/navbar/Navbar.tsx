import NavLink from '../navlink';
import { useParams } from 'react-router-dom';

const Navbar = () => {
    const { lang_code } = useParams();

    return (
        <header className={`p-4 flex ${lang_code === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
            <NavLink path={`/${lang_code}/`} title="Home" />
            <NavLink path={`/${lang_code}/about-us`} title="About Us" />
            <NavLink path={`/${lang_code}/services`} title="Services" />
            <NavLink path={`/${lang_code}/contact-us`} title="Contact Us" />
        </header>
    );
};

export default Navbar;
