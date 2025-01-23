import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import {css} from "@emotion/react"

const appBarStyles = css `
  top: "auto",
  bottom: 0
`;

const Header = () => {
    return (
        <AppBar position="static" color="primary" sx={appBarStyles}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Oleg Drobina
            </Typography>
            <Button color="inherit" component={NavLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={NavLink} to="/todo">
              TODO
            </Button>
            <Button color="inherit" component={NavLink} to="/swapi">
              SWAPI
            </Button>
          </Toolbar>
        </AppBar>
      );
}

export default Header;