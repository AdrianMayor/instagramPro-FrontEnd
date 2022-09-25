import './style.css'
import { Link } from 'react-router-dom';

export const PhotoProfile = ({ user }) => {
    return (
        <>
            {user.avatar ?
                (
                    <Link to='/users'>
                        <img
                            src={`${process.env.REACT_APP_SERVER}/${user.avatar}`}
                            alt='avatar'
                            className='avatar'>
                        </img>
                    </Link>
                ) : (
                    null
                )}
        </>
    )
}