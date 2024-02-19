import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserCards from "./components/UserCards";

export const App = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <h1>
        <i>USER PROFILE</i>
      </h1>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab onClick={() => navigate("/")} label="Users" value="1" />
              <Tab
                onClick={() => navigate("/adduser")}
                label="Add Users"
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2"></TabPanel>
        </TabContext>
      </Box>

      <Routes>
        <Route path="/" element={<UserCards />} />
        <Route path="/users/edit/:userid" element={<EditUser />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </div>
  );
};
