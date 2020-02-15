const initialState = {
  result: ""
};

const reducer = (state = initialState, action) => {
  var newState = { ...state };

  switch (action.type) {
    case "CONVERT":
      var time = action.payload;
      var hours = time / 60;
      var minutes = time % 60;
      newState.result = `${hours}:${minutes}`;
      return newState;
    case "FACTORIATE":
      return newState;
    case "CHANGE":
      return newState;
    case "LONG":
      return newState;
    case "REVERSE":
      return newState;
  }
};

export default reducer;
