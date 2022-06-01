
import { useEffect, useState } from 'react'
import Loading from './loading'

const PageNotFound = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    },[])

    return (
        <>
            {isLoading ? 
                <Loading />
                :
                <h1>Page Not Found</h1>
            }
        </>
    )
}

export default PageNotFound