import { AuthLinks } from '../components/AuthLinks'
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <>
            <Link to='/'>
                <h1 className='titleApp'>Intagram
                    <sub className='subTitleApp'>Pro</sub>
                </h1>
            </Link>
            <nav>
                <AuthLinks></AuthLinks>
            </nav>
        </>
    )
}