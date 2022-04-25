import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData, viewItem } from "../redux/reducer/taskReducer";

export function TaskProduct(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.taskReducer);

  function handleView() {
    dispatch(getData(props.item));
    dispatch(viewItem(props.item));
  }

  return (
    // list data
    <div className="col mb-5">
      <div className="card h-90">
        <img
          className="card-img h-64 w-80 my-auto mx-auto"
          src={props.item.image}
          // src={require("../image/5dd250672bdc5-tranh-treo-tuong-6242-7740-1592128765.jpg")}
          alt="..."
        />
        <div className="card-body h-16">
          <div className="text-center">
            <h5 className="fw-bolder">{props.item.name}</h5>
            <p className="fw-bold">
              {props.item.price}
              <i className="fas fa-dollar-sign ml-[2px]"></i>
            </p>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent justify-center flex">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto mr-2" href="#">
              {/* Add to cart  */}
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>

          {/* view product */}
          <div className="text-center">
            <Link to="/view">
              <button
                onClick={handleView}
                className="btn btn-outline-dark mt-auto"
                type="button"
                data-modal-toggle="defaultModal"
              >
                {/* View */}
                <i className="fas fa-eye text-green-500"></i>
              </button>
            </Link>
          </div>
          {/* like product */}
          <div className="text-center ml-2">
            <Link to="/view">
              <button
                onClick={handleView}
                className="btn btn-outline-dark mt-auto"
                type="button"
                data-modal-toggle="defaultModal"
              >
                {/* Like */}
                <i className="fas fa-heart text-red-600"></i>
              </button>
            </Link>
          </div>
          {/* end like product */}
        </div>
      </div>
    </div>
  );
}
