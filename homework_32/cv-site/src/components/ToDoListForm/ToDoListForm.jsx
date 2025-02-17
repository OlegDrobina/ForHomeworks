import TaskRegistrationForm from "../TaskRegistrationForm/TaskRegistrationForm";
import ItemsList from "../ItemsList/ItemsList";
import ModifyItem from "../ModifyItem/ModifyItem";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Typography, Box } from "@mui/material";

const ToDoListForm = () => {
  const headerMainBoxStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginLeft: "70px",
  };

  const headerSecondBoxStyle = {
    marginTop: "-20px",
    paddingRight: "700px",
  };

  const todoElementStyle = {
    marginLeft: "60px",
  };

  return (
    <Provider store={store}>
      <Box>
        <Box>
          <Typography variant='h3' sx={todoElementStyle}>
            TODOS
          </Typography>
        </Box>
        <Box sx={headerMainBoxStyle}>
          <Box>
            <TaskRegistrationForm />
          </Box>
          <Box sx={headerSecondBoxStyle}>
            <label>Text for modification</label>
            <ModifyItem />
          </Box>
        </Box>
      </Box>
      <ItemsList />
    </Provider>
  );
};

export default ToDoListForm;
