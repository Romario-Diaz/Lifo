import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageNotFound from "../404";

import Metadata from '../../components/globals/metadata'

import LandingContainer from "../../components/landings/landing_container";

const Landings = () => {

    const [pageExists, setPageExists] = useState(false)
    const router = useRouter()

    useEffect(() => {
        console.log(router)
        if (router.query.landings === 'PizzeriaHorcon') {
            setPageExists(true)
            console.log("la pagina existe")
        } else {
            setPageExists(false)
            console.log("la pagina no existe")
        }
    }, [])

    return (
        <>
            
            <Metadata />
            
            {pageExists ?
                <>
                    <LandingContainer />
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
