import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/ru'
import {DatePicker} from "@mui/x-date-pickers";
import {Controller} from "react-hook-form";
import {InputLabel} from "@mui/material";

export const FormDatePicker = ({name, control, label}) => {
    return (
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <div>
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            adapterLocale="ru"
                        >
                            <InputLabel
                                style={{marginTop: "10px"}}
                            >
                                {label}
                            </InputLabel>
                            <DatePicker
                                {...field}
                                disablePast
                                sx={{width: "100%"}}
                            />
                        </LocalizationProvider>
                    </div>
                )}
            />
    );
}