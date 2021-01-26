export const deleteStreams = (state) => {
  state.streams = {};
  state.streamsObtained = false;
};
export const setStreams = (state, streams) => {
  state.streams = streams;
  state.streamsObtained = true;
};
export const setVideoURL = (state, url) => {
  state.videoURL = url;
  state.videoURLObtained = true;
};

export const deleteVideoURL = (state, url) => {
  state.videoURL = "";
  state.videoURLObtained = false;
};
