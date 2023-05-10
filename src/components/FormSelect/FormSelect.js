import { Select, InputLabel, MenuItem } from "@mui/material";
import {Controller} from "react-hook-form";

export const FormSelect = ({ name, values, label, control }) => {
    return (
        <>
            <InputLabel id={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        label={label}
                        labelId={name}
                        {...field}
                    >
                        {values.map((value) => (
                            <MenuItem value={value}>{value}</MenuItem>
                        ))}
                    </Select>
                )}
            />
        </>
    )
}