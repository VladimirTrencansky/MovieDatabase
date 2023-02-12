import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "Components/Router";
import React from "react";
import SearchProvider from "./Contexts/SearchContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <Box sx={{ flexGrow: 1 }}>
          <Router />
          <ReactQueryDevtools />
        </Box>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
