import selectors from "../../redux/slices/selectors";
import { useSelector } from 'react-redux';
import { TextField, Box } from "@mui/material";

const SwapiCardBody = () => {
    const cardContent = useSelector(selectors.swapiResponse);

    return (
        <Box className = 'card'>
            <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                rows={15}
                defaultValue={cardContent}
            />
        </Box>
    )
}

export default SwapiCardBody;