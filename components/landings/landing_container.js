import NavbarLands from "./navbar_lands"
import FooterLands from "./footer_lands"

import SectionAbout from "./lands_sections/section_about"
import SectionMenu from "./lands_sections/section_menu"
import SectionGallery from "./lands_sections/section_gallery"
import SectionMap from "./lands_sections/section_map"

import Overlays from "./overlays"


const LandingContainer = () => {
    return (
        <>
            <div>
                <NavbarLands />

                <SectionAbout />

                <Overlays 
                    title="Menu"
                    description="Disfrute de un menu especial de platillos preparados con ingredientes regionales frescos y de calidad."
                />

                <SectionMenu />

                <Overlays 
                    title="Galeria"
                    description="Vea nuestros deliciosos platos hechas con insumos nativos de nuestra region."
                />


                <SectionGallery />

                <Overlays 
                    title="Ubicación"
                    description="Encuentranos en la ubicación que se mira abajo."
                />


                <SectionMap />

            </div>

            <FooterLands />
        </>
    )
}

export default LandingContainer