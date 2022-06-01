
import Navigation from '../../components/globals/navigation'

import Footer from '../../components/globals/footer'

import Metadata from '../../components/globals/metadata'
const Join = () => {
    return (
        <>
            <Metadata />
            <Navigation
                img_url="images/b2.png"
            />

            <main>
                <div className="home__play-container">
                    <img
                        src="https://lh3.googleusercontent.com/1hJj6Aw2k6cEyFu10xdj5riLo0wBGFKE5XnbGaymhgo1z8Tsr8EpfJr2jbQFRxDONvwk6lak-62F2Fx7-_jp-ykJKA=w1000-e365"
                        alt="Play store"
                    />
                </div>

                <div className="home__title-container">
                    <h2>LLEVA TU NEGOCIO AL <br /> SIGUIENTE NIVEL</h2>
                </div>

                <div className="home__funcionality-container">
                    <div className="home__funcionality-item">
                        <div className="home__funcionality-content">
                            <h3>1</h3>
                            <h4>Crea tu menú digital <br />personalizado</h4>
                            <p>
                                Obten un total sobre las categorias, <br />
                                los tamaños, las variantes, entre otros detalles.
                            </p>
                        </div>
                        <div className="home__funcionality-img">
                            <img
                                src="/images/f5.png"
                                alt="restaurant"
                            />
                        </div>
                    </div>

                    <div className="home__funcionality-item">
                        <div className="home__funcionality-img">
                            <img
                                src="/images/f4.png"
                                alt="restaurant"
                            />
                        </div>
                        <div className="home__funcionality-content">
                            <h3>2</h3>
                            <h4>Ofrece a tus comensales<br />un experiencia de usuario de calidad</h4>
                            <p>
                                Por medio del aplicativo móvil permite que puedan ver la carta y realizar pedidos.
                            </p>
                        </div>
                    </div>

                    <div className="home__funcionality-item">
                        <div className="home__funcionality-content">
                            <h3>3</h3>
                            <h4>Gestiona tus pedidos<br /> de una manera rápida, fácil <br /> y detallada </h4>
                            <p>
                                Recibe los pedido organizados por mesa y por orden de llegada.
                            </p>
                        </div>
                        <div className="home__funcionality-img">
                            <img
                                src="/images/f7.png"
                                alt="restaurant"
                            />
                        </div>
                    </div>
                </div>

                <div className="home__title-container">
                    <h2>VENTAJAS</h2>
                </div>

                <div className="home__benefit">
                    <div className="home__benefit-left">
                        <div class="home__benefit-item">
                            <img src="/images/s1.png" alt="servicio 1" />
                            <span>CONTROL TOTAL</span>
                        </div>
                        <div class="home__benefit-item">
                            <img src="/images/s2.png" alt="servicio 2" />
                            <span>SOPORTE 24/7</span>
                        </div>
                        <div class="home__benefit-item">
                            <img src="/images/s3.png" alt="servicio 3" />
                            <span>MULTIDISPOSITIVOS</span>
                        </div>
                        <div class="home__benefit-item">
                            <img src="/images/s4.png" alt="servicio 4" />
                            <span>PROTECCIÓN COVID 19</span>
                        </div>
                        <div class="home__benefit-item">
                            <img src="/images/s5.png" alt="servicio 5" />
                            <span>INNOVACIÓN</span>
                        </div>
                    </div>
                    <div className="home__benefit-right">
                        <img src="/images/f6.png" alt="App" />
                    </div>
                </div>

                <div className="home__title-container">
                    <h2>NUESTROS PRECIOS</h2>
                    <p>
                        Prueba gratuita por un mes,
                        sin compromiso.
                    </p>
                </div>

                <div class="home__prices">
                    <div class="home__prices-item">
                        <div class="home__prices-circle">
                            <span>PACK</span>
                            <span>BASIC</span>
                        </div>
                        <h6>SERVICIO DE UN MES</h6>
                        <span>$10</span>
                        <div class="home__prices-content">
                            <p><i class="fa-solid fa-check"></i> Funciones 100%</p>
                            <p><i class="fa-solid fa-check"></i> Usuarios ilimitados</p>
                            <p><i class="fa-solid fa-check"></i> Código QR</p>
                            <p><i class="fa-solid fa-check"></i> Personalización</p>
                            <a href="/contact">Buy now</a>
                        </div>
                    </div>
                </div>


            </main>

            <Footer />
        </>
    )
}

export default Join