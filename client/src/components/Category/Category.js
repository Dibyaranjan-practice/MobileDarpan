import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../utils/slices/categorySlice";

const status = {
  PENDING: "......LOADING....",
  SUCCESS: "Browse by category",
  FAILED: "No category failed",
};

function Category() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const categoryStore = useSelector((store) => store.categoryReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  const leftMoveHandler = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setEndIndex((prev) => (prev > 5 ? prev - 1 : prev));
  };
  const rightMoveHandler = () => {
    setStartIndex((prev) =>
      prev < categoryStore.categories.length - 6 ? prev + 1 : prev
    );
    setEndIndex((prev) =>
      prev < categoryStore.categories.length ? prev + 1 : prev
    );
  };

  return (
    <div className="category_container container py-[5rem]">
      <div className="category_header_container flex justify-between">
        <div className="category_header">{status[categoryStore.status]}</div>
        <div className="caraousal_icons flex">
          <div className="icon arrow_left lg" onClick={leftMoveHandler}></div>
          <div className="icon arrow_right lg" onClick={rightMoveHandler}></div>
        </div>
      </div>
      <div className="category_cards flex justify-center lg:justify-between gap-4 mt-8 flex-wrap lg:flex-nowrap">
        {categoryStore.categories &&
          categoryStore.categories.map(
            (card, index) =>
              index >= startIndex &&
              index <= endIndex && (
                <Card
                  key={card._id}
                  id={card._id}
                  title={card.title}
                  url={card.imageUrl}
                  className="h-[128px] w-[160px]  gap-[0.5rem] rounded-2xl md:w-[135px] lg:w-[160px]"
                />
              )
          )}
      </div>
    </div>
  );
}

export default Category;
