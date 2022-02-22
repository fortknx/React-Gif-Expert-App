import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["Samurai X"]);
  //   const handleAdd = () => {
  //     setCategories([...categories, 'HXH'])
  //     // setCategories(cats => [...cats, 'HXH']);
  //   };

  return (
    <>
      <h2> GifExpertApp </h2>
      <AddCategory setCategories={setCategories} />
      {/* <AddCategory /> */}
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
