import React from 'react';
import './footer.css';
import logo from '../../assets/logo1.svg'


export default function Footer() {
    return (
        <div className="footer">
            <img className="logoF" src={ logo } alt="logoF"/>
            <h5 className='footer-text'>&copy; 2022 - TheWanderer</h5>
            <h5 className='footer-text'>All Rights Reserved</h5>
        </div>
    );
}