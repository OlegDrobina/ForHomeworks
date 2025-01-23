export default {
  items: (state) => state.tasksList.items,
  isLoading: (state) => state.tasksList.isLoading,
  isCompleted: (state) => state.tasksList.isCompleted,
  modifySubjectText: (state) => state.tasksList.modifySubjectText,
  swapiResponse: (state) => state.swapi.swapiResponse,
  isClearButtonVisible: (state) => state.swapi.isClearButtonVisible,
  isGetInfoButtonDisabled: (state) => state.swapi.isGetInfoButtonDisabled,
};
