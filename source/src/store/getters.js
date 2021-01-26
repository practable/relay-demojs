export const getStreamsObtained = (state) => state.streamsObtained;
export const getStreams = (state) => state.streams;
export const getStream = (state, what) => {
  return (what) => {
    if (!state.streamsObtained) {
      return {};
    }
    var results = state.streams.filter((obj) => {
      return obj.for == what;
    });
    if (results.length < 1) {
      return {};
    } else {
      return results[0];
    }
  };
};
