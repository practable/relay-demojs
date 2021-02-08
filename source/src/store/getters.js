export const getConnectionDroppedAt = (state) => state.connectionDroppedAt;
export const getConnectionIsDropped = (state) => state.connectionIsDropped;
export const getDataURL = (state) => state.dataURL;
export const getDataURLObtained = (state) => state.dataURLObtained;
export const getExpiry = (state) => state.expiry;
export const getExpiryObtained = (state) => state.expiryObtained;
export const getLastVideoCheck = (state) => state.lastVideoCheck;
export const getLastVideoWrite = (state) => state.lastVideoWrite;
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
export const getStreams = (state) => state.streams;
export const getStreamsObtained = (state) => state.streamsObtained;
export const getVideoURL = (state) => state.videoURL;
export const getVideoURLObtained = (state) => state.videoURLObtained;
