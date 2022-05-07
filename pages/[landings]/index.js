import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageNotFound from "../404";

import Metadata from '../../components/globals/metadata'

import LandingContainer from "../../components/landings/landing_container";

const Landings = () => {

    const [basicLandingInformation, setBasicLandingInformation] = useState([])
    const [businessImages, setBusinessImages] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [allCategories, setAllCategories] = useState([])

    const [allCellphones, setAllCellphones] = useState([])
    const [allTelephones, setAllTelephones] = useState([])
    const [allAddress, setAllAddress] = useState([])

    const [pageExists, setPageExists] = useState(false)
    const router = useRouter()

    useEffect(() => {
        fetch(`https://lifo-beta.herokuapp.com/business/landing/${router.query.landings}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log("los datos:", data.data)
                if (data.status === true) {
                    setBasicLandingInformation(data.data[0])
                    setBusinessImages(data.data[1])
                    setAllProducts(data.data[2])
                    setAllCategories(data.data[3])
                    setAllCellphones(data.data[4])
                    setAllTelephones(data.data[5])
                    setAllAddress(data.data[6])

                    setPageExists(true)

                } else {
                    setPageExists(false)
                }
            })
    }, [])

    return (
        <>
            <Metadata />
            {pageExists ?
                <>
                    {
                        basicLandingInformation && businessImages && allProducts?
                            <LandingContainer
                                basic_landing_information={basicLandingInformation}
                                business_images={businessImages}
                                all_products={allProducts}
                                all_categories={allCategories} 
                                all_cellphones={allCellphones}
                                all_telephones={allTelephones}
                                all_address={allAddress}
                            />
                            :
                            <>Cargando</>
                    }
                </>
                :
                <PageNotFound />
            }
        </>
    )
}

export default Landings;

export async function getServerSideProps(context) {
    return {
        props: {}
    }
}
