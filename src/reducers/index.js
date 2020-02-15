const initialState = {
  value: null,
  result: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONVERT":
      return state;
    case "FACTORIATE":
      return state;
    case "CHANGE":
      return state;
    case "LONG":
      return state;
    case "Reverse":
      return state;
  }
};
