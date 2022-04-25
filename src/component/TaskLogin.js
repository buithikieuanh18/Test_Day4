import React from "react";
import { Link } from "react-router-dom";

export function TaskLogin() {
  return (
    <div className="login">
      <div className="mt-[100px] block ml-[565px]">
        <div className="block p-6 rounded-lg max-w-sm">
          <form>
            <h1 className="text-5xl text-black text-center mb-5 font-serif font-bold">
              LOGIN
            </h1>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-[#4c6acd]">
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
              <label
                for="exampleInputPassword2"
                className="form-label inline-block mb-2 text-[#4c6acd]"
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
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label className="form-check-label inline-block text-[#4c6acd]">
                  Remember me
                </label>
              </div>
              <Link to="/register">
                <div className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 mr-2">
                  Register
                </div>
              </Link>
            </div>
            <nav>
              <Link to="/">
                <button
                  type="submit"
                  className="
                            w-full px-6 py-2.5 bg-blue-600 text-white
                            font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Sign in
                </button>
              </Link>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
}
