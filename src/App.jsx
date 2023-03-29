import "yet-another-react-lightbox/styles.css";
import Blog from "./components/Blog";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Blog />
    </ThemeProvider>
  );
}
