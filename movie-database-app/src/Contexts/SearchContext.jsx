import React, { useContext, useState } from "react";

const SearchContext = React.createContext(null);
const SearchUpdateContext = React.createContext(null);

export function useSearchContext() {
  return useContext(SearchContext);
}

export function useSerchContextUpdate() {
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
