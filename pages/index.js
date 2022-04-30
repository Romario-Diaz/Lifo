
import Navigation from '../components/globals/navigation'

import Footer from '../components/globals/footer'

const Home = () => {
    return (
        <>
            <Navigation />
            <main className="pt-md">
                <div className="row px-md">
                    <div className="col col--f-1">
                        <h5 className="text__title--1"><span>Pedido </span> Rápido <span>&amp; Fácil</span>  Usar</h5>
                        <p className="text__title--2">Tus pedido al alcance de tu celular, difruta de la mejor aplicación</p>
                        <a href="#" className="button-demo">Ver Demo App</a>
                    </div>
                    <div className="col col--width d-flex">
                        <img className="image-logo" src="/images/banner.png" alt="User" />
                    </div>
                </div>
                <div className="row px-md">
                    <img className="phone-image" src="/images/phone.png" alt="Phone" />
                    <div className="box-playstore">
                        <p className="text__title--3">Descarga</p>
                        <p className="text__title--3">nuestro aplicativo</p>
                        <p className="text__title--4">El placer de pedir en tus manos</p>
                        <div className="box-icon-playstore">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBonT4YNlq86AMVQ3sl9Y_VoJuZzukwXgwmA&usqp=CAU" alt="Play store" />
                        </div>
                    </div>
                </div>
                <div className="row px-md">
                    <div className="container-title">
                        <div>
                            <h5 className="text__title--1 pt-0"><span>Nuestros </span>Locales</h5>
                            <h5 className="text__title--1 pt-0">Asociados</h5>
                        </div>
                        <div>
                            <p className="text__title--5">Tenemos los mejores locales a</p>
                            <p className="text__title--5">tu disposición</p>
                        </div>
                    </div>
                </div>
                <div className="row px-md pt-md">
                    <div className="business">
                        <div className="business__container-image">
                            <img src="/images/log.jpg" alt="business" /></div>
                        <p>El Horcon</p>
                        <a href="#">Visitar &gt;</a>
                    </div>
                    <div className="business">
                        <div className="business__container-image">
                            <img src="/images/log.jpg" alt="business" /></div>
                        <p>El Horcon</p>
                        <a href="#">Visitar &gt; </a>
                    </div>
                    <div className="business">
                        <div className="business__container-image">
                            <img src="/images/log.jpg" alt="business" /></div>
                        <p>El Horcon</p>
                        <a href="#">Visitar &gt;</a>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Home