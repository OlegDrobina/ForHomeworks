export default {
  items: (state) => state.tasksList.items,
  isLoading: (state) => state.tasksList.isLoading,
  isCompleted: (state) => state.tasksList.isCompleted,
  modifySubjectText: (state) => state.tasksList.modifySubjectText,
};
