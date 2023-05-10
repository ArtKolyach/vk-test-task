import {FormTimePicker} from "./FormTimePicker/FormTimePicker";

export const FormTimeRangePicker = ({ control }) =>  {
    return (
        <>
            <FormTimePicker
                name="timeFrom"
                control={control}
                label="С"
            />
            <FormTimePicker
                name="timeTo"
                control={control}
                label="До"
            />
        </>

    )
}