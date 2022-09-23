import { useState, useEffect, useContext } from 'react'
import { services } from '../services'
import { AuthContext } from '../context/authContext';

export const useOwnUser = () => {
    const [user, setUser] = useState('');
    const [userPhotos, setUserPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const loadUser = async () => {
            try {
                setLoading(true);
                const ownUser = await services.users.ownUserProfileServices({token});
                
                setUser(ownUser.data.fullUser.user);
                setUserPhotos(ownUser.data.fullUser.photos);
                
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        loadUser();
    }, [token])

    return {user, userPhotos, loading, error};

}