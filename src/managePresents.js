const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  switch (action.type) {
    case "presents/increase":
      return { type: state.count +1 };
    case "presents/decrease":
      return { type: state.count -1 };
    default:
      return state;
  }
}
