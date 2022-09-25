import { useOwnUser } from '../hooks/useOwnUser';
import { PhotoUserList } from '../components/PhotoUserList'
import { Link } from 'react-router-dom'
import { PhotoProfile } from '../components/PhotoProfile';
import { LoadDataWaiting } from '../components/LoadDataWaiting';

export const ProfilePage = () => {
    const { user, userPhotos, loading, error } = useOwnUser();

    if (loading) return <LoadDataWaiting></LoadDataWaiting>
    if (error) return <p>{error}</p>

    return (
        <section>
            <h1>{user.username}</h1>
            <PhotoProfile user={user}></PhotoProfile>
            <p>Desde: {new Date(user.createdAt).toLocaleString()}</p>
            <Link to='/edit'>Edit</Link>
            {userPhotos.length > 1 ? (
                <PhotoUserList userPhotos={userPhotos}></PhotoUserList>
            ) : null
            }
        </section>
    )
}
