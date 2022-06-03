import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageNotFound from "../404";

import Metadata from '../../components/globals/metadata'

import LandingContainer from "../../components/landings/landing_container";

import Loading from "../loading";



const Landings = () => {

    const [basicLandingInformation, setBasicLandingInformation] = useState([])
    const [businessImages, setBusinessImages] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [allCategories, setAllCategories] = useState([])

    const [allCellphones, setAllCellphones] = useState([])
    const [allTelephones, setAllTelephones] = useState([])
    const [allAddress, setAllAddress] = useState([])

    const [pageExists, setPageExists] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        setPageExists(false)
        fetch(`https://api.lifoperu.com/landing/business/${router.query.landings}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log("los datos:", data.data)
                if (data.status === true) {
                    setBasicLandingInformation(data.data[0])

                    if(data.data[1].length != 0) {
                        setBusinessImages(data.data[1])
                    }else {
                        let fictic_data = [
                            {url_image: "/images/landing/default.jpg"},
                            {url_image: "/images/landing/default.jpg"}
                        ]
                        setBusinessImages(fictic_data)
                    }
                    
                    setAllProducts(data.data[2])
                    setAllCategories(data.data[3])
                    setAllCellphones(data.data[4])
                    setAllTelephones(data.data[5])
                    setAllAddress(data.data[6])
                    setLoading(false)
                    setPageExists(true)

                } else {
                    setLoading(false)
                    setPageExists(false)
                }
            })
    }, [])

    return (
        <>
            {loading ?
                <>
                    <Loading />
                </>
                :
                <>
                    <Metadata />
                    {pageExists ?
                        <>
                            {
                                basicLandingInformation && businessImages && allProducts ?
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
                                    // <PageNotFound />
                            }
                        </>
                        :
                        <PageNotFound />
                        
                    }
                </>
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
