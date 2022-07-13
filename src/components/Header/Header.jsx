import { NavLink } from 'react-router-dom';
import s from'./Header.module.css';
const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://e7.pngegg.com/pngimages/539/883/png-clipart-globe-earth-globe-miscellaneous-blue.png" alt='' />
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;