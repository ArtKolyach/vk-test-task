import {LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/ru'
import { TimePicker, MobileTimePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import {InputLabel} from "@mui/material";

export const FormTimePicker = ({name, control, label}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="ru"
                >
                    <InputLabel>{label}</InputLabel>
                    <MobileTimePicker {...field}/>
                </LocalizationProvider>
            )}
        />
    )
}