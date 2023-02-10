import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Router from "Router";
import SearchProvider from "./SearchContext";

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
