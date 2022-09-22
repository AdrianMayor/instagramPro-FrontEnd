import { Link } from 'react-router-dom';

export const AuthLinks = () => {
    return (
        <ul>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/edit'>Edit</Link>
            </li>
            <li>
                <Link to='/users'>Perfil</Link>
            </li>
        </ul>
    )
}