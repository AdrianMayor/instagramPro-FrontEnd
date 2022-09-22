import { useOwnUser } from '../hooks/useOwnUser';
import { PhotoUserList } from '../components/PhotoUserList'
export const ProfilePage = () => {

    const { user, userPhotos, loading, error } = useOwnUser();

    if (loading) return <p>Cargando datos...</p>;
    if (error) return <p>error</p>

    return (
        <section>
            <h1>{user.username}</h1>
            {user.avatar ?
                (<img
                    src={`${process.env.REACT_APP_SERVER}/${user.avatar}`}
                    alt='avatar'>
                </img>
                ) : (
                    null
                )}
            <p>Desde: {new Date(user.createdAt).toLocaleString()}</p>
            {userPhotos.length > 1 ? (
                <PhotoUserList userPhotos={userPhotos}></PhotoUserList>
            ) : null
            }
        </section>
    )
}