import { AppContainer, StyledForm } from "./App.styles";
import {Button, Typography, TextareaAutosize} from "@mui/material";
import {FormSelect} from "../../components/FormSelect/FormSelect";
import { FormDatePicker} from "../../components/FormDatePicker/FormDatePicker";
import {FormTimeRangePicker} from "../../components/FormTimeRangePicker/FormTimeRangePicker";
import {FormTextArea} from "../../components/FormTextArea/FormTextArea";
import {useForm} from "react-hook-form";
import format from 'date-fns/format'

function App() {

    const {control, handleSubmit, reset, setError, formState: {errors: formErrors}} = useForm({
        defaultValues: {
            tower: "",
            floor: "",
            room: "",
            date: "",
            timeFrom: "",
            timeTo: "",
            comment: "",
        }

    })

    const onSubmit = (data) => {
        const result = {
            ...data,
            date: format(new Date(data.date), "dd.MM.yyyy"),
            timeFrom: format(new Date(data.timeFrom), "HH:mm"),
            timeTo: format(new Date(data.timeTo), "HH:mm"),
        }
        console.log(JSON.stringify(result))
    }

  return (
      <AppContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Typography
                variant="h5"
                component="span"
                textAlign="center"
            >
            Бронирование переговорки
            </Typography>
            <FormSelect
                name="tower"
                label="Башня"
                values={["А","Б"]}
                control={control}
            />
            <FormSelect
                name="floor"
                label="Этаж"
                values={Array(25).fill().map((e, i) => i + 3)}
                control={control}
            />
            <FormSelect
                name="room"
                label="Переговорка"
                values={Array(10).fill().map((e, i) => i + 1)}
                control={control}
            />
            <FormDatePicker
                name="date"
                control={control}
                label="Дата"
            />
            <FormTimeRangePicker
                control={control}
                setError={setError}
            />
            <FormTextArea
                name="comment"
                label="Комментарий"
                control={control}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                }}
            >
                <Button
                    variant="contained"
                    type="submit"
                    sx={{marginRight: "10px"}}
                >
                    Забронировать
                </Button>
                <Button
                    variant="outlined"
                    type="reset"
                    onClick={() => reset()}
                >
                    Очистить
                </Button>
            </div>
        </StyledForm>
      </AppContainer>
  );
}

export default App;
