// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.css'
// import { Link } from 'react-router-dom';


const Navbar = () => (
    <header className='navbar'>
        <div className='title item'><a href="#hero">WasteWatcher</a></div>
        <div className='item'><a href="#mission">Mission</a></div>
        <div className='item'><a href="#features">Features</a></div>
        {/* <div className='item'><Link to="/logs">Logs</Link></div> */}
        <div className='item'><a href="#team">Team</a></div>
        <div className='item'><a href="#auth">Register/Login</a></div>     
    </header>
);

export default Navbar;
