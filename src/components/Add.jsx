import {
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { useState } from "react";
import User from "./User";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ModalBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  // alignItems: "center",
  flexDirection: "column",
  padding: "1.5rem 1rem",
  paddingBottom: "2rem",
  gap: "1rem",
  borderRadius: "15px",
  width: "50%",
  height: "max-content",
}));

const Add = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpenModal(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="gray"
            textAlign="center"
          >
            Create Post
          </Typography>
          <User />
          <TextField
            placeholder="What's on your mind?"
            fullWidth
            multiline
            rows={3}
            variant="standard"
          />
          <Stack direction="row" gap={1}>
            <EmojiEmotions />
            <Image />
            <VideoCameraBack />
            <PersonAdd />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "150px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </ModalBox>
      </StyledModal>
    </>
  );
};
export default Add;
