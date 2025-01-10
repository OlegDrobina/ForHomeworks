import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/slices/selectors';
import {clearResponse} from '../../redux/slices/swapiSlice'
import { Button } from '@mui/material';

const SWAPIFooter = () => {
    const dispatch = useDispatch();
    const isClearButtonVisible = useSelector(selectors.isClearButtonVisible);

    const handleClearButtonClick = () => {
        dispatch(clearResponse());
    }

    return (
        <div>
            {isClearButtonVisible ? <Button id="clear-response-button" variant="contained" onClick={handleClearButtonClick}>Clear</Button> : null}
        </div>
    )
}

export default SWAPIFooter;