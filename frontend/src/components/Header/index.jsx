import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { doLogout, getUser, isLogged } from '../../lib/AuthHandler';
import { useAuth } from '../../contexts/AuthContext';


export default function Header() {
    const {logged, user, setLogged, setUser} = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = () => {
            const loggedIn = isLogged();
            setLogged(loggedIn);
            if (loggedIn && !user) {
                const userData = getUser();
                setUser(userData);
            } else {
                setUser(null);
            }
        }

        checkLogin()

        const handleStorageChange = (e) => {
            if (e.key === 'token' || e.key === 'user') {
                checkLogin();
            }
        }

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        }
    }, [setLogged, setUser]);

    const handleLogout = () => {
        doLogout();
        setLogged(false);
        setUser(null);
        navigate('/signin');
    }

    return (
        <header className="header">
            {/* logo */}
            <div className="logo">
                <Link to='/'>
                    <span className="logo1">L</span>
                    <span className="logo2">I</span>
                    <span className="logo3">M</span>
                    <span className="logo2">B</span>
                    <span className="logo1">U</span>
                </Link>
            </div>

            {/* SearchBar */}
            <div className="search-bar">
                <input type="text" placeholder="O que você procura?"/>
                <div className="location">
                    <button className="search-btn"><ion-icon name="search"></ion-icon></button>
                </div>
            </div>

            {/* Botões */}
            <nav className="navbar">
                <ul>
                    { logged ? (
                        <>
                            <li>
                                <Link to='/' className='anuncio'>Meus Anúncios</Link>
                            </li>
                            <li>
                                <Link to='/post-an-add' className='anunciarBtn'>Postar um anúncio</Link>
                            </li>
                            <li className="profileContainer">
                                <button className='profileBtn' onClick={() => setMenuOpen(!menuOpen)}>
                                    <img src={user.photoURL} alt={user.name} className='profileImg' />
                                    <span>{user.name?.split(' ')[0]}</span><FaAngleDown size={16} className='arrow'/>
                                </button>
                                {menuOpen && (<div className='dropdown'>
                                    <button>Minha Conta</button>
                                    <button>Favoritos</button>
                                    <button onClick={handleLogout}>Sair</button>
                                </div>)}
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to='/signin' className='entrarBtn'>Entrar</Link>
                            </li>
                            <li>
                                <Link to='/' className='anunciarBtn'>Anunciar grátis</Link>
                            </li>
                        </>
                    ) }
                </ul>
            </nav>
        </header>
    )
}