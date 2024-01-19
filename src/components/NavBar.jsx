import { Pets, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import User from "./User";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const Logo = styled(Pets)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "block",
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const UserNav = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "0.5rem",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <StyledTypography variant="h6">LAMA DEV</StyledTypography>
        <Logo />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <UserNav>
          <Icons>
            <Badge badgeContent={4} color="primary">
              <Mail color="action" />
            </Badge>
            <Badge badgeContent={2} color="primary">
              <Notifications color="action" />
            </Badge>
          </Icons>
          <User usage="nav" />
        </UserNav>
        {/* <User usage="nav" isNoUserName={false} /> */}
      </StyledToolbar>
    </AppBar>
  );
};
export default NavBar;
