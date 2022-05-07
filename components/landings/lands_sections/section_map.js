import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from 'react-google-maps'

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const SectionMap = (props) => {
    console.log("asdasd",props.all_address[0]);
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: props.all_address[0].latitude, lng: props.all_address[0].longitude }}

        >
            {

                props.all_address.map((address, i) => {
                    return(
                    <Marker position={{ lat: address.latitude, lng: address.longitude }} >

                        <InfoBox
                            onCloseClick={props.onToggleOpen}
                            options={{ closeBoxURL: ``, enableEventPropagation: true }}
                        >
                            <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                                <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                                    {props.business_name}
                                </div>
                            </div>
                        </InfoBox>
                    </Marker>
                    )
                })
            }

        </GoogleMap >
    )
}

export default withScriptjs(
    withGoogleMap(
        SectionMap
    )
)