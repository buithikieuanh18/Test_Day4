import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TaskHeader } from "./TaskHeader";
import { getData, setForm } from "../redux/reducer/taskReducer";

export function TaskView(props) {
  const state = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();

  const dataForm = {
    id: state.itemUpdate.id,
    name: state.itemUpdate.name,
    image: state.itemUpdate.image,
    price: state.itemUpdate.price,
    type: state.itemUpdate.type,
  };

  function handleEdit() {
    dispatch(
      setForm({
        buttonType: "EDIT",
      })
    );
    // console.log(dataForm);
    // lay dl
    dispatch(getData(dataForm));
  }
  return (
    <div>
      <TaskHeader />
      <div className="card mx-auto h-[380px] w-80 mt-[110px] bg-red-50">
        <Link to="/">
          <span className="fa fa-times-circle ml-1"></span>
        </Link>
        <div className="flex justify-center mt-1">
          <div className="panel panel-warning w-[600px]">
            <div className="panel-heading text-center">
              <h3 className="panel-title text-xl font-bold">
                Xem Sản Phẩm <i className="far fa-flushed font-light"></i>
              </h3>
            </div>
            <div className="panel-body ml-[90px]">
              <form>
                <div className="form-group">
                  <label className="flex mb-1 text-black text-lg font-semibold">
                    Name: <p className="font-normal ml-1">{dataForm.name}</p>{" "}
                  </label>

                  {/* <input
                //   ref={inputName}
                  type="text"
                  required
                  className="form-control mb-2"
                /> */}
                  <label className="inline-block mb-2 text-black text-lg font-semibold">
                    Image
                  </label>
                  <div>
                    {
                      <img
                        src={dataForm.image}
                        alt=""
                        width="120px"
                        height="200px"
                        className="ml-[10px]"
                      />
                    }
                  </div>
                  <br></br>
                  <label className="flex mb-1 text-black text-lg font-semibold">
                    Price:
                    <p className="font-normal ml-1">
                      {dataForm.price}{" "}
                      <i className="fas fa-dollar-sign font-medium"></i>
                    </p>
                  </label>
                  <label className="flex mb-1 text-black text-lg font-semibold">
                    Loại:{" "}
                    <p className="font-normal ml-1">
                      {dataForm.type === "1" ? "Type 1" : "Type 2"}
                    </p>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Link to="/form">
          <button
            className="bg-yellow-400 text-gray-700 font-semibold rounded px-3 h-9 ml-[100px]"
            onClick={handleEdit}
          >
            <span className="pr-1 text-black">
              Update
              {/* <i className="fas fa-save text-black ml-1"></i> */}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
