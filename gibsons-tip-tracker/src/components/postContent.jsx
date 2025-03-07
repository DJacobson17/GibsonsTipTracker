import { createContext, useContext, useMemo, useState } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  const [ccTips, setCcTips] = useState("");
  const [cashTips, setCashTips] = useState("");
  const [busser, setBusser] = useState(20);
  const [solo, setSolo] = useState(false);

  const handleBusserChange = (event) => {
    setBusser(event.target.value);
  };

  const value = useMemo(() => {
    return {
      ccTips,
      setCcTips,
      cashTips,
      setCashTips,
      busser,
      setBusser,
      solo,
      setSolo,
      handleBusserChange,
    };
  }, [ccTips, cashTips, busser, solo]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePost() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
}

export { PostProvider, usePost };
