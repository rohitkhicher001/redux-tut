const initialState = 0;

const changeNumber = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "SQUARE") {
    return state * state;
  } else {
    return state;
  }
};
export default changeNumber;
