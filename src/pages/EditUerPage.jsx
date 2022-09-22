import { useState } from 'react';
import { services } from '../services';

export const EditUserPage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleEditUser = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const response = await services.users.editUserService({
                username,
                email,
                avatar
            })
            response.name && response.name === 'AxiosError' ?
                setError(response.response.data.message) :
                setMessage(response.message)
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <section>
            <form onSubmit={handleEditUser}>
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
                    <label htmlFor='avatar'>Avatar</label>
                    <input
                        type="file"
                        name='avatar'
                        accept='.png, .jpg, .jpeg'
                        onChange={(e) => setAvatar(e.target.files[0])}>
                    </input>
                </fieldset>
                <button>Editar usuario</button>
            </form>
            {error ? <p>{error}</p> : <p>{message}</p>}
        </section>
    )
}