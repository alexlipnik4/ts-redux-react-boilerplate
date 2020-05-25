import React, {useContext, useState, useEffect} from 'react';
import Navbar from './Navbar';
import AuthService from '../../common/services/AuthService';
import { AuthContext } from '../../common/context/AuthContext';
import { TabBarOnActivateEventT } from 'rmwc';

import authenticationConfig from '../../common/config/navbar/authenticated.json';
import unAuthenticationConfig from '../../common/config/navbar/unAuthenticated.json';

import {useLocation} from 'react-router-dom';

const NavbarController = () => {
    const {setIsAuthenticated, setUser} = useContext(AuthContext);
    const [activeTab, changeTabIndex] = useState(0);
    
    const {isAuthenticated} = useContext(AuthContext);
    const config = isAuthenticated ? authenticationConfig : unAuthenticationConfig;

    // workaround to fix bug with the tab active index not working properly after clicking browser back button
    useLocation();

    //changing the tab index any time the browser path changes 
    useEffect(() => {
        config.forEach((tab, index) => {
            if(tab.path === window.location.pathname) {
                changeTabIndex(index)
            }
        })
    }, [window.location.pathname])

    const onClickLogOutHandler = () => {
        AuthService.logout().then(data => {
            if(data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        })
    }

    const onTabClick = (e: TabBarOnActivateEventT) => {
        changeTabIndex(e.detail.index)
    }

    return (
        <Navbar
            onTabClick={onTabClick}
            activeTab={activeTab}
            onClickLogOutHandler={onClickLogOutHandler}
        />
    )
};

export default NavbarController;