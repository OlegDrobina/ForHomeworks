import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import selectors from "../../redux/slices/selectors";
import { useDispatch } from "react-redux";
import { modifyItemText } from "../../redux/slices/tasksListSlice";
import { Box } from "@mui/material";

const ModifyItem = () => {
  const textValue = useSelector(selectors.modifySubjectText);
  const isLoading = useSelector(selectors.isLoading);
  const dispatch = useDispatch();

  const handleModifyTextChange = (event) => {
    dispatch(modifyItemText(event.target.value));
  };

  return (
    <Box>
      <TextField
        id='outlined-basic'
        size='small'
        variant='outlined'
        value={textValue}
        onChange={handleModifyTextChange}
        disabled={isLoading}
      />
    </Box>
  );
};

export default ModifyItem;
