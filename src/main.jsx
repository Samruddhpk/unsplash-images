import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

//only developement build tools wont work in production build applications
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* opens the dev tools - true/false - for default open/close */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </AppProvider>
);
