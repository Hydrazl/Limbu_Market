import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
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
                    <li>
                        <Link to='/signin' className='entrarBtn'>Entrar</Link>
                    </li>
                    <li>
                        <Link to='/' className='anunciarBtn'>Anunciar grátis</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}