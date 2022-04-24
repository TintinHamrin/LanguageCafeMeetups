import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f6bd60",
    },
    secondary: {
      main: "#f7ede2",
    },
  },
  background: {
    paper: "#f5cac3",
    default: "#f28482",
  },
  typography: {
    fontFamily: "'Tapestry', cursive",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
