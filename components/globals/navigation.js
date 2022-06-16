import { useState } from 'react'
import Link from 'next/link'

const Navigation = ({img_url}) => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        console.log("clickeado")
        setIsActive(!isActive)
    }

    return (
        <>
            <div className="home__banner">
                <div className="home__banner-content">
                    <header className="home__menu">
                        <Link href="/">
                            <a>Nosotros</a>
                        </Link>
                        <Link href="/join">
                            <a>Asociate</a>
                        </Link>
                        <Link href="/contact">
                            <a >Contáctanos</a>    
                        </Link>
                    
                    </header>
                    <div className="home__banner-subcontent">
                        <h1>LIFO</h1>
                        <p>
                            Un menú virtual, para realizar tus pedidos de la carta de tu
                            negocio.
                        </p>
                        <img
                            src={`${img_url}`}
                            alt="App"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation