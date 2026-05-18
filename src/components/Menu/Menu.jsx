import { Link } from 'react-router-dom';
import './Menu.scss';
// import { useState } from 'react';
// import 
// import {Link} from 'react-router-dom';

export default function Menu(clickMenuClose, isActive) {

    const menuData = [
        {id:1, item: 'Цены', path: './prices'},
        {id:2, item: 'Калькулятор', path: './calculator'},
        {id:3, item: 'Документы', path: './documents'},
        {id:4, item: 'Схема проезда', path: './location'},
        {id:5, item: 'Опасный груз', path: './dangerous-сargo', danger: true},
        { id: 6, item: 'Онлайн заявка', path: '/application' },
    ];

    


  return (
    <nav className='nav'>
        <div className='nav__backdrop'>
        </div>

        <div className={`nav__menu-panel ${isActive ? 'nav__menu-panel--open' : ''}`}>
            <button
            type='button'
            onClick={clickMenuClose}
            
            className='nav__btn-close'
            ></button>
            <ul className='menu'>
                {menuData.map(({id, item, path, danger}) => (
                    <li key={id} className={`menu__item ${danger ? 'menu__item_danger' : ''}`}>
                        <Link to={path} target='menu__item' >
                         {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}
