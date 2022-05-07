
const MenuItemsList = ({ products }) => {
    return (

        <>
            <h2>{products.cat_name}</h2>
            <hr />
            {
                products.cat.map((item, i) => {
                    return(
                        <div key={i} className="menus__item">
                            <span>{item.name}</span>
                            <span>S/. {item.price}</span>
                        </div>
                    )
                })
            }

            {/* <div className="menus__item">
                <span>Berenjena a la americana</span>
                <span>S/. 19.00</span>
            </div>
            <div className="menus__item">
                <span>Salteado de verduras</span>
                <span>S/. 22.00</span>
            </div>
            <div className="menus__item">
                <span>Tallarines saltados</span>
                <span>S/. 22.00</span>
            </div> */}
        </>

    )
}

export default MenuItemsList