import React, {useContext, useState, useEffect} from 'react';
import Navbar from './Navbar';
import AuthService from '../../common/services/AuthService';
import { AuthContext } from '../../common/context/AuthContext';
import { TabBarOnActivateEventT } from 'rmwc';

import authenticationConfig from '../../common/config/navbar/authenticated.json';
import unAuthenticationConfig from '../../common/config/navbar/unAuthenticated.json';

const NavbarController = (props: any) => {
    const {setIsAuthenticated, setUser} = useContext(AuthContext);
    const [activeTab, changeTabIndex] = useState(0);
    
    const {isAuthenticated} = useContext(AuthContext);
    const config = isAuthenticated ? authenticationConfig : unAuthenticationConfig;
    
    useEffect(() => {
        config.forEach((tab, index) => {
            if(tab.path === window.location.pathname) {
                changeTabIndex(index)
            }
        })
    }, [])

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