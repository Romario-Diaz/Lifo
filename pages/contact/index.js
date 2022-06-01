
import Navigation from '../../components/globals/navigation'

import Footer from '../../components/globals/footer'

import Metadata from '../../components/globals/metadata'

const Contact = () => {
    return (
        <>
            <Metadata />
            <Navigation
                img_url="images/b2.png"
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
                    <h2>CONTACTA CON NOSOTROS</h2>
                    <p>
                        !Escríbenos
                    </p>
                </div>


                <div class="home__contact">
                    <div class="home__contact-container">
                        <h6>N° CELULAR</h6>
                        <p>+51 952 369 712</p>
                        <p>+51 952 369 712</p>
                    </div>
                    <div>
                        <h6>CORREO ELECTRÓNICO</h6>
                        <p>devinnovation@gmail.com</p>
                    </div>
                </div>


            </main>

            <Footer />
        </>
    )
}

export default Contact