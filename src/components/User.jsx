import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  cursor: "pointer",
}));

const UserName = styled(Typography)(({ theme, usage }) => ({
  display: "block",
  [usage === "nav" && theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const User = ({ usage = "default" }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    } else if (event.key === "Escape") {
      setOpenMenu(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(openMenu);
  useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);

  return (
    <>
      <Userbox
        onClick={handleToggle}
        ref={anchorRef}
        id="composition-button"
        aria-controls={openMenu ? "composition-menu" : undefined}
        aria-expanded={openMenu ? "true" : undefined}
        aria-haspopup="true"
      >
        <Avatar
          sx={{ width: 30, height: 30 }}
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        <UserName usage={usage} variant="span">
          Jan Dee
        </UserName>
      </Userbox>
      <Popper
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorRef.current}
        open={openMenu}
        onClose={(e) => setOpenMenu(false)}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={openMenu}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
export default User;
