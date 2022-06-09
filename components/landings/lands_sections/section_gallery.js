import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState,useEffect } from 'react';

import ImagesList from '../list/images_list';

const SectionGallery = ({ all_products_sorted }) => {

    const [catName, setCatName] = useState("")

    useEffect(() => {
        setCatName(all_products_sorted[0].cat_name)
    }, [all_products_sorted])

    const changeColor = (id) => {
        // console.log("id:", id.cat_name)
        setCatName(id.cat_name)
    }

    return (
        <>

            <div className="gallery">

                <Tabs>
                    <TabList className="gallery__filter">

                        {
                            all_products_sorted.map((products, i) => {

                                return (
                                    <>
                                        {products.cat.length != 0 ?
                                            <Tab key={i} 
                                            className={catName == products.cat_name ? 'gallery__active' : 'gallery__item'}
                                            // className="gallery__item"
                                            onClick={() => {changeColor(products)}}>{products.cat_name}
                                            </Tab>
                                            :
                                            <></>
                                        }
                                    </>

                                )
                            })
                        }
                    </TabList>

                    
                    {
                        <div className="">
                            <div className="gallery__images">
                            {
                                all_products_sorted.map((products, i) => {

                                    return (
                                        <>
                                            {products.cat.length != 0 ?
                                                <TabPanel key={i}>
                                                    {/* <h2>Any content {i}</h2> */}
                                                    <ImagesList 
                                                        products_cat = {products.cat}
                                                    />
                                                </TabPanel>
                                                :
                                                <></>
                                            }
                                        </>
                                    )
                                })
                            }
                            </div>
                        </div>
                    }
                    
                </Tabs>
            </div>
        </>
    )
}

export default SectionGallery