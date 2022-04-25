import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addData, updateItem, getData, itemUpdate } from "../redux/reducer/taskReducer";
import { TaskHeader } from "./TaskHeader";

export function TaskForm(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.taskReducer);

  const inputName = useRef(null);
  const inputImage = useRef(null);
  const inputPrice = useRef(null);
  const inputType = useRef(null);
  const [image, setImage] = useState();

  function handlePreviewImage(e) {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    console.log(file);
    setImage(file);
  }

  useEffect(() => {
    if (state.buttonType === "EDIT") {
      inputName.current.value = state.itemUpdate.name;
      // inputImage.current.value = "";
      inputPrice.current.value = state.itemUpdate.price;
      inputType.current.value = state.itemUpdate.type;
    }
  },[]);

  function handleSubmit(e) {
    if (state.buttonType === "ADD") {
      const dataForm = {
        id: (Math.random() * 1000000000).toFixed(0),
        name: inputName.current.value,
        image: image.preview,
        price: inputPrice.current.value,
        type: inputType.current.value,
      };
      dispatch(addData(dataForm));
    } else {
      const dataForm = {
        id: state.itemUpdate.id,
        name: inputName.current.value,
        image: image.preview,
        price: inputPrice.current.value,
        type: inputType.current.value,
      };
      dispatch(updateItem(dataForm));
    }
  }

  const handleCancel = (event) => {
    inputName.current.value = "";
    inputImage.current.value = "";
    inputPrice.current.value = "";
    inputType.current.value = "";
  };

  return (
    <div>
      <TaskHeader />
      <div className="flex mb-4 justify-center mt-[70px]">
        <div className="panel panel-warning w-[600px]">
          <div className="panel-heading">
            <h3 className="panel-title text-xl font-semibold">
              {/* Thêm sản phẩm */}
              {state.buttonType === "ADD"
                ? "Thêm sản phẩm"
                : "Cập nhật và xem sản phẩm"}
              <Link to="/">
                <span className="fa fa-times-circle text-right ml-1"></span>
              </Link>
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label className="mb-1 text-black">Name</label>
                <input
                  ref={inputName}
                  type="text"
                  required
                  className="form-control mb-2"
                />
                <label className="inline-block mb-2 text-black">
                  File Upload
                </label>
                <div>
                  <input
                    ref={inputImage}
                    type="file"
                    className="mb-1"
                    onChange={handlePreviewImage}
                  />
                  {image && (
                    <img
                      src={image.preview}
                      alt=""
                      width="110px"
                      height="110px"
                    />
                  )}
                </div>
                <label className="mb-1 text-black">Price</label>
                <input
                  ref={inputPrice}
                  type="text"
                  className="form-control mb-2"
                  required
                />
                <label className="mb-1 text-black">Loại</label>
                <select
                  ref={inputType}
                  className="form-select mb-2"
                  aria-label="Default select example"
                >
                  <option value="1">Type 1</option>
                  <option value="0">Type 2</option>
                </select>

                <br />
                <div className="text-center">
                  <Link to="/">
                    <button
                      onClick={handleSubmit}
                      className="bg-yellow-400 text-gray-700 font-semibold rounded px-3 inline-flex items-center mr-2 h-9"
                    >
                      <span className="pr-1 text-black">
                        Save
                        <i className="fas fa-save text-black ml-1"></i>
                      </span>
                    </button>
                  </Link>

                  <button
                    className="bg-red-400 text-black font-semibold px-3 rounded inline-flex items-center h-9"
                    onClick={handleCancel}
                  >
                    <span className="pr-1">Cancel</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
