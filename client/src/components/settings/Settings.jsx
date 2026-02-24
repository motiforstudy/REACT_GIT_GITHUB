import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/GameProvider";


function Settings() {

    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(2);
    const [time, setTime] = useState(true);
    const { timeLeft, setTimeLeft, bombLeft } = useContext(AppContext)

    function bombRemining() {

    }

    useEffect(() => {
        if (time) {
            setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);

            if (seconds === -1 && minutes >= 1) {
                setMinutes(minutes - 1);
                setSeconds(seconds + 60);
            } else if (seconds === 1 && minutes === 0) {
                setTime(false);
            }
        }
    }, [minutes, seconds]);


    return (
        <div>
            <p>{minutes}:{seconds}</p>
            <p>Locate and neutralize all bombs before time runs out.</p>
        </div>
    )
}

export default Settings
