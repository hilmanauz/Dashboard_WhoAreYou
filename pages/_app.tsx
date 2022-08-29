import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      body: {
        fontFamily: "calibri",
        letterSpacing: "2px",
        fontWeight: "500",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "calibrib",
        fontWeight: "500",
      },
      sizes: {
        lg: {
          letterSpacing: "0.5px",
        },
      },
      defaultProps: {
        size: "lg",
      },
    },
    FormLabel: {
      baseStyle: {
        fontFamily: "calibrib",
        letterSpacing: "0.5px",
      },
    },
    Button: {
      baseStyle: {
        fontFamily: "calibrib",
        letterSpacing: "1px",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
