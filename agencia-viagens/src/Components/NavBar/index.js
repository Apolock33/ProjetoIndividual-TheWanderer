import React from 'react';
import { useSelector } from 'react-redux';
import './navBar.css'
import logo from '../../assets/logo1.svg'
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function NavBar() {
    const reserveSize = useSelector(state => state.reserve)

    return (
        <div className="nav">
            <div className="logomae">
                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>
            </div>
            <ul className="nav-items">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/destinos'>Destinos</Link></li>
                <li><Link to='/promocoes'>Promoções</Link></li>
                <li><Link to='/cadastro'>Cadastre-se</Link></li>
                <li><Link to='/carrinho'><MdShoppingCart className='carrinho' color='deepskyblue' size='20px' /> {reserveSize.length}</Link></li>
            </ul>
        </div>
    );
}