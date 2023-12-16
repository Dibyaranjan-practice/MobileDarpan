import React, { useState, useEffect } from "react";
import Card from "./Card";

function Category() {
  const [categories, setCategories] = useState(null);
  const [msg, setMsg] = useState("...Loading...");
  useEffect(() => {
    fetch("http://localhost:5000/api/category/findall")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
        setMsg("Browse By Category");
      })
      .catch((error) => setMsg(error.message));
  }, []);
  return (
    <div className="category_container container py-[5rem]">
      <div className="category_header_container flex justify-between">
        <div className="category_header">{msg}</div>
        <div className="caraousal_icons flex">
          <div className="icon arrow_left lg"></div>
          <div className="icon arrow_right lg"></div>
        </div>
      </div>
      <div className="category_cards flex justify-center lg:justify-between gap-4 mt-8 flex-wrap lg:flex-nowrap">
        {categories &&
          categories.map((card) => (
            <Card
              key={card._id}
              id={card._id}
              title={card.title}
              url={card.imageUrl}
              className="h-[128px] w-[160px]  gap-[0.5rem] rounded-2xl md:w-[135px] lg:w-[160px]"
            />
          ))}
      </div>
    </div>
  );
}

export default Category;
