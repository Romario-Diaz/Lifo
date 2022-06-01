import {useState} from 'react' 
import Link from "next/link"

const NavbarLands = ({basic_landing_information, image_banner}) => {

    console.log("los datos en el menu : ", basic_landing_information)

    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <div className="banner" style={{
                
                'width': '100%',
                'background': `url(${image_banner})`,
            
                'background-size': 'cover'
                }}>
                <div className='banner__background'>
                    <header className="banner__header fixe">
                        <div className="banner__bars" onClick={() => setShowMenu(!showMenu)}>
                            <i className="fa-solid fa-bars" />
                        </div>
                        <nav className={showMenu ? 'banner__menu active' : 'banner__menu'}>
                            <div className="banner__bars" onClick={() => setShowMenu(!showMenu)}>
                                <i className="fa-solid fa-bars" />
                            </div>
                            <a className="banner__link" href="#SectionAbout">Nosotros</a>
                            <a className="banner__link" href="#SectionMenu">Menu</a>
                            <a className="banner__link" href="#SectionGallery">Galeria</a>
                            <a className="banner__link" href="#SectionContact">Ubicación </a>
                        </nav>
                    </header>

                    <div className="banner__info">
                        <h1>{basic_landing_information.name}</h1>
                        
                        <p>{basic_landing_information.short_description}</p>
                        
                        <a className="banner__button" href="#SectionAbout">
                            Conoce la historia
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarLands