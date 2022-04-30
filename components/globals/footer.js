

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="row px-md footer__top">
                    <div className="footer__col">
                        <a href="#">Nosotros</a>
                        <a href="#">Privacidad</a>
                        <a href="#">Términos y condiciones</a>
                        <a href="#">Registra tu negocio</a>
                    </div>
                    <div className="footer__col">
                        <p>Siguenos en</p>
                        <i className="fa-brands fa-facebook-square" /> <i className="fa-brands fa-instagram" />
                    </div>
                    <div className="footer__col">
                        <p>Descarga la app</p>
                        <i className="fa-brands fa-android" />
                    </div>
                </div>
                <div className="row px-md">
                    <div className="footer__bottom">
                        <p>Copyright © 2021 - Lifo</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer