import { AppContainer, StyledForm } from "./App.styles";
import {Button, Typography} from "@mui/material";
import {FormSelect} from "../../components/FormSelect/FormSelect";
import {useForm} from "react-hook-form";

function App() {

    const {control, handleSubmit, reset} = useForm({
        defaultValues: {
            tower: "",
            floor:"",
            room:'',
        }

    })

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
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
            <div>
                <Button
                    variant="contained"
                    type="submit"
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
