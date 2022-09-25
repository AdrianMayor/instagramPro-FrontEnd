import { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { services } from '../services';
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginUserForm = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const response = await services.users.loginUserService({ email, password })
            if (response.name && response.name === 'AxiosError') {
                setError(response.response.data.message)
            } else {
                setMessage('Usuario logueado correctamente');
                login(response.data.token);
                navigate('/')
            }

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <section>
            <form onSubmit={handleLoginUserForm}>
                <fieldset>
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor='password'>Contraseña</label>
                    <input
                        type="password"
                        name='password1'
                        onChange={(e) => setPassword(e.target.value)}></input>
                </fieldset>
                <button>Login</button>
            </form>
            {error ? <p>{error}</p> : <p>{message}</p>}
        </section>
    )
}