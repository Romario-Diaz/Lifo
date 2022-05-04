import {useState} from 'react' 
import Link from "next/link"


const NavbarLands = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <div className="banner">
                <div className='banner__background'>
                    <header className="banner__header fixe">
                        <div className="banner__bars" onClick={() => setShowMenu(!showMenu)}>
                            <i className="fa-solid fa-bars" />
                        </div>
                        <nav className={showMenu ? 'banner__menu active' : 'banner__menu'}>
                            <div className="banner__bars" onClick={() => setShowMenu(!showMenu)}>
                                <i className="fa-solid fa-bars" />
                            </div>
                            <a className="banner__link" href="#">Nosotros</a>
                            <a className="banner__link" href="#">Menu</a>
                            <a className="banner__link" href="#">Galeria</a>
                            <a className="banner__link" href="#">Contacto</a>
                        </nav>
                    </header>

                    <div className="banner__info">
                        <h1>El Horcon</h1>
                        
                        <p>Pizería y Karaoke</p>
                        
                        <a className="banner__button" href="#">
                            Conoce la historia
                        </a>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default NavbarLands