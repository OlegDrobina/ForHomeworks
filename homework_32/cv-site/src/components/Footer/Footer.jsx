import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const mainBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  };
  const communicationItemsStyle = { display: "flex", alignItems: "center" };
  return (
    <Box
      sx={{
        backgroundColor: "#7F00FF",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <Box sx={mainBoxStyle}>
        <Typography variant='h6' sx={{ fontWeight: "bold" }}>
          Contact info
        </Typography>

        <Box sx={mainBoxStyle}>
          <Box sx={communicationItemsStyle}>
            <EmailIcon />
            <Typography>oleg.drobina.job@ukr.net</Typography>
          </Box>
          <Box sx={communicationItemsStyle}>
            <PhoneIcon />
            <Typography>+8800555353</Typography>
          </Box>
          <Box sx={communicationItemsStyle}>
            <GitHubIcon />
            <Typography>https://github.com/OlegDrobina/</Typography>
          </Box>
          <Box sx={communicationItemsStyle}>
            <LinkedInIcon />
            <Typography>
              https://www.linkedin.com/in/oleg-drobina-0965041b0/
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
