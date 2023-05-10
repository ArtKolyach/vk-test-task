import {LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import {InputLabel} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import set from 'date-fns/set'
import ru from 'date-fns/locale/ru';

export const nineAM = set(new Date(), { hours: 9, minutes: 0, seconds: 0 })
export const ninePM = set(new Date(), { hours: 21, minutes: 0, seconds: 0 })

export const FormTimePicker = ({ name, control, label, minTime, maxTime, onChange, onError, sx, validate }) => {

    const createTimeChangeHandler = (fieldOnChange) => (value) => {
        fieldOnChange(value)
        onChange?.(value)
    }

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true, validate: validate }}
            render={({ field, fieldState: { error}}) => (
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={ru}
                >
                    <div>
                        <InputLabel>{label}</InputLabel>
                        <TimePicker
                            {...field}
                            sx={sx}
                            onChange={createTimeChangeHandler(field.onChange)}
                            timeSteps={{minutes: 10}}
                            minTime={minTime || nineAM}
                            maxTime={maxTime || ninePM}
                            onError={onError}
                            slotProps={{
                                textField: {
                                    helperText: error?.message,
                                },
                            }}
                        />
                    </div>
                </LocalizationProvider>
            )}
        />
    )
}