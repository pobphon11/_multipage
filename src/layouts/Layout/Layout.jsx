import { Outlet } from 'react-router';


import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


import './Layout.css'
import { useState, useEffect } from 'react';


function Layout({ products, carts , setToken}) {
    const initTab = 'home'
    const [tab, setTab] = useState('')

    useEffect(() => {
        setTab(initTab)
    }, [])
    return ( 
        <div>
            <Header />
            <Navbar tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken}  />
            <Outlet />
            <Footer />
            
        </div>
     );
}

export default Layout;