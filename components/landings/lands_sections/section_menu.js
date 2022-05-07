
import MenuList from "../list/menu_list"

const SectionMenu = ({ all_products_sorted }) => {

    console.log(all_products_sorted)
    return (

        <div className="menus">
            <MenuList 
            all_products_sorted={all_products_sorted}
            />
        </div>

    )
}

export default SectionMenu