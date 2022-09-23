import './style.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { PhotoProfile } from '../PhotoProfile';

export const AuthLinks = () => {


    const { user, logout } = useContext(AuthContext);

    return user ? (
        <section >
            <ul className='head'>
                <li>
                    <PhotoProfile user={user} />
                </li>
                <li>
                    <p>
                        {user.username}
                    </p>
                </li>
                <li>
                    <Link to='/login'>
                        <button onClick={() => logout()}>Logout</button>
                    </Link>
                </li>
            </ul>

        </section>
    ) : (
        <ul>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/'> Home </Link>
            </li>
        </ul>
    )
}