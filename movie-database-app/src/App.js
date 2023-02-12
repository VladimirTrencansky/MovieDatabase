import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "Components/Router";
import React from "react";
import "styles.scss";
import SearchProvider from "./Contexts/SearchContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <Router />
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
