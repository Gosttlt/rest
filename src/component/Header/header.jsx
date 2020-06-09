import React from 'react';
import s from './header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={s.header}>
            <div><NavLink to="/"  className={s.logo}>- RESTORATION -</NavLink></div>
            <div className={s.phone}>
                <div className={s.phoneCity}>783-757</div>
                <div className={s.phoneMob}>8(927)268-37-53</div>
            </div>
        </div>
    )
}
export default Header;