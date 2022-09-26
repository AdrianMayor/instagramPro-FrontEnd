import { useOwnUser } from '../hooks/useOwnUser';
import { PhotoUserList } from '../components/PhotoUserList'
import { Link } from 'react-router-dom'
import { LoadDataWaiting } from '../components/LoadDataWaiting';

export const ProfilePage = () => {
    const { user, userPhotos, loading, error } = useOwnUser();

    if (loading) return <LoadDataWaiting></LoadDataWaiting>
    if (error) return <p>{error.message}</p>

    return (
        <section>
            <h1>{user.username}</h1>
            <p>Desde: {new Date(user.createdAt).toLocaleString()}</p>
            <Link to='/edit'>EDIT</Link>
            {userPhotos.length > 1 ? (
                <PhotoUserList userPhotos={userPhotos}></PhotoUserList>
            ) : null
            }
        </section>
    )
}
