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
    fontFamily: "'Montserrat', 'sans-serif'",
  },
  breakpoints: {
    values: {
      xs: 820,
      sm: 821,
      md: 900,
    },
  },
});

function MyApp({ Component, pageProps, props }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout p={props}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

export async function getStaticProps() {
  console.log("in app");
  const res = await Meetup.find({});
  console.log(res);

  return {
    props: {
      meetups: res.map((field) => ({
        title: field.title,
        language: field.language,
        location: field.location,
        description: field.description,
      })),
    },
  };
}
