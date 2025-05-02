import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <main className='mt-10 mx-auto grid grid-cols-4 gap-5 '>
                <aside className='col-span-1  '>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-2  '>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-1  '>
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default MainLayout;