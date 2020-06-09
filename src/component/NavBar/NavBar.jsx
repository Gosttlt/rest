import React from 'react';
import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className={s.header}>
            <NavLink exact to={'/'} activeClassName={s.active} className={s.link}>Главная</NavLink>
            <NavLink  to={'/cost'} activeClassName={s.active} className={s.link}> Рассчитать стоимость</NavLink>
            <NavLink  to={'/3'} activeClassName={s.active} className={s.link}>Оставить заявку</NavLink>
            <NavLink  to={'/4'} activeClassName={s.active} className={s.link}>Акции</NavLink>
        </div>
    )
}
export default NavBar;