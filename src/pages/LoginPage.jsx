import { useState } from 'react';
import { services } from '../services';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleLoginUserForm = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const response = await services.users.loginUserService({ email, password })

            response.name && response.name === 'AxiosError' ?
                setError(response.response.data.message) :
                setMessage('Usuario logueado correctamente')
            const token = response.data.token;
            localStorage.setItem('token', token);
        } catch (error) {
            setError(error.response.data.message)
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