import React from 'react'


const CountDownDate = ({seconds}) => {
    let timeDays
    let timeHours
    let timeMinutes
    let timeSeconds

    if (seconds > 0) {
        // Calculating the days, hours, minutes and seconds left
        timeDays = Math.floor(seconds / (60 * 60 * 24))
        timeHours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60))
        timeMinutes = Math.floor((seconds % (60 * 60)) / 60)
        timeSeconds = Math.floor(seconds % 60)

        timeDays = timeDays < 10 ? `0${timeDays}` : timeDays
        timeHours = timeHours < 10 ? `0${timeHours}` : timeHours
        timeMinutes = timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes
        timeSeconds = timeSeconds < 10 ? `0${timeSeconds}` : timeSeconds
    } else {
        timeDays = '00'
        timeHours = '00'
        timeMinutes = '00'
        timeSeconds = '00'
    }

    return (
        <>
            <div className="lock-timer mb-20">
                <div className="time-item">
                    <div className="time-area">
                        <div className="time-content  fs-30">{timeDays}</div>
                    </div>
                    <div className="time-title  fs-12">Days</div>
                </div>
                <div className="time-spacer"></div>        
                <div className="time-item">
                    <div className="time-area">
                        <div className="time-content  fs-30">{timeHours}</div>
                    </div>
                    <div className="time-title  fs-12">Hours</div>
                </div>
                <div className="time-spacer">
                    <img src='time-divider.png' alt='divider'></img>
                </div>
                <div className="time-item">
                    <div className="time-area">
                        <div className="time-content  fs-30">{timeMinutes}</div>
                    </div>
                    <div className="time-title  fs-12">Minutes</div>
                </div> 
                <div className="time-spacer">
                    <img src='time-divider.png' alt='divider'></img>
                </div>
                <div className="time-item">
                    <div className="time-area">
                        <div className="time-content  fs-30">{timeSeconds}</div>
                    </div>
                    <div className="time-title  fs-12">Seconds</div>
                </div>                 
            </div>
        </>
    )
}

export default CountDownDate