"use client";
import { useState, createContext, useContext } from "react";

const CategoryContext = createContext();

export default function CategoryContextProvider({ children }) {
  const [category, setCategory] = useState("");
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  return useContext(CategoryContext);
}
