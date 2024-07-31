import React from 'react'
import Navigation from './Navigations/Navigation'
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

export default function Layout({toggleDarkMode,darkMode}) {
    return (
        <div>
            <Navigation toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <section>
                <Outlet />
            </section>
           <Footer/>
        </div>
    )
}
