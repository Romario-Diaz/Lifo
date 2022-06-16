

const Footer = () => {
    return (
        <>
            <footer className="home__footer">
                <div className="home__footer-top">
                    <div className="home__footer-col"></div>
                    <div className="home__footer-col">
                        <p>Nuestra app</p>
                        <div className="home__footer-list">
                            <a >
                                {" "}
                                <i className="fa-solid fa-chevron-right"></i> Carta digital
                            </a>
                            <a >
                                {" "}
                                <i className="fa-solid fa-chevron-right"></i> Panel administrativo
                            </a>
                            <a >
                                {" "}
                                <i className="fa-solid fa-chevron-right"></i> Tarifas
                            </a>
                            <a >
                                {" "}
                                <i className="fa-solid fa-chevron-right"></i> FAQS
                            </a>
                            <a >
                                {" "}
                                <i className="fa-solid fa-chevron-right"></i> Landing
                            </a>
                        </div>
                    </div>
                    <div className="home__footer-col">
                        <p>Nuestros servicios</p>
                        <div className="home__footer-list">
                            <a >
                                {" "}
                                <i className="fa-solid fa-chevron-right"></i> Carta digital QR
                            </a>
                            <a >
                                {" "}
                                <i className="fa-solid fa-chevron-right"></i> App de pedidos
                            </a>
                            <a >
                                {" "}
                                <i className="fa-solid fa-chevron-right"></i> Landing para tu
                                negocio
                            </a>
                            <a >
                                {" "}
                                <i className="fa-solid fa-chevron-right"></i> Posicionamiento online
                            </a>
                        </div>
                    </div>
                    <div className="home__footer-col">
                        <p>Contacto</p>
                        <div className="home__footer-list">
                            <a >
                                <i className="fa-solid fa-phone"></i> +51 952369712
                            </a>
                            <a >
                                <i className="fa-solid fa-phone"></i> +51 984465276
                            </a>
                            <a >
                                <i className="fa-solid fa-envelope"></i> lifo@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="home__footer-bottom">
                    <p>
                        <strong>LIFO</strong> © 2022 All Right Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer