import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar: React.FC = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <ul className="nav">
                    <li><Link className="nav__link" to="/posts">Posts</Link></li>
                    <li><Link className="nav__link" to='/comments'>Comments</Link></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar
