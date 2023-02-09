import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "Router";
import NavigationBar from "./NavigationBar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationBar />
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
