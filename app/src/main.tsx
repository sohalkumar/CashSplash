import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Provider } from "react-redux";
import store from "@/redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <TonConnectUIProvider manifestUrl="https://sohalkumar.github.io/CashSplash/tonconnect-manifest.json">
        <App />
      </TonConnectUIProvider>
    </Provider>
  </StrictMode>
);
