import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, } from "react-redux";
import { setForm } from "../redux/reducer/taskReducer";

export function TaskAdd() {
  const dispatch = useDispatch();

  return (
    <Link to="/form">
      <button
        onClick={() => dispatch(setForm({ buttonType: "ADD" }))}
        className="ml-[62px] w-[100px] h-[40px] bg-blue-300 text-gray-800 
        font-semibold px-4 border border-gray-400 rounded text-center"
      >
        Add
      </button>
    </Link>
  );
}
