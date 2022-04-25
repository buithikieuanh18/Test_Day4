import React from "react";
import { Link } from "react-router-dom";

export function TaskRegister() {
  return (
    <div className="login">
      <div className="mt-[50px] block ml-[565px]">
        <div className="block p-6 rounded-lg max-w-sm">
          <form>
            <h1 className="text-5xl text-black text-center mb-5 font-mono font-bold">
              REGISTER
            </h1>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-black">
                Username
              </label>
              <input
                type="text"
                className="form-control
                                block w-full px-3 py-1.5 text-base
                                font-normal text-gray-700 bg-white bg-clip-padding
                                border border-solid border-gray-300 rounded
                                transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-black">
                Email
              </label>
              <input
                type="text"
                className="form-control
                                block w-full px-3 py-1.5 text-base
                                font-normal text-gray-700 bg-white bg-clip-padding
                                border border-solid border-gray-300 rounded
                                transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-6">
              <label
                for="exampleInputPassword2"
                className="form-label inline-block mb-2 text-black"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control block
                            w-full px-3 py-1.5 text-base
                            font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded transition focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
              />
            </div>
            <div className="form-group mb-6">
              <label
                for="exampleInputPassword2"
                className="form-label inline-block mb-2 text-black"
              >
                Confirm password
              </label>
              <input
                type="password"
                className="form-control block
                            w-full px-3 py-1.5 text-base
                            font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded transition focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Confirm password"
              />
            </div>
            <div className="flex justify-end items-center mb-6 mr-3">
              <Link to="/login">
                <div className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 mr-2">
                  Login
                </div>
              </Link>
            </div>
            <nav>
              <Link to="/login">
                <button
                  type="submit"
                  className="
                            w-full h-10 px-6 py-2.5 bg-blue-600 text-white
                            font-medium text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Register
                </button>
              </Link>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
}
