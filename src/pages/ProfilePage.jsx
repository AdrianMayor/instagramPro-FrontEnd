import { useOwnUser } from '../hooks/useOwnUser';
import { PhotoUserList } from '../components/PhotoUserList'
import { Link } from 'react-router-dom'
import { LoadDataWaiting } from '../components/LoadDataWaiting';
import { useState, useEffect } from 'react';

export const ProfilePage = () => {
    const { user, userPhotos, loading, error, index, setKeys, setLoading } = useOwnUser();
    const [totalPhotos, setTotalPhotos] = useState([]);

    // Definimos el límite de "fotos" para cada pagina
    const [pagination, setPagination] = useState({
        limit: 10,
        page: 1,
    });

    useEffect(() => {
        setKeys(pagination)
    }, [pagination, setKeys]);

    useEffect(() => {
        setTotalPhotos([...totalPhotos, ...userPhotos]);
        setLoading(false);
    }, [userPhotos]);

    if (loading) return <LoadDataWaiting></LoadDataWaiting>
    if (error) return <p>{error.message}</p>

    // función que actualiza la paginación
    const handleClick = () => {
        setPagination({ ...pagination, ...{ page: pagination.page + 1 } });
    }

    return (
        <section className='own_profile'>
            <article className='profile-data'>
                <h1>{user.username}</h1>
                <p className='user-date-created'>Desde: {new Date(user.createdAt).toLocaleString()}</p>
                <Link to='/edit' className='edit-link'>
                    <p className='edit-link-text'>
                        Editar perfil
                    </p>
                </Link>
            </article>
            {userPhotos.length > 1 ? (
                <PhotoUserList
                    totalPhotos={totalPhotos}
                    pagination={pagination}
                    handleClick={handleClick}
                    loading={loading}
                    index={index}
                />
            ) : null
            }
        </section>
    )
}
