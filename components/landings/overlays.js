

const Overlays = (props) => {

    const { title, description } = props

    return (
        <>
            <div className="overlay">
                <div className="overlay__background">
                    <h2>{title}</h2>
                    <hr />
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Overlays;