import { useState } from 'react';
import { services } from '../services';

export const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleRegisterUser = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        if (password1 !== password2) {
            setError('Password do not much')
            return;
        }
        try {
            const response = await services.users.registerUserService({
                username,
                password: password1,
                email
            })
            response.name && response.name === 'AxiosError' ?
                setError(response.response.data.message) :
                setMessage(response.data.message)
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <section>
            <form onSubmit={handleRegisterUser}>
                <fieldset>
                    <label htmlFor='username'>Nombre de usuario</label>
                    <input
                        type="text"
                        name='username'
                        onChange={(e) => setUsername(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor='password1'>Contraseña</label>
                    <input
                        type="password"
                        name='password1'
                        onChange={(e) => setPassword1(e.target.value)}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor='password2'>Repita la contraseña</label>
                    <input
                        type="password"
                        name='password2'
                        onChange={(e) => setPassword2(e.target.value)}></input>
                </fieldset>
                <button>Registrarse</button>
            </form>
            {error ? <p>{error}</p> : <p>{message}</p>}
        </section>
    )
}