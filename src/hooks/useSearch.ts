import { useState } from "react";

const useSearch = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput((prevShow) => !prevShow);
  };

  return { showSearchInput, toggleSearchInput };
};

export default useSearch;
