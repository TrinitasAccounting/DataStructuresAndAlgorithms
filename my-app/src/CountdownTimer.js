
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ timeRemaining, setTimeRemaining }) => {
    // Initial time in seconds (10 seconds)
    // const initialTime = 10;
    // const [timeRemaining, setTimeRemaining] = useState(initialTime);



    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timerInterval);
                    // Perform actions when the timer reaches zero
                    console.log('Countdown complete!');
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(timerInterval);
    }, []); // The empty dependency array ensures the effect runs only once on mount

    // Convert seconds to hours, minutes, and seconds
    // const hours = Math.floor(timeRemaining / 3600);
    // const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
        <div>
            {/* <p>Countdown Timer:</p> */}
            {/* <p>{`${hours}h ${minutes}m ${seconds}s`}</p> */}
            <p>Time Left: {`${seconds}s`}</p>
        </div>
    );
};

export default CountdownTimer;