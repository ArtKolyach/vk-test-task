import {InputLabel, TextareaAutosize} from "@mui/material";
import {Controller} from "react-hook-form";

export const FormTextArea = ({name, control, label}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <div
                    id={name + "-wrapper"}
                    style={{
                        marginTop: "10px",
                    }}
                >
                    <InputLabel>{label}</InputLabel>
                    <TextareaAutosize
                        {...field}
                        minRows={3}
                        style={{
                            resize: "none",
                            width: "100%",
                            boxSizing: "border-box",
                            fontSize: "14px"
                        }}
                    />
                </div>
        )}
        />
    )
}