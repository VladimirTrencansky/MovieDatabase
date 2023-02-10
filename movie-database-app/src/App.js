import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import Router from "Router";
import NavigationBar from "./NavigationBar";
import SearchProvider from "./SearchContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <ReactQueryDevtools />
        <NavigationBar />
        <Router />
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
