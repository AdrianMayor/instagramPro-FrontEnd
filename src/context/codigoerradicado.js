/*
    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const data = await services.OwnUserProfileServices({token});
                setUser(data)
            } catch (error) {
                logout();
            }
        }
        if(token) getUserProfile();
    }, [token])

    const [ user, setUser ] = useState(null)

    const logout = () => {
        setToken('');
        setUser(null);
    }

    const login = (token) => {
        setToken(token)
    }
*/