import { ThemeProvider, createTheme } from "@mui/material";
import AppLayout from "./components/AppLayout";
import { AppProvider, useApp } from "./context/AppContext";
// import Sample from "./components/sample";

function App() {
  const { isDarkMode } = useApp();

  const mode = isDarkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#4338ca",
        light: "#e0e7ff",
        dark: "#6366f1",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppLayout />;
    </ThemeProvider>
  );
}

export default App;
