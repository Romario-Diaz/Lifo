import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import PageNotFound from "../404";
import Loading from "../loading";

const Carta = () => {

    const [pageExist, setPageExists] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [allProducts, setAllProducts] = useState([])
    const [productsPerCategorie, setProductPerCategorie] = useState([])
    const [catName, setCatName] = useState("")

    const router = useRouter()

    const url = "https://api.lifoperu.com/landing/menu"


    const changeCategorie = (categorie_name) => {
        console.log("llegaa : ", categorie_name)
        for (let z = 0; z < allProducts.length; z++) {
            if (allProducts[z].cat_name == categorie_name) {
                console.log("lo cambiamos por : ", allProducts[z].cat)
                setProductPerCategorie(allProducts[z].cat)
            }
        }
    }

    const asignData = (categories, products) => {
        console.log("estas son las caegoriaas: ", categories)
        console.log("los productos", products)
        let cat = []
        let ordered = []
        let cat_name = {}

        let aux = 0
        filteredCat: for (var i = 0; i < categories.length; i++) {
            cat = []
            cat_name = {}
            aux = 0;
            filteredProd: for (var j = 0; j < products.length; j++) {
                if (categories[i].id == products[j].category_id) {
                    cat.push(products[j])
                    aux = aux + 1

                    // if (aux >= 5) {

                    //     break filteredProd;

                    // }
                }
            }
            cat_name = categories[i].name
            if (cat.length != 0) {
                ordered.push({ cat_name, cat })
            }
        }

        setAllProducts(ordered)
        setCatName(ordered[0].cat_name)
        setProductPerCategorie(ordered[0].cat)

        // Pristine:for(let a = 0; a < ordered.length; a++) {
        //     if(ordered[a].cat.length != 0) {

        //         break Pristine
        //     }
        // }

    }

    useEffect(() => {
        setIsLoading(true)
        setPageExists(false)
        console.log("tadaaaa", router.query)
        fetch(`${url}/confirmation/${router.query.landings}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === true) {
                    console.log("la carta existe baby", data.data[0].id)
                    fetch(`${url}/${data.data[0].id}`, {
                        method: 'GET'
                    })
                        .then(response => response.json())
                        .then(data => {
                            asignData(data.data[2], data.data[1])
                        })

                    setPageExists(true)
                } else {
                    console.log("no ha encontrado nada!!!")
                    setIsLoading(false)
                    setPageExists(false)
                }
            })
    }, [])

    return (
        <>{pageExist ? 
            <>
                <div>
                    <div className="banner">
                        <div className="banner__background">
                            <div className="banner__info">
                                <h1>El Califa</h1>
                                <p>Cevichería Restaurante</p>
                            </div>
                        </div>
                    </div>

                    <div className="gallery mt-70">
                        <div className="gallery__filter">
                            {allProducts.map((item, i) => (

                                <a key={i}
                                    className={catName == item.cat_name ? 'gallery__active' : 'gallery__item'}
                                    onClick={() => { changeCategorie(item.cat_name) }}>
                                    {item.cat_name}
                                </a>

                            ))
                            }
                        </div>

                        <div className="gallery__images">
                            {productsPerCategorie.map((prod, i) => (
                                <div key={i} className="gallery__image-item">
                                    <img
                                        src={`${prod.url_image}`}
                                        alt="food"
                                    />
                                    <div className="gallery__image-back none">
                                        <span>COMIDA 1</span>
                                    </div>

                                    <div className="gallery__image-content">
                                        <span>{prod.name}</span>
                                        <span>S/. {prod.price}</span>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>


                <footer className="footers">
                    <div className="footers__top">
                        <div className="footers__col">
                            <h3>DIRECCIONES</h3>
                            <p>Puerto Maldonado</p>
                            <p>Psj. Piura</p>

                        </div>
                        <div className="footer__col">
                            <h3>HORARIO DE ATENCIÓN</h3>
                            <p>Lun-Sab: 09:00 AM - 06:00 PM</p>
                            <p>Dom-Fer: 11:00 AM - 04:00 PM</p>
                        </div>
                        <div className="footer__col">
                            <h3>DIRECCIONES</h3>
                            <p>Celular: +51 942 612 124</p>
                            <p>ACelular: +51 918 826 321</p>
                            <p>Email: local@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <p>
                            © Devin 2022 . Todos los derechos reservados. Diseñado por Devinn
                        </p>
                    </div>
                </footer>
            </>
            :
            <PageNotFound/>
            
        }

        </>
    )
}

export default Carta

export async function getServerSideProps(context) {
    return {
        props: {}
    }
}
