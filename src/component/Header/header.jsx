import React, { useState, useEffect } from 'react';
import s from './header.module.css'
import { NavLink } from 'react-router-dom';



const Header = (props) => {
    const [scroll, setScroll] = useState(0);
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

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