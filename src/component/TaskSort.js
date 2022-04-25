import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sortDataAZ,
  sortDataZA,
  sortType1,
  sortType0,
  sortPriceIncrease,
  sortPriceDecrease
} from "../redux/reducer/taskReducer";

export function TaskSort() {
  const state = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();
  const [...dataSort] = state.currentData;

  function handleSortAZ(event) {
    event.preventDefault();
    dispatch(sortDataAZ(dataSort));
  }
  function handleSortZA(event) {
    event.preventDefault();
    dispatch(sortDataZA(dataSort));
  }
  // const handleSortType1 = (event) => {
  //   event.preventDefault();
  //   dispatch(sortType1(dataSort));
  // };
  // const handleSortType0 = (event) => {
  //   event.preventDefault();
  //   dispatch(sortType0(dataSort));
  // };
  function handlePriceIncrease(event) {
    event.preventDefault();
    dispatch(sortPriceIncrease(dataSort));
  }
  function handlePriceDecrease(event) {
    event.preventDefault();
    dispatch(sortPriceDecrease(dataSort));
  }
  return (
    // sort data
    <div className="flex w-[50px] ml-[250px]">
      <div className="dropdown inline-block relative">
        <button className="text-center bg-orange-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex">
          <span className="mr-1 flex">
            Sort
            <i className="fas fa-sort-down ml-2"></i>
          </span>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
          <li>
            <a
              className="rounded-t hover:bg-gray-100 py-1 px-4 block whitespace-no-wrap"
              href=""
              onClick={handleSortAZ}
            >
              Sort A-Z
            </a>
          </li>
          <li>
            <a
              className="rounded-t hover:bg-gray-100 py-1 px-4 block whitespace-no-wrap"
              onClick={handleSortZA}
              href
            >
              Sort Z-A
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a
              className="rounded-t hover:bg-gray-100 py-1 px-4 block whitespace-no-wrap"
              href=""
              onClick={handlePriceIncrease}
            >
              Price Increase
            </a>
          </li>
          <li>
            <a
              className="rounded-t hover:bg-gray-100 py-1 px-4 block whitespace-no-wrap"
              onClick={handlePriceDecrease}
              href
            >
              Price Decrease
            </a>
          </li>
          {/* <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a
              className="rounded-b hover:bg-gray-100 py-1 px-4 block whitespace-no-wrap"
              onClick={handleSortType1}
              href
            >
              Type 1
            </a>
          </li>
          <li>
            <a
              className="rounded-b hover:bg-gray-100 py-1 px-4 block whitespace-no-wrap"
              href=""
              onClick={handleSortType0}
            >
              Type 2
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
