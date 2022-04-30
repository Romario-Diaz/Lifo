
import Navigation from '../../components/globals/navigation'

import Footer from '../../components/globals/footer'

const Join = () => {
    return (
        <>
            <Navigation />
            <main className="pt-md">
                <div className="row px-md service">
                    <div className="text-center w-100 content-text">
                        <h5 className="text__title--1 pt-0"><span>LlEVA TU NEGOCIO AL</span></h5>
                        <h5 className="text__title--1 pt-0">SIGUIENTE NIVEL</h5>
                    </div>
                </div>
                <div className="row px-md service">
                    <div className="service__content">
                        <div className="service__content-title"><span>1</span> <h6>Crea tu menu digital perzonalizado</h6></div>
                        <p>
                            Obten un total control sobre las categorias, tamaños, variantes, entre otros detalles
                        </p>
                    </div>
                    <div className="service__image">
                        <div className="service__container-image">
                        </div>
                    </div>
                </div>
                <div className="row px-md service">
                    <div className="service__image">
                        <div className="service__container-image">
                        </div>
                    </div>
                    <div className="service__content">
                        <div className="service__content-title"><span>2</span> <h6>Ofrece a tus comensales una experiencia de calidad</h6></div>
                        <p>
                            Por medio del aplicativo móvil permite que puedan ver la carta y realizar sus pedidos.
                        </p>
                    </div>
                </div>
                <div className="row px-md">
                    <div className="service__content">
                        <div className="service__content-title"><span>3</span> <h6>Gestiona tus pedidos de una manera rápida, fácil y detallada</h6></div>
                        <p>
                            Recibe los pedidos organizados por mesa y por orden de llegada.
                        </p>
                    </div>
                    <div className="service__image">
                        <div className="service__container-image">
                        </div>
                    </div>
                </div>
                <div className="advantage">
                    <div className="row">
                        <div className="adventage__col">
                        </div>
                        <div className="adventage__col">
                            <h6 className="text__title--3">VENTAJAS</h6>
                            <div className="row service__container-item">
                                <div className="service__item">
                                    <img src="/images/s1.png" alt="servicio 1" />
                                    <span>CONTROL TOTAL</span>
                                </div>
                                <div className="service__item">
                                    <img src="/images/s2.png" alt="servicio 2" />
                                    <span>SOPORTE 24/7</span>
                                </div>
                                <div className="service__item">
                                    <img src="/images/s3.png" alt="servicio 3" />
                                    <span>MULTIDISPOSITIVOS</span>
                                </div>
                                <div className="service__item">
                                    <img src="/images/s4.png" alt="servicio 4" />
                                    <span>PROTECCIÓN COVID 19</span>
                                </div>
                                <div className="service__item">
                                    <img src="/images/s5.png" alt="servicio 5" />
                                    <span>INNOVACIÓN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-md pt-md">
                    <div className="text-center w-100">
                        <h5 className="text__title--1 pt-0"><span>NUESTRO PRECIOS</span></h5>
                        <p className="text__title--6">Prueba gratituita de un mes sin compromiso</p>
                    </div>
                </div>
                <div className="prices">
                    <div className="prices__item">
                        <div className="prices__circle">
                            <span>PACK</span>
                            <span>BASIC</span>
                        </div>
                        <h6>SERVICIO DE UN MES</h6>
                        <span>$10</span>
                        <div className="prices__content">
                            <p><i className="fa-solid fa-check" /> Funciones 100%</p>
                            <p><i className="fa-solid fa-check" /> Usuarios ilimitados</p>
                            <p><i className="fa-solid fa-check" /> Código QR</p>
                            <p><i className="fa-solid fa-check" /> Personalización</p>
                            <a href="#">Buy now</a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Join