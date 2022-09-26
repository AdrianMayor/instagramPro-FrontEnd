import { useState, useEffect, } from 'react';
import { services } from '../services';

export const useProfileUser = (idUser) => {
    const [user, setUser] = useState('');
    const [userPhotos, setUserPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadUser = async () => {
            try {
                setLoading(true);
                const data = await services.users.userIdProfileServices(idUser);
                setUser(data.data.fullUser.user);
                setUserPhotos(data.data.fullUser.photos);
                
                
            } catch (error) {
                setError(error.response.data)
            } finally {
                setLoading(false)
            }
        }
        loadUser();
    }, [idUser])

    return {user, userPhotos, loading, error};

}