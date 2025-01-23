import { useDispatch, useSelector } from "react-redux";
import selectors from "../../redux/slices/selectors";
import { clearResponse } from "../../redux/slices/swapiSlice";
import { Button, Box } from "@mui/material";

const SwapiFooter = () => {
  const clearButtonStyle = {
    marginTop: "5px",
    marginBottom: "5px",
  };

  const dispatch = useDispatch();
  const isClearButtonVisible = useSelector(selectors.isClearButtonVisible);

  const handleClearButtonClick = () => {
    dispatch(clearResponse());
  };

  return (
    <Box>
      {isClearButtonVisible ? (
        <Button
          id='clear-response-button'
          sx={clearButtonStyle}
          variant='contained'
          onClick={handleClearButtonClick}
        >
          Clear
        </Button>
      ) : null}
    </Box>
  );
};

export default SwapiFooter;
