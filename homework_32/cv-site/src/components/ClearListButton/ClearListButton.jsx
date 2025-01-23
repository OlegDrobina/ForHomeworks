import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import selectors from "../../redux/slices/selectors";
import { clearToDo } from "../../redux/slices/tasksListSlice";

const ClearListButton = () => {
    const isLoading = useSelector(selectors.isLoading);
    const dispatch = useDispatch();
    const clearListButtonClick = () => {
        dispatch(clearToDo());
    }
    return (
        <Button onClick={clearListButtonClick} disabled={isLoading}>Clear list</Button>
    )
}

export default ClearListButton;