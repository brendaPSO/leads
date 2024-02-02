import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardInvited from "./CardInvited";
import CardAccepted from "./CardAccepted";
import { AppBar, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

interface Leads {
  jobId: number;
  accepted: boolean;
  firstName: string;
  lastName: string;
  suburb: string;
  category: string;
  descriptionJob: string;
  price: number;
  email: string;
  phoneNumber: string;
  createdAt: string;
  deletedAt: string;
}

type LeadsList = Leads[];

interface BasicTabsProps {
  leadsData: LeadsList;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const BasicTabs : React.FC<BasicTabsProps> = ({ leadsData }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 1000 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Invited" {...a11yProps(0)} />
          <Tab label="Accepted" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid item xs={12}>
          {leadsData.map(
            (i) =>
              !i.accepted && i.deletedAt == null && (
                <CardInvited
                  key={i.jobId}
                  jobId={i.jobId}
                  firstName={i.firstName}
                  suburb={i.suburb}
                  category={i.category}
                  descriptionJob={i.descriptionJob}
                  price={i.price}
                  createdAt={i.createdAt}
                />
              )
          )}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid item xs={12}>
          {leadsData.map(
            (i) => 
            i.accepted && i.deletedAt == null &&(
            <CardAccepted
              key={i.jobId}
              jobId={i.jobId}
              firstName={i.firstName}
              lastName={i.lastName}
              suburb={i.suburb}
              category={i.category}
              descriptionJob={i.descriptionJob}
              price={i.price}
              email={i.email}
              phoneNumber={i.phoneNumber}
              createdAt={i.createdAt}
            />
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;