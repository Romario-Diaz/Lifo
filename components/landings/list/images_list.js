import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ImagesList = ({ products_cat }) => {
    return (
        <>
            {
                products_cat.map((products, i) => {
                    console.log(products)

                    return (
                        <div className="gallery">
                            <div className="gallery__images">
                                <div className="gallery__image-item">
                                    <img src={products.url_image} alt="food" />
                                    <div className="gallery__image-back">
                                        <span>{products.name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ImagesList