import './Capsule.css'

const Capsule = (props) => {
    const { waterLandings, serial, type } = props.capsule;

    return (
        <div className="capsules">
            <ul>
                <li>Type: {type}</li>
                <li>Serial {serial}</li>
                <li>Water Landings: {waterLandings}</li>
            </ul>
        </div>
    )
}

export default Capsule;