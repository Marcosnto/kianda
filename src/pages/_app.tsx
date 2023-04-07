import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const whereAmI = useRouter().asPath;

  const theme = extendTheme({
    colors: {
      red: {
        "50": "#F9EEEB",
        "100": "#F0CEC7",
        "200": "#E6AFA3",
        "300": "#DC907F",
        "400": "#D2705B",
        "500": "#C85137",
        "600": "#A0412C",
        "700": "#783121",
        "800": "#502016",
        "900": "#28100B",
      },
      orange: {
        "50": "#FCEEE9",
        "100": "#F6D1C0",
        "200": "#F0B398",
        "300": "#EB9570",
        "400": "#E57748",
        "500": "#DF5920",
        "600": "#B34819",
        "700": "#863613",
        "800": "#59240D",
        "900": "#2D1206",
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      {/* {whereAmI !== '/' ? <HeadComponent /> : null} */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
