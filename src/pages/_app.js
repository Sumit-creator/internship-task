import '@/styles/globals.css'
// import '../styles/index.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../config/theme";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
);
}
