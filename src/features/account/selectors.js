export const getTestFunctionStatus = state =>
  state.homeReducer.testFunctionStatus;
export const getTestApiEndpointData = state =>
  state.homeReducer.testEndpointData || [];
