import { useProfileUser } from '../hooks/useProfileUser';
import { LoadDataWaiting } from '../components/LoadDataWaiting';
import { PhotoUserList } from '../components/PhotoUserList'
import { useParams } from 'react-router-dom';
import { PhotoProfile } from '../components/PhotoProfile';
import { useOwnUser } from '../hooks/useOwnUser';
import { ProfilePage } from './ProfilePage';

export const ProfileUserPage = () => {

    const { id: idUser } = useParams();
    const { user, userPhotos, loading, error } = useProfileUser(idUser);
    const { user: myUser } = useOwnUser();


    if (loading) return <LoadDataWaiting></LoadDataWaiting>
    if (error) return <p>{error.message}</p>

    return (
        <>
            {user.id === myUser.id ?
                <ProfilePage /> : (
                    <section>
                        <PhotoProfile user={user}></PhotoProfile>
                        <h1>{user.username}</h1>
                        <p>Desde: {new Date(user.createdAt).toDateString()}</p>
                        {Array.isArray(userPhotos) ? (
                            <PhotoUserList userPhotos={userPhotos}></PhotoUserList>
                        ) : <p>{userPhotos}</p>
                        }
                    </section>)
            }
        </>
    )
}
