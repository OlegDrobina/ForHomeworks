import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";

const CvBody = () => {
  const typographyBoldStyle = { fontWeight: "bold" };
  const typographySkillsStyle = { width: "200px" };
  const paperStyle = { padding: 3, marginBottom: 4 };
  const marginBottomGlobalStyle = { marginBottom: 2 };
  return (
    <Box sx={{ maxWidth: "1000px", margin: "0 auto", padding: 3 }}>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant='h3' sx={typographyBoldStyle}>
          Oleg Drobina
        </Typography>
        <Typography variant='h5' sx={{ fontStyle: "italic", color: "gray" }}>
          Full Stack Developer
        </Typography>
      </Box>

      <Paper elevation={3} sx={paperStyle}>
        <Typography variant='h6' sx={typographyBoldStyle}>
          Personal Information
        </Typography>
        <Divider sx={marginBottomGlobalStyle} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography variant='body1'>
            Email: oleg.drobina.job@ukr.net
          </Typography>
          <Typography variant='body1'>Phone: 88005553535</Typography>
          <Typography variant='body1'>Location: Vlora, Albania</Typography>
        </Box>
      </Paper>

      <Paper elevation={3} sx={paperStyle}>
        <Typography variant='h6' sx={typographyBoldStyle}>
          Skills
        </Typography>
        <Divider sx={marginBottomGlobalStyle} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "flex-start",
          }}
        >
          <Typography variant='body1' sx={typographySkillsStyle}>
            JavaScript
          </Typography>
          <Typography variant='body1' sx={typographySkillsStyle}>
            React
          </Typography>
          <Typography variant='body1' sx={typographySkillsStyle}>
            HTML & CSS
          </Typography>
          <Typography variant='body1' sx={typographySkillsStyle}>
            MS SQL
          </Typography>
          <Typography variant='body1' sx={typographySkillsStyle}>
            PostgreSQL
          </Typography>
          <Typography variant='body1' sx={typographySkillsStyle}>
            .Net, C#
          </Typography>
          <Typography variant='body1' sx={typographySkillsStyle}>
            Unix(Linux\FreeBSD)
          </Typography>
          <Typography variant='body1' sx={typographySkillsStyle}>
            SSO, LDAP
          </Typography>
          <Typography variant='body1' sx={typographySkillsStyle}>
            Grafana, Zabbix
          </Typography>
        </Box>
      </Paper>

      <Paper elevation={3} sx={paperStyle}>
        <Typography variant='h6' sx={typographyBoldStyle}>
          Experience
        </Typography>
        <Divider sx={marginBottomGlobalStyle} />
        <Typography variant='body1' sx={typographyBoldStyle}>
          Technical Support Leader | Creatio | 2022 – Present
        </Typography>
        <Typography variant='body2' sx={marginBottomGlobalStyle}>
          Providing development consultation on Creatio product. Working on
          websites performance issues. Managing and supporting team of support
          developers.
        </Typography>
        <Typography variant='body1' sx={typographyBoldStyle}>
          Support Developer | Creatio | 2020 – 2022
        </Typography>
        <Typography variant='body2' sx={marginBottomGlobalStyle}>
          Providing development consultations and support on Creatio products.
          Working on website performance issues.
        </Typography>
        <Typography variant='body1' sx={typographyBoldStyle}>
          Support Specialist | Creatio | 2018 – 2020
        </Typography>
        <Typography variant='body2' sx={marginBottomGlobalStyle}>
          Providing support on Creatio products.
        </Typography>
        <Typography variant='body1' sx={typographyBoldStyle}>
          Support Specialist | UkrNet | 2017 – 2018
        </Typography>
        <Typography variant='body2' sx={marginBottomGlobalStyle}>
          Providing support on UkrNet products. Monitoring the servers state.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={paperStyle}>
        <Typography variant='h6' sx={typographyBoldStyle}>
          Education
        </Typography>
        <Divider sx={marginBottomGlobalStyle} />
        <Typography variant='body1' sx={typographyBoldStyle}>
          Master's degree, Telecommunications Engineering | National Technical
          University of Ukraine 'Kyiv Polytechnic Institute'​ | 2013 – 2018
        </Typography>
        <Typography variant='body2'>
          Focused on satellite, radio, cellar, Interet and TV communications.
        </Typography>
      </Paper>
    </Box>
  );
};

export default CvBody;
