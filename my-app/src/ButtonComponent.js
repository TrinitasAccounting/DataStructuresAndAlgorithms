
import { useState } from "react";


function ButtonComponent() {
    // state for the on or off color switch
    const [lightOn, setLightOn] = useState(false)

    // handle click function 
    const handleButtonClick = () => {
        setTimeout(() => {
            setLightOn((lightOn) => !lightOn);
        }, 500);
    }

    return (
        <>
            <h3 style={{ color: lightOn ? 'green' : 'red', padding: '1px' }}>{lightOn ? 'Power On' : 'Power Off'}</h3>
            <button onClick={handleButtonClick} style={{ background: lightOn ? 'yellow' : 'gray', width: '50px' }}>{lightOn ? 'ON' : 'OFF'}</button >

        </>
    )
}

export default ButtonComponent;