// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.css'
import { Button, Text } from 'theme-ui'

const Navbar = () => (
    <header className='navbar'>
        <div className='title item'>wasteWatcher</div>
        <Button className='button-secondary' variant='primary' backgroundColor="white" color='black' sx={{fontWeight:600}}>
            <Text>Return to Home</Text>
        </Button>
    </header>
);

export default Navbar;
