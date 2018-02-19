//action creator function that return specific action
export const selectLibrary = (libraryId) => {
  return {
    //specific action for select a library
    type: 'select_library',
    payload: libraryId
  };
};
