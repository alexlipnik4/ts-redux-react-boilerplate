import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../../common/services/AuthService';
import { AuthContext } from '../../common/context/AuthContext';
import {TabBar, Tab, Button} from 'rmwc';

import './Navbar.scss';

const Navbar = () => {
    const {isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext);

    const unauthenticatedNavBar = () => {
        return (
            <>
                <Link to="/">
                    <Tab className="navbar__nav-link">
                        Home
                    </Tab>
                </Link>
                <Link to="/login">
                    <Tab className="navbar__nav-link">
                        Login
                    </Tab>
                </Link>
                <Link to="/register">
                    <Tab className="navbar__nav-link">
                        Register
                    </Tab>
                </Link>
            </>
        )
    }

    const authenticatedNavBar = () => {
        return (
            <>
                <Link to="/">
                    <Tab className="navbar__nav-link">
                        Home
                    </Tab>
                </Link>
                <Link to="/todos">
                    <Tab className="navbar__nav-link">
                        Todos
                    </Tab>
                </Link>
                {
                    user.role === "admin" && 
                        <Link to="/admin">
                            <Tab className="navbar__nav-link">
                                Admin
                            </Tab>
                        </Link>
                }
            </>
        )
    }

    const onClickLogOutHandler = () => {
        AuthService.logout().then(data => {
            if(data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        })
    }

    return (
        <nav className="navbar">
            <TabBar className="navbar__link-list">
                { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
            </TabBar>
            { isAuthenticated && 
                <Button
                    label="Logout"
                    unelevated 
                    type="button"
                    className="navbar__button"
                    onClick={onClickLogOutHandler} 
                />
            }
        </nav>
    )
}

export default Navbar;