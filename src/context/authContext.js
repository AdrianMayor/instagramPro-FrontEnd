import { createContext, useEffect, useState } from'react'
import { services } from '../services';


export const AuthContext = createContext();

export const AuthProviderComponent = ({children}) => {
    const [ token, setToken ] = useState(localStorage.getItem('token'));
    const [ user, setUser ] = useState(null);
 
    const logout = () => {
        setUser(null)
        setToken('')
    }
    const login = (token) => {
        setToken(token);
    }

  
    useEffect(() => {
        localStorage.setItem('token', token);
        const getProfile = async () => {
            try {
                const profile = await services.users.ownUserProfileServices({token});
                setUser(profile.data.fullUser.user)
            } catch {
               logout();
            }
       
        }
        if(token) getProfile();
    },[token])

    useEffect(() => {
        const getProfile = async () => {
            try {
                const profile = await services.users.ownUserProfileServices({token});
                setUser(profile.data.fullUser.user)
            } catch {
               logout();
            }
       
        }
        if(!user) getProfile();
    }, [user])


    return <AuthContext.Provider
                value={{user, setUser, token, login, logout}}>
                {children}
            </AuthContext.Provider>;
}