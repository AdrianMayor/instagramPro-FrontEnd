import { AuthLinks } from '../components/AuthLinks'
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <>
            <Link to='/'>
                <h1>Intagram-Pro</h1>
            </Link>
            <nav>
                <AuthLinks></AuthLinks>
            </nav>
        </>
    )
}