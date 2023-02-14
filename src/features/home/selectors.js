export const getTestFunctionStatus = state =>
  state.homeReducer.testFunctionStatus;
export const getTestApiEndpointData = state =>
  state.homeReducer.testEndpointData || [];

export const getTransactionList = state =>
  state.homeReducer.transactionList || [];
