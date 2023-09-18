import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paleteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paleteType,
      background: {
        default: paleteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}
