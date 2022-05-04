
import Navigation from '../../components/globals/navigation'

import Footer from '../../components/globals/footer'

import Metadata from '../../components/globals/metadata'

const Contact = () => {
    return (
        <>
            <Metadata />
            <Navigation />
            <main className="pt-md">
                <div className="row px-md service">
                    <div className="text-center w-100">
                        <h5 className="text__title--1 pt-0"><span>ESCRIBENOS</span></h5>
                        <h5 className="text__title--1 pt-0">CONTACTA CON NOSOTROS</h5>
                    </div>
                </div>
                <div className="d-flex pt-md contact">
                    <div className="contact__container">
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