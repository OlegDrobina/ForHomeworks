import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import selectors from "../../redux/slices/selectors";
import { useEffect } from "react";
import {
  fetchToDo,
  deleteToDo,
  completeToDo,
  modifyToDo,
} from "../../redux/slices/tasksListSlice";
import { css } from "@emotion/react";

const ItemsList = () => {
  const itemsListStyle = css`
    margin-left: 40px;
  `;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToDo());
  }, []);

  const items = useSelector(selectors.items);
  const isLoading = useSelector(selectors.isLoading);

  const handleDeleteClick = (id) => {
    dispatch(deleteToDo(id));
  };

  const handleTaskComplete = (id, isCompleted) => {
    dispatch(completeToDo({ id: id, isCompleted: !isCompleted }));
  };

  const handleSaveButtonClick = (id) => {
    dispatch(modifyToDo({ id: id, text: "" }));
  };

  return (
    <Box
      sx={{
        width: "50%",
        bgcolor: "background.paper",
        mt: "15px",
        alignContent: "center",
      }}
    >
      <List sx={itemsListStyle}>
        {items.map((item) => (
          <Box key={item.id}>
            <Divider />
            <ListItem>
              <Checkbox
                checked={item.isCompleted}
                onChange={() => handleTaskComplete(item.id, item.isCompleted)}
              />
              <ListItemText primary={item.text} />
              <Button
                variant='contained'
                color='success'
                style={{ height: "56px" }}
                onClick={() => handleSaveButtonClick(item.id)}
                disabled={isLoading}
              >
                Save
              </Button>
              <Button
                variant='outlined'
                color='error'
                style={{ height: "56px" }}
                onClick={() => handleDeleteClick(item.id)}
                disabled={isLoading}
              >
                Delete
              </Button>
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default ItemsList;
