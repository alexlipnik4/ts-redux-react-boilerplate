import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../../common/context/AuthContext';

import authenticationConfig from '../../../common/config/navbar/authenticated.json';
import unAuthenticationConfig from '../../../common/config/navbar/unAuthenticated.json';

import {Tab} from 'rmwc';

const TabRenderer = () => {
    const {isAuthenticated, user} = useContext(AuthContext);

    const config = isAuthenticated ? authenticationConfig : unAuthenticationConfig;

    return (
        <>
            {config.map((tab, index) => {
                if(tab.role !== "") {
                    return (
                        user.role === tab.role && 
                            <Link key={index} to={tab.path}>
                                <Tab className="navbar__nav-link">
                                    {tab.label}
                                </Tab>
                            </Link>
                    )
                } else {
                    return (
                        <Link key={index} to={tab.path}>
                            <Tab className="navbar__nav-link">
                                {tab.label}
                            </Tab>
                        </Link>
                    )
                }
            })}
        </>
    )
}

export default TabRenderer;