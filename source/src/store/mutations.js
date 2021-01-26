export const deleteStreams = (state) => {
  state.streams = {};
  state.streamsObtained = false;
};
export const setStreams = (state, streams) => {
  state.streams = streams;
  state.streamsObtained = true;
};
