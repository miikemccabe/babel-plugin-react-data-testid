
export const reducer = (state = initialState, action) => {
  return actionHandlers[action.type] ? actionHandlers[action.type](state, action.payload) : state;
};

export default reducer;
