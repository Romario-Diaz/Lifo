
const SectionGallery = () => {
    return (
        <>
            <div className="gallery">
                <div className="gallery__filter">
                    <a className="gallery__item" href="#">Todos</a><a className="gallery__item" href="#">Pizzas</a><a className="gallery__item" href="#">Comida mexicana</a><a className="gallery__item" href="#">bebidas</a><a className="gallery__item" href="#">Piqueos</a><a className="gallery__item" href="#">Especial</a>
                </div>

                <div className="gallery__images">
                    <div className="gallery__image-item">
                        <img src="/images/landing/food1.png" alt="food" />
                        <div className="gallery__image-back">
                            <span>COMIDA 1</span>
                        </div>
                    </div>
                    <div className="gallery__image-item">
                        <img src="/images/landing/food2.png" alt="food" />
                        <div className="gallery__image-back">
                            <span>COMIDA 2</span>
                        </div>
                    </div>
                    <div className="gallery__image-item">
                        <img src="/images/landing/food3.png" alt="food" />
                        <div className="gallery__image-back">
                            <span>COMIDA 3</span>
                        </div>
                    </div>
                    <div className="gallery__image-item">
                        <img src="/images/landing/food4.png" alt="food" />
                        <div className="gallery__image-back">
                            <span>COMIDA 4</span>
                        </div>
                    </div>
                    <div className="gallery__image-item">
                        <img src="/images/landing/food5.png" alt="food" />
                        <div className="gallery__image-back">
                            <span>COMIDA 5</span>
                        </div>
                    </div>
                    <div className="gallery__image-item">
                        <img src="/images/landing/food6.png" alt="food" />
                        <div className="gallery__image-back">
                            <span>COMIDA 6</span>
                        </div>
                    </div>
                    <div className="gallery__image-item">
                        <img src="/images/landing/food7.png" alt="food" />
                        <div className="gallery__image-back">
                            <span>COMIDA 7</span>
                        </div>
                    </div>
                    <div className="gallery__image-item">
                        <img src="/images/landing/food8.png" alt="food" />
                        <div className="gallery__image-back">
                            <span>COMIDA 8</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionGallery