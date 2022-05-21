
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
        </>

    )
}

export default MenuItemsList