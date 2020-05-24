import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../common/services/AuthService';
import { AuthContext } from '../common/context/AuthContext';

const Navbar = (props: any) => {
    const {isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext);

    const unauthenticatedNavBar = () => {
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>
                <Link to="/login">
                    <li className="nav-item nav-link">
                        Login
                    </li>
                </Link>
                <Link to="/register">
                    <li className="nav-item nav-link">
                        Register
                    </li>
                </Link>
            </>
        )
    }

    const authenticatedNavBar = () => {
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>
                <Link to="/todos">
                    <li className="nav-item nav-link">
                        Todos
                    </li>
                </Link>
                {
                    user.role === "admin" && 
                        <Link to="/admin">
                            <li className="nav-item nav-link">
                                Admin
                            </li>
                        </Link>
                }
                <button type="button" className="btn btn-link nav-link" onClick={onClickLogOutHandler}>
                    Logout
                </button>
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" >
                <div className="navbar-brand">
                    NoobCoder
                </div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;