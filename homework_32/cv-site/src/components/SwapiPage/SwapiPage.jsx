import SwapiHeader from "../SwapiHeader/SwapiHeader";
import SwapiCardBody from "../SwapiCardBody/SwapiCardBody";
import SwapiFooter from "../SwapiFooter/SwapiFooter";
import SwapiReqUrl from "../SwapiReqUrl/SwapiReqUrl";
import { Box } from "@mui/material";

import { Provider } from "react-redux";
import { store } from "../../redux/store";

const SwapiPage = () => {
  return (
    <Provider store={store}>
      <Box>
        <SwapiHeader />
        <SwapiReqUrl />
        <SwapiCardBody />
        <SwapiFooter />
      </Box>
    </Provider>
  );
};

export default SwapiPage;
