import { AuthLinks } from '../components/AuthLinks';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

export const Header = () => {

    const [link1, setLink1] = useState('select-disabled');
    const [link2, setLink2] = useState('select-disabled');

    const handleClickRemove = () => {
        setLink1('select-disabled');
        setLink2('select-disabled');
    }

    const handleClicker = (e) => {
        const idEvent = (e.target.id);
        if (idEvent === 'register') {
            setLink1('select-active')
            setLink2('select-disabled');
        } else if (idEvent === 'login') {
            setLink2('select-active')
            setLink1('select-disabled');
        }
    }

    return (
        <header>
            <Link to='/' onClick={handleClickRemove}>
                <h1 className='titleApp'>Instagram</h1>
                <h2 className='subTitleApp'>Pro</h2>
            </Link>
            <AuthLinks
                handleClicker={handleClicker}
                link1={link1}
                link2={link2}
            />
        </header>
    )
}