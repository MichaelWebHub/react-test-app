import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar: React.FC = () => {
    return (
        <nav className="nav">
            <Link className="nav__link" to="/posts">Posts</Link>
            <Link className="nav__link" to='/comments'>Comments</Link>
        </nav>
    )
};

export default Navbar
