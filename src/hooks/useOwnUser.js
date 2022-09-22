import { useState, useEffect } from 'react'
import { services } from '../services'

export const useOwnUser = () => {
    const [user, setUser] = useState('');
    const [userPhotos, setUserPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadUser = async () => {
            try {
                setLoading(true);
                const ownUser = await services.users.ownUserProfileServices();
                
                setUser(ownUser.data.fullUser.user);
                setUserPhotos(ownUser.data.fullUser.photos);
                
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        loadUser();
    }, [])

    return {user, userPhotos, loading, error};

}