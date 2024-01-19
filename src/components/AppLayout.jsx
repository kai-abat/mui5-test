import Feed from "./Feed";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import { Box, Stack } from "@mui/material";
import Add from "./Add";

const AppLayout = () => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Add />
    </Box>
  );
};
export default AppLayout;
