import {InputLabel, TextareaAutosize} from "@mui/material";
import {Controller} from "react-hook-form";

export const FormTextArea = ({name, control, label}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <>
                    <InputLabel>{label}</InputLabel>
                    <TextareaAutosize
                        {...field}
                        minRows={3}
                    />
                </>
        )}
        />
    )
}