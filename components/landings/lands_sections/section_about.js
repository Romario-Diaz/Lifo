
const SectionAbout = ({ description, image_about }) => {
    return (
        <>
            <div className="about">
                <div className="about__container-img">
                    <img src={image_about} alt="restaurant" />
                </div>
                <div className="about__container-info">
                    <h2>Nuestro negocio</h2>
                    <hr />
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default SectionAbout