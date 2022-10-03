import './Authlinks.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { PhotoProfile } from '../PhotoProfile/PhotoProfile';
import { LogoutIcon } from '../LogoutIcon/LogoutIcon';
import { SearchBar } from '../SearchBar/SearchBar';
import { HomeLink } from '../HomeLink/HomeLink';


export const AuthLinks = ({ link1, link2, handleClicker, handleClickRemove }) => {

    const { user, logout } = useContext(AuthContext);

    return (
        <>
            <nav className='header-nav'>
                {user ? (
                    <ul className='head'>
                        <li className='head-user'>
                            <PhotoProfile user={user} />
                            <p>
                                {user.username}
                            </p>
                        </li>
                        <li className='container-logout-icon'>
                            <Link to='/login' onClick={handleClicker}>
                                <button className='logout-button' onClick={() => logout()}>
                                    <LogoutIcon />
                                </button>
                            </Link>
                        </li>
                        <li className='container-home-icon'>
                            <Link to='/' onClick={handleClickRemove}>
                                <HomeLink />
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul className='head'>
                        <li>
                            <Link to='/register' className='register-link'>
                                <p id='register' onClick={handleClicker} className={link1}>
                                    Singup
                                    <span className='underline'></span>
                                </p>
                            </Link>
                        </li>
                        <li className='container-home-icon'>
                            <Link to='/' onClick={handleClickRemove}>
                                <HomeLink />
                            </Link>
                        </li>
                        <li>
                            <Link to='/login' className='login-link'>
                                <p id='login' onClick={handleClicker} className={link2}>
                                    Login
                                    <span className='underline'></span>
                                </p>
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
            <SearchBar />
        </>

    )
}