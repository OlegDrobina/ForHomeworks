import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import {css} from "@emotion/react"

const appBarStyles = css `
  top: "auto";
  bottom: 0
`;

const boxStyles = css `
  flexGrow: 1
`;

const navLinkStyles = css `
  textDecoration: none,
  justify-content: space-between;
`

const Header = () => {
    return (
        <AppBar position="static" color="primary" sx={appBarStyles}>
          <Toolbar>
            <Box sx={boxStyles}>
              <Typography variant="h6" component="div">
                Oleg Drobina
              </Typography>
            </Box>
              <NavLink to="/" style={navLinkStyles}>
                CV
              </NavLink>
              <NavLink to="/page2" style={navLinkStyles}>
                TODo List
              </NavLink>
              <NavLink color="inherit" to="/page3" style={navLinkStyles}>
                SWAPI
              </NavLink>
          </Toolbar>
        </AppBar>
      );
}

export default Header;