import React, {useContext} from 'react';
import { AuthContext } from '../../common/context/AuthContext';
import {TabBar, Tab, Button, TabBarOnActivateEventT} from 'rmwc';

import TabRenderer from './TabRenderer/TabRenderer';

import './Navbar.scss';

const Navbar = (props: {
    onClickLogOutHandler: () => void,
    onTabClick: (e: TabBarOnActivateEventT) => void,
    activeTab: number,
}) => {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <nav className="navbar">
            <TabBar activeTabIndex={props.activeTab} onActivate={props.onTabClick} className="navbar__link-list">
                <TabRenderer />
            </TabBar>
            { isAuthenticated && 
                <Button
                    label="Logout"
                    unelevated 
                    type="button"
                    className="navbar__button"
                    onClick={props.onClickLogOutHandler} 
                />
            }
        </nav>
    )
}

export default Navbar;