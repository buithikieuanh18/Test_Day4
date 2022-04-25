import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openForm: false,
  currentData: JSON.parse(localStorage.getItem("data")) || [],
  defaultData: JSON.parse(localStorage.getItem("data")) || [],
  itemView: "",
  buttonType: "ADD",
  itemUpdate: {},
};

export const taskReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.openForm = action.payload.openForm;
      state.buttonType = action.payload.buttonType;
    },

    addData: (state, action) => {
      const currentState = JSON.parse(JSON.stringify(state));
      const newData = action.payload;
      state.currentData = [...currentState.defaultData, newData];
      state.defaultData = state.currentData;
      localStorage.setItem("data", JSON.stringify(state.defaultData));
      // console.log("add data", state.currentData);
    },

    getData: (state, action) => {
      // const item = action.payload
      // console.log("item view: ", item);
      state.itemUpdate = action.payload;
      // console.log("===",action.payload);
    },

    updateItem: (state, action) => {
      const newData = action.payload;
      const defaultData = JSON.parse(localStorage.getItem("data")) || [];
      const newList = defaultData;
      const index = defaultData.findIndex((e) => e.id == newData.id);
      newList[index] = newData;
      state.currentData = newList;
      localStorage.setItem("data", JSON.stringify(state.currentData));
    },

    sortDataAZ: (state, action) => {
      const dataSort = action.payload;
      const newList = dataSort.sort(function(a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
      });
      state.currentData = [...newList];
    },
    sortDataZA: (state, action) => {
      const dataSort = action.payload;
      const newList = dataSort.sort(function(a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x > y) {
          return -1;
        }
      });
      state.currentData = [...newList];
    },
    // sortType1: (state, action) => {
    //   const dataSort = action.payload;
    //   const newList = dataSort.sort(function(a, b) {
    //     let x = a.type.toLowerCase();
    //     if (x === "1") {
    //       return -1;
    //     }
    //   });
    //   state.currentData = [...newList];
    // },
    // sortType0: (state, action) => {
    //   const dataSort = action.payload;
    //   const newList = dataSort.sort(function(a, b) {
    //     let x = a.type.toLowerCase();
    //     if (x === "0") {
    //       return -1;
    //     }
    //   });
    //   state.currentData = [...newList];
    // },
    sortPriceIncrease: (state, action) => {
      const dataSort = action.payload;
      const newList = dataSort.sort(function(a, b) {
        let x = a.price.toLowerCase();
        let y = b.price.toLowerCase();
        if (x < y) {
          return -1;
        }
      });
      state.currentData = [...newList];
    },
    sortPriceDecrease: (state, action) => {
      const dataSort = action.payload;
      const newList = dataSort.sort(function(a, b) {
        let x = a.price.toLowerCase();
        let y = b.price.toLowerCase();
        if (x > y) {
          return -1;
        }
      });
      state.currentData = [...newList];
    },

    searchData: (state, action) => {
      // const defaultData = JSON.parse(localStorage.getItem("data")) || [];
      const searchName = state.defaultData.filter((item) =>
        item.name.includes(action.payload)
      );
      // console.log(defaultData);
      // console.log(searchName);
      state.currentData = [...searchName];
      // console.log(state.data);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setForm,
  addData,
  getData,
  viewItem,
  itemUpdate,
  updateItem,
  searchData,
  sortDataAZ,
  sortDataZA,
  // sortType1,
  // sortType0,
  sortPriceIncrease,
  sortPriceDecrease
} = taskReducer.actions;

export default taskReducer.reducer;
