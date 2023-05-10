import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import {Controller} from "react-hook-form";

export const FormSelect = ({ name, values, label, control }) => {
    return (
        <FormControl
            required
            style={{marginTop: "10px"}}
        >
            <InputLabel id={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <Select
                        label={label}
                        labelId={name}
                        {...field}
                    >
                        {values.map((value, index) => (
                            <MenuItem
                                value={value}
                                key={index}
                            >
                                {value}
                            </MenuItem>
                        ))}
                    </Select>
                )}
            />
        </FormControl>
    )
}