import React from 'react';
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import selectors from "../../redux/slices/selectors";
import { useDispatch } from "react-redux";
import { modifyItemText } from "../../redux/slices/tasksListSlice";

const ModifyItem = () => {
    const textValue = useSelector(selectors.modifySubjectText);
    const isLoading = useSelector(selectors.isLoading);
    const dispatch = useDispatch();

    const handleModifyTextChange = (event) => {
        dispatch(modifyItemText(event.target.value));
    }

    return (
        <div>
            <TextField id="modify-item-button-id" size="small" variant="outlined" value={textValue} onChange={handleModifyTextChange} disabled={isLoading} />
        </div>
    )
}

export default ModifyItem;