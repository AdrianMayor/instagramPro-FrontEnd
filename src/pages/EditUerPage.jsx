import { useState, useContext } from 'react';
import { services } from '../services';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export const EditUserPage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [confirm, setConfirm] = useState(false);
    const { token, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleEditUser = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        if (confirm) {
            try {
                const response = await services.users.editUserService({
                    token,
                    username,
                    email,
                    avatar
                })
                response.name && response.name === 'AxiosError' ?
                    setError(response.response.data.message) :
                    setMessage(response.message)
                navigate('/')
                setUser(null)
            } catch (error) {
                setError(error.message);
            }
        } else {
            setMessage('need confirm the changes')
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
                <p>Confirm the changes
                    <input type='checkbox' placeholder='Confirm the changes' onClick={() => setConfirm(true)} />
                </p>

                <button>Editar usuario</button>
            </form>
            {error ? <p>{error}</p> : <p>{message}</p>}
        </section>
    )
}