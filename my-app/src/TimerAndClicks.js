
import { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import './TimerAndClick.css'


function TimerAndClicks() {
    const initialTime = 10;
    const [timeRemaining, setTimeRemaining] = useState(initialTime);
    const [count, setCount] = useState(0)

    const onCountClick = () => {
        setCount((count) => (count + 1))
    }

    // console.log(count)

    return (
        <div>

            <h1 className='title'>Number of Clicks Until Timer Expires</h1>
            <div className='TimerDiv'>
                {/* <h1>Test Test Test Test Test Test Test</h1> */}
                <h2 className='count-value'>{count}</h2>
                <div className='Timer'>
                    <CountdownTimer timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} />
                    {timeRemaining > 0 ? <button className='button' onClick={onCountClick}>+</button> : <></>}
                </div>
            </div>
        </div>
    )


}

export default TimerAndClicks;