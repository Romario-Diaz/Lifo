import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ImagesList from '../list/images_list';

const SectionGallery = ({ all_products_sorted }) => {
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
                                            <Tab key={i} className="gallery__item">{products.cat_name}</Tab>
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