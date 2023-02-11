import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
        </Box>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
