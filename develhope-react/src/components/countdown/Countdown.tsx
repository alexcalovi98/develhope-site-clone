import { useEffect, useState } from "react"

export function Countdown() {
    const [minutes, setMinutes] = useState(30)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (minutes == 0 && seconds == 0) {
                clearTimeout(timer)
            } else if (seconds == 0) {
                setMinutes(minutes - 1)
                setSeconds(59)
            } else {
                setSeconds(seconds -1)
            }
        }, 1000)
    })

    return (
        <span>L'offerta scade tra 00:{format(minutes)}:{format(seconds)}</span>
    )
}

function format(n: number): string {
    if (n<10) {
        return "0" + n;
    } else {
        return n.toString();
    }
}