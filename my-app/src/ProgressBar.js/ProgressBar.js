
import '../ProgressBar.js/ProgressBar.css';

import { useState } from "react";


function ProgressBar() {

    //initalize state for the progress percentage
    const [progress, setProgress] = useState({
        value: 10,
        fullWidth: 500
    })

    // handle input changes
    function handleChange(event) {
        event.preventDefault()
        let newProgress = { ...progress, [event.target.name]: event.target.value }

        if (event.target.value > 100) {
            alert('Please enter a number less than 100')
        }
        else {
            setProgress(newProgress)
        }

    }

    // let progressWidthCalculation = progress.fullWidth * (progress.value / 100);
    let progressWidth = `'${progress.value}%'`



    console.log(progressWidth)


    // let divFrontStyle = {
    //     backgroundColor: colorChoice,
    //     position: "absolute",
    //     top: '300px',
    //     left: '500px',
    //     height: '20px',
    //     width: progressWidth,
    //     borderRadius: '40px'
    // }


    // style={{ backgroundColor: "gray", position: "absolute", top: '300px', left: '500px', height: '20px', width: '500px', borderRadius: '40px' }}


    return (
        <>
            <div className='progress-bar-div'>
                <h2 className='text-progress-large'>Progress Bar</h2>
                <div className='progress-bar-back' >
                    <div className='progress-bar-front' style={{ width: progress.value + '%' }}>
                        <h2 className='text-progress-bar-middle'>{progress.value}%</h2>
                    </div>
                </div>
            </div>
            <div className='input-text-div'>

                <label name='value' className='text-input-percentage'>Input Percentage:</label>
                <input value={progress.value} type='number' name='value' onChange={handleChange} className='input-box' />

            </div>
        </>
    )
}

export default ProgressBar;