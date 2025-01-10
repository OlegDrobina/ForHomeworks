import selectors from "../../redux/slices/selectors";
import { useSelector } from 'react-redux';
import { TextField } from "@mui/material";

const SWAPICardBody = () => {
    const cardContent = useSelector(selectors.swapiResponse);

    return (
        <div className = 'card'>
            <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                rows={15}
                defaultValue={cardContent}
            />
        </div>
    )
}

export default SWAPICardBody;