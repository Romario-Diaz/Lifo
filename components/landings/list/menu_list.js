import MenuItemsList from "./menu_items_list"

const MenuList = ({ all_products_sorted }) => {
    return (
        <>
            {
                all_products_sorted.map((products, i) => {

                    return (
                        <>

                            {
                                products.cat.length != 0 ?
                                    <div key={i} className="menus__list">

                                        <MenuItemsList
                                            products={products}
                                        />


                                    </div>
                                    :
                                    <></>
                            }

                        </>
                    )

                })
            }

        </>
    )
}

export default MenuList