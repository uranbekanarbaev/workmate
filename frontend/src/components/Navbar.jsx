import React from "react";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    label: <Link to="/">Main</Link>,
    key: 'home',
  },
  {
    label: <Link to="/types">Types</Link>,
    key: 'types',
  },
  {
    label: <Link to="/cats">Cats</Link>,
    key: 'cats',
  },
  {
    label: <Link to="/documentation">Documentation</Link>,
    key: 'documentation',
  },
  {
    label: <Link to="/contactme">Contact me</Link>,
    key: 'contact',
  },
];

const Navbar = () => {
    return (
        <>
            <nav className="bg-white text-black px-8 md:px-16 lg:px-24">
                <div className="container py-2 flex justify-between items-center">
                    <div className='text-2xl font-bold'>Kitties Store</div>
                    <Menu mode="horizontal" items={items} style={{ flexGrow: 1, justifyContent: 'center' }} />
                </div>
            </nav>
        </>
    )
}

export default Navbar;