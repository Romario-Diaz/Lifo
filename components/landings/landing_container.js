import NavbarLands from "./navbar_lands"
import FooterLands from "./footer_lands"

import SectionAbout from "./lands_sections/section_about"
import SectionMenu from "./lands_sections/section_menu"
import SectionGallery from "./lands_sections/section_gallery"
import SectionMap from "./lands_sections/section_map"

import { mapsKey } from '../../utils/credentials'

import Overlays from "./overlays"
import { useEffect, useState } from "react"

const LandingContainer = (props) => {

    const { basic_landing_information,
        business_images,
        all_products,
        all_categories,
        all_cellphones,
        all_telephones,
        all_address } = props

    const [orderedProducts, setOrderedProducts] = useState([])



    useEffect(() => {
        // console.log("masp", basic_landing_information[0].name)

        let cat = []
        let ordered = []
        let cat_name = {}

        let aux = 0

        filteredCat: for (var i = 0; i < all_categories.length; i++) {
            cat = []
            cat_name = {}
            aux = 0;
            filteredProd: for (var j = 0; j < all_products.length; j++) {
                if (all_categories[i].id == all_products[j].category_id) {
                    cat.push(all_products[j])
                    aux = aux + 1

                    if (aux >= 5 ) {
                        
                        break filteredProd;
                        
                    }
                }
            }
            cat_name = all_categories[i].name
            ordered.push({ cat_name, cat })
        }

        setOrderedProducts(ordered)

    }, [all_categories, all_products])

    return (
        <>
            <div>

                <NavbarLands
                    basic_landing_information={basic_landing_information[0]}
                />

                <div id="SectionAbout">
                    <SectionAbout

                        description={basic_landing_information[0].description}
                        image_about={business_images[1].url_image}
                    />
                </div>


                <div id="SectionMenu">
                    <Overlays
                        title="Menu"
                        description="Disfrute de un menu especial de platillos preparados con ingredientes regionales frescos y de calidad."
                    />

                    {orderedProducts.length > 0 ?
                        <SectionMenu
                            all_products_sorted={orderedProducts}
                        />
                        :
                        <></>
                    }
                </div>


                <div id="SectionGallery">
                    <Overlays
                        title="Galeria"
                        description="Vea nuestros deliciosos platos hechas con insumos nativos de nuestra region."
                    />

                    {orderedProducts.length > 0 ?
                        <SectionGallery
                            all_products_sorted={orderedProducts}
                        />
                        :
                        <></>
                    }
                </div>


                <div id="SectionContact">
                    <Overlays
                        title="Ubicación"
                        description="Encuentranos en la ubicación que se mira abajo."
                    />

                    <div className="map_custom">
                        <SectionMap
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA8I_MCpLUl0X16Lz7V2vrqVE1xCDkq2NQ`}
                            containerElement={<div style={{ height: '100vh' }} />}
                            mapElement={<div style={{ height: '100%' }} />}
                            loadingElement={<p>Cargando</p>}

                            all_address={all_address}
                            business_name={basic_landing_information[0].name}
                        />

                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />

            </div>

            <FooterLands 
                all_cellphones={all_cellphones}
                all_telephones={all_telephones}
                all_address={all_address}
            />
        </>
    )
}

export default LandingContainer