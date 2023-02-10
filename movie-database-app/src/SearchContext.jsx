import React, { useContext, useState } from "react";

const SearchContext = React.createContext();
const SearchUpdateContext = React.createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function useSerchUpdate() {
  return useContext(SearchUpdateContext);
}

export default function SearchProvider({ children }) {
  const [search, setSearch] = useState();

  return (
    <SearchContext.Provider value={search}>
      <SearchUpdateContext.Provider value={setSearch}>
        {children}
      </SearchUpdateContext.Provider>
    </SearchContext.Provider>
  );
}
