import myData from "../../Resources/data";

const INITIAL_STATE = {
  collections: myData,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
