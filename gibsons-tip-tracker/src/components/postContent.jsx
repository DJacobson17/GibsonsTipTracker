import { createContext, useContext, useMemo, useState } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  const [ccTips, setCcTips] = useState("");
  const [cashTips, setCashTips] = useState("");
  const [busser, setBusser] = useState(20);

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
      handleBusserChange,
    };
  }, [ccTips, cashTips, busser]);

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
