import { NavLink } from 'react-router-dom';
import s from'./Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/profile" className={({isActive}) => isActive ? s.active : s.item}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" className={nameData => nameData.isActive ? s.active : s.item}>Messeges</NavLink></li>
                <li><NavLink to="/users" className={nameData => nameData.isActive ? s.active : s.item}>Users</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;