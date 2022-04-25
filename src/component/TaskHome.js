import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskAdd } from "./TaskAdd";
import { TaskFooter } from "./TaskFooter";
import { TaskHeader } from "./TaskHeader";
import { TaskPagination } from "./TaskPagination";
import { TaskProduct } from "./TaskProduct";
import { TaskSearch } from "./TaskSearch";
import { TaskSort } from "./TaskSort";

export function TaskHome() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.taskReducer);

  return (
    <div className="home mx-auto">
      <div className="min-h-screen flex flex-col">
        {/* header */}
        <TaskHeader />

        {/* buttons */}
        <div className="flex mb-4 justify-center mt-5">
          {/* search */}
          <TaskSearch />
          {/* sort */}
          <TaskSort />
          {/* add btn */}
          <TaskAdd />
        </div>

        {/* list data */}
        <section className="ml-10 mr-10">
          <div className=" px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {state.currentData &&
                state.currentData.map((item, index) => {
                  return <TaskProduct item={item} key={index} index={index} />;
                })}
            </div>
          </div>
        </section>

        {/* Pagination */}
        <TaskPagination />

        {/* footer */}
        <TaskFooter />
      </div>
    </div>
  );
}
