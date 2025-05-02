import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-3'>
                <img src={logo} alt="" />
                <p className='text-primary'>Journalism Without Fear or Favour</p>
                <p className='text-primary'>
                    {format(new Date(), "EEEE , MMMM MM , yyyy")}
                </p>
            </div>
            <div className='flex items-center gap-3 bg-base-200 p-4 my-4'>
                <h3 className='bg-secondary text-white font-bold px-2 py-2'>Latest </h3>
                <Marquee className=' gap-5' pauseOnHover={true}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.e alias  sed officiis quae rem ab. Hic, natus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.e alias  sed officiis quae rem ab. Hic, natus.</p>

                </Marquee>

            </div>
        </div>
    );
};

export default Header;