import { useState } from 'react'
import Link from 'next/link'

const Navigation = () => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        console.log("clickeado")
        setIsActive(!isActive)
    }

    return (
        <>
            <header className="menu">
                <div className="menu__background">
                    <nav className={`menu__nav ${isActive ? 'activate' : ''}`}>
                        <div className="menu__list">
                            <Link  href="/">
                                <a className="menu__link">Inicio</a>
                            </Link>
                            <Link  href="/join">
                                <a className="menu__link">Asociate</a>
                            </Link>
                            <Link  href="/contact">
                                <a className="menu__link">Contactenos</a> 
                            </Link>
                        </div>
                    </nav>
                    <div className="menu__logo-container">
                        <img className="menu__logo-image" src="/images/logo.png" alt="Logo" />
                    </div>
                    <div className="menu__bars" onClick={handleClick}>
                        <i className="fa-solid fa-bars" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navigation