import { Box, Button, styled } from "@mui/material";
import { Settings } from "@mui/icons-material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "3rem",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
}));

const BlueButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const Sample = () => {
  return (
    <>
      <StyledBox>
        <Button variant="text">Text</Button>
        <Button startIcon={<Settings />} variant="contained">
          Contained
        </Button>
        <Button variant="outlined">Outlined</Button>
      </StyledBox>
      <StyledBox>
        <BlueButton startIcon={<Settings />} variant="contained">
          Contained
        </BlueButton>
      </StyledBox>
    </>
  );
};

export default Sample;
