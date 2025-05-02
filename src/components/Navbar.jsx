import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between '>
            <div></div>
            <div className='flex gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div >
                <div className="avatar mr-2">
                    <div className="w-10 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                </div>
                <button className="btn text-white btn-primary ">Log In </button>
            </div>

        </div>
    );
};

export default Navbar;