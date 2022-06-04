import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navigation from '../components/globals/navigation'
import Footer from '../components/globals/footer'
import Metadata from '../components/globals/metadata'

const Home = () => {

    const [associate, setAssociate] = useState([])
    const [bestProducts, setBestProducts] = useState([])

    useEffect(() => {
        fetch(`https://api.lifoperu.com/landing/lifo`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                setAssociate(data.data[0])
                setBestProducts(data.data[1])
            })
    }, [])


    return (
        <div className='Home'>
            <Metadata />

            <Navigation
                img_url="images/b1.png"
            />

            <main>
                <div className="home__play-container">
                    <a href='https://play.google.com/store/apps/details?id=com.lifo&hl=es' target="_blank">
                        <img
                            src="https://lh3.googleusercontent.com/1hJj6Aw2k6cEyFu10xdj5riLo0wBGFKE5XnbGaymhgo1z8Tsr8EpfJr2jbQFRxDONvwk6lak-62F2Fx7-_jp-ykJKA=w1000-e365"
                            alt="Play store"
                        />
                    </a>

                </div>

                <div className="home__title-container">
                    <h2>Aplicación Rapida & Fácil de Usar</h2>
                    <p>
                        Tus pedidos al alcance de tu celular <br /> disfruta de nuestra
                        aplicación
                    </p>
                </div>

                <div className="home__funcionality-container">
                    <div className="home__funcionality-item">
                        <div className="home__funcionality-img">
                            <img
                                src="/images/f1.png"
                                alt="restaurant"
                            />
                        </div>
                        <div className="home__funcionality-content">
                            <h3>1</h3>
                            <h4>Escanea</h4>
                            <p>
                                Visita nuestros locales asociados y escanea de forma segura los
                                codigos QR en los lugares correspondientes.
                            </p>
                        </div>
                    </div>

                    <div className="home__funcionality-item">
                        <div className="home__funcionality-content">
                            <h3>2</h3>
                            <h4>Elige</h4>
                            <p>
                                Navega por todo el menú digital y agrega a la canasta tus
                                productos preferidos .
                            </p>
                        </div>

                        <div className="home__funcionality-img">
                            <img
                                src="/images/f3.png"
                                alt="restaurant"
                            />
                        </div>
                    </div>

                    <div className="home__funcionality-item">
                        <div className="home__funcionality-img">
                            <img
                                src="/images/f2.png"
                                alt="restaurant"
                            />
                        </div>
                        <div className="home__funcionality-content">
                            <h3>3</h3>
                            <h4>Pide</h4>
                            <p>
                                Realiza tu pedido creando una orden individual o grupal y
                                visualiza todos los detalles de la misma.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="home__qr-container">
                    <div className="home__qr-content">
                        <div className="home__qr-left">
                            <h4>Código QR 100% seguro</h4>
                            <p>
                                Carta digital QR para todo tipo de negocios. Código QR
                                totalmente seguro, implementa en cada una de las mesas o lugar
                                pertinente y empieza a disfrutar de esta gran experiencia.
                            </p>
                        </div>
                        <div className="home__qr-right"></div>
                    </div>
                </div>

                <div className="home__title-container">
                    <h2>Nuestros Locales Asociados</h2>
                    <p>Tenemos los mejores locales a tu disposición</p>
                </div>

                <div className="home__business">
                    {associate.map((item) =>
                        <div key={item.logo} className="home__business-content">
                            <div className="home__business-logo">
                                <Link 
                                // href={`https://lifoperu.com/${item.url_landing}`}
                                href={`https://www.lifoperu.com/${item.url_landing}`}
                                >
                                    <a>
                                        <img src={`${item.logo}`} alt="Negocio" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )
                    }

                </div>

                <div className="home__title-container">
                    <h2>Testimonios</h2>
                    <p>
                        Muchos clientes eligen Lifo, estoy es lo que opinan de nuestro servicio. 
                    </p>
                </div>

                <div className="home__testimony">
                    <div className="home__testimony-item">
                        <div className="home__testimony-content">
                            <p>
                                Lifo nos ha cambiado la vida, es todo un sistema muy intuitivo
                                que soluciona nuestra puesta de carta digital, permitiendo que
                                nuestros comensales no tengan que esperar largos minutos para
                                saber que ofrecemos, aparte de que nos ha facilitado tremendamente
                                el manejo de los pedidos a través de la misma aplicación.
                            </p>
                            <div className="home__testimony-profile">
                                <img
                                    src="/images/p1.png"
                                    alt="Perfil"
                                />
                                <div className="home__testimony-profile-content">
                                    <p>Carlos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__testimony-item">
                        <div className="home__testimony-content">
                            <p>
                                Lifo es una gran aplicación, nos ha reducido significativamente el tiempo
                                de toma de los pedidos, ahora todo es en automático ya que nuestros propios
                                comensales son los que hacen el pedido por su propia cuenta.
                                Recomendado definitivamente!!

                            </p>
                            <div className="home__testimony-profile">
                                <img
                                    src="/images/p2.png"
                                    alt="Perfil"
                                />
                                <div className="home__testimony-profile-content">
                                    <p>Marisol</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__testimony-item">
                        <div className="home__testimony-content">
                            <p>
                                A todo nuestro equipo y clientes nos encanta esta aplicación, ha facilitado
                                y agilizado muchos procesos dentro del negocio. Lifo con todos sus
                                profesionales nos han asesorado y dado soporte para la implementación
                                de todo el sistema, estamos muy contentos!!
                            </p>
                            <div className="home__testimony-profile">
                                <img
                                    src="/images/p3.png"
                                    alt="Perfil"
                                />
                                <div className="home__testimony-profile-content">
                                    <p>Brenda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__testimony-item">
                        <div className="home__testimony-content">
                            <p>
                                Lifo nos ha cambiado la vida, es todo un sistema muy intuitivo
                                que soluciona nuestra puesta de carta digital, permitiendo que
                                nuestros comensales no tengan que esperar largos minutos para
                                saber que ofrecemos, aparte de que nos ha facilitado
                                tremendamente el manejo de los pedidos a través de la misma
                                aplicación
                            </p>
                            <div className="home__testimony-profile">
                                <img
                                    src="/images/p4.png"
                                    alt="Perfil"
                                />
                                <div className="home__testimony-profile-content">
                                    <p>Bruno</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home__download">
                    <div className="home__download-left">
                        <h4>
                            Descarga <br /> nuestro aplicativo{" "}
                        </h4>
                        <p>El placer de pedir en tus manos</p>
                        <a href='https://play.google.com/store/apps/details?id=com.lifo&hl=es' target="_blank">
                            <img
                                src="https://lh3.googleusercontent.com/1hJj6Aw2k6cEyFu10xdj5riLo0wBGFKE5XnbGaymhgo1z8Tsr8EpfJr2jbQFRxDONvwk6lak-62F2Fx7-_jp-ykJKA=w1000-e365"
                                alt="Play store"
                            />
                        </a>
                    </div>
                    <div className="home__download-right">
                        <img
                            src="/images/phone.png"
                            alt="restaurant"
                        />
                    </div>
                </div>

                <div className="home__title-container">
                    <h2>Únete a esta gran familia</h2>
                    <p>
                        y descubre los productos más vendidos cada semana
                    </p>
                </div>

                <div className="home__categories">
                    {bestProducts.map((bprod) =>
                        <div className="home__category">
                            <div className="home__category-img">
                                <div className="home__category-back">
                                    
                                    <div style={{'display':'inline-block !important'}}>
                                    <p> <strong>{bprod.name} </strong></p>
                                    <p > {bprod.popularity_weekly} veces consumido</p>
                                    </div>
                                    
                                </div>
                                <img src={`${bprod.url_image}`} alt="Categoria" />

                            </div>
                        </div>
                    )
                    }
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Home