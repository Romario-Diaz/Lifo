
const FooterLands = ({ all_cellphones, all_telephones, all_address }) => {
    return (
        <>
            <footer className="footers">
                <div className="footers__top">
                    <div className="footers__col">
                        <h3>Contacto</h3>
                        {all_cellphones.map((cell) => {
                            return (
                                <p>Celular: {cell.country_code} {cell.cell_number}</p>
                            )
                        })}
                        {all_telephones.map((tell) => {
                            return (
                                <p>Telefono: {tell.city_code} {tell.tel_number}</p>
                            )
                        })}
                    </div>
                    <div className="footers__col">
                        <h3>HORARIO DE ATENCIÓN</h3>
                        <p>Lun-Sab: 09:00 AM - 06:00 PM</p>
                        <p>Dom-Fer: 11:00 AM - 04:00 PM</p>
                    </div>
                    <div className="footers__col">
                        <h3>DIRECCIONES</h3>
                        {all_address.map((add) => {
                            return (
                                <p>{add.district} - {add.location}</p>
                            )
                        })}
                       
                        {/* <p>Email: reservaciones@burgosrestaurant.com</p> */}
                    </div>
                </div>
                <div className="footers__bottom">
                    <p>© Misk'iq 2021 . Todos los derechos reservados. Diseñado por Devinn</p>
                </div>
            </footer>
        </>
    )
}

export default FooterLands