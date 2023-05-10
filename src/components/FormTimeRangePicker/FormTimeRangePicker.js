import {FormTimePicker, ninePM, nineAM} from "./FormTimePicker/FormTimePicker";
import {useState} from "react";
import add from 'date-fns/add'
import {compareDesc} from "date-fns";

const errorMessages = {
    timeFrom: {
        minTime: "Бронь доступна с 9:00",
        maxTime: "Бронь доступна до 21:00",
    },
    timeTo: {
        minTime: "Минимальное время бронировния 10 минут",
        maxTime: "Бронь доступна до 21:00",
    },
}

export const FormTimeRangePicker = ({ control, setError }) =>  {

    const [ timeToMinTime, setTimeToMinTime ] = useState()

    const handleTimeFromChange = (value) => {
        setTimeToMinTime(add(value, { minutes: 10 }))
    }

    const createErrorHandler = (name) => (error) => {
        setError(name, {message: errorMessages[name][error]})
    }

    const validateMinTime = (value) => {
        const passed = compareDesc(nineAM, value) >= 0
        if (!passed) {
            setError("timeFrom", {message: errorMessages.timeFrom.minTime})
        }
        return passed
    }

    const validateMaxTime = (name) => (value) => {
        const passed = compareDesc(value, ninePM) >= 0
        if (!passed) {
            setError(name, {message: errorMessages[name].maxTime})
        }
        return passed
    }

    const validateMinTimeForTimeTo = (value) => {
        const passed = compareDesc(timeToMinTime || add(nineAM, { minutes: 10 }), value) >= 0
        if (!passed) {
            setError("timeTo", {message: errorMessages.timeTo.minTime})
        }
        return passed
    }


    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px"
                }}
        >
            <FormTimePicker
                name="timeFrom"
                control={control}
                label="С"
                onChange={handleTimeFromChange}
                sx={{marginRight: "10px"}}
                onError={createErrorHandler("timeFrom")}
                validate={{
                    minTime: validateMinTime,
                    maxTime: validateMaxTime,
            }}
            />
            <FormTimePicker
                name="timeTo"
                control={control}
                label="До"
                minTime={timeToMinTime}
                onError={createErrorHandler("timeTo")}
                validate={{
                    minTime: validateMinTimeForTimeTo,
                    maxTime: validateMaxTime,
                }}
            />
        </div>

    )
}