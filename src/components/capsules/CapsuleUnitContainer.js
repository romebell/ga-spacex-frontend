import { useState, useEffect } from 'react';
import axios from 'axios'

import Capsule from './Capsule'; // capsule component is in the same folder

/* 
[
 {
        "reuse_count": 1,
        "water_landings": 1,
        "land_landings": 0,
        "last_update": "Reentered after three weeks in orbit",
        "launches": [
            "5eb87cdeffd86e000604b330"
        ],
        "serial": "C101",
        "status": "retired",
        "type": "Dragon 1.0",
        "id": "5e9e2c5bf35918ed873b2664"
    }
]
*/

const CapsuleUnitContainer = () => {
    const [capsules, setCapsules] = useState([])

    useEffect(() => {
        const fetchCapsules = async () => {
          const response = await axios.get('https://api.spacexdata.com/v4/capsules');
          const data = response.data; // array
          // destructuring
        //   console.log(water_landings) // data inside object
          setCapsules(data);

          // capsules is an array
          // [1]
    
        }
        fetchCapsules();
    }, [])

    console.log(capsules)

    const capsuleList = capsules.map((capsule, index) => {
        return <Capsule capsule={capsule} key={index} />
    });

    return (
        <div>
        {capsuleList}
        </div>
    )
}

export default CapsuleUnitContainer;