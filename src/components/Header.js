import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>For The Birds</h1>
        <Link to="/" exact={"true"}>Dashboard</Link>
    </header>
);

export default Header;