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
                    <span className="logo4">B</span>
                    <span className="logo5">U</span>
                </Link>
            </div>

            {/* SearchBar */}
            <div className="search-bar">
                <input type="text" placeholder="O que você procura?"/>
                <div className="location">
                    <button className="search-btn"><ion-icon name="search"></ion-icon></button>
                </div>
            </div>

        </header>
    )
}