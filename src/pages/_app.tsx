import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    colors: {
      orange: {
        "50": "#FAF4EA",
        "100": "#F1DFC5",
        "200": "#E8CBA0",
        "300": "#DFB77B",
        "400": "#D7A256",
        "500": "#CE8E31",
        "600": "#A57227",
        "700": "#7B551E",
        "800": "#523914",
        "900": "#291C0A",
      },
      green: {
        "50": "#F3F7ED",
        "100": "#DDEACD",
        "200": "#C7DCAD",
        "300": "#B1CE8D",
        "400": "#9BC16C",
        "500": "#84B34C",
        "600": "#6A8F3D",
        "700": "#4F6B2E",
        "800": "#35481E",
        "900": "#1A240F",
      },
      yellow: {
        "50": "#FAF4EA",
        "100": "#F1DFC5",
        "200": "#E8CBA0",
        "300": "#DFB77B",
        "400": "#D7A256",
        "500": "#CE8E31",
        "600": "#A57227",
        "700": "#7B551E",
        "800": "#523914",
        "900": "#291C0A",
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </ChakraProvider>
  );
}
