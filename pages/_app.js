import { ThirdwebProvider, PayEmbed } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Polygon } from "@thirdweb-dev/chains";
import { Navbar } from "../components/Navbar/Navbar";

// This is the chain your dApp will work on.
const activeChain = Polygon;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      >
      
      {/* Render the navigation menu above each component */}
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
