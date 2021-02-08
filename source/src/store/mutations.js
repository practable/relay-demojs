export const deleteStreams = (state) => {
  state.streams = {};
  state.streamsObtained = false;
};

// this might be redundant if we use connectionsMade?
export const incrementConnectionCount = (state) => {
  state.connectionCount += 1;
};

export const incrementConnectionsDropped = (state) => {
  state.connectionsDropped += 1;
};
export const setConnectionIsDropped = (state, isDropped) => {
  state.connectionIsDropped = isDropped;
};
export const setConnectionDroppedAt = (state, when) => {
  state.connectionDroppedAt = when;
};

export const incrementConnectionsMade = (state) => {
  state.connectionsMade += 1;
};

export const setStreams = (state, streams) => {
  state.streams = streams;
  state.streamsObtained = true;
};

export const setVideoBytes = (state, bytes) => {
  state.videoBytes = bytes;
};

export const setLastVideoBytes = (state, bytes) => {
  state.lastVideoBytes = bytes;
};

export const setVideoURL = (state, url) => {
  state.videoURL = url;
  state.videoURLObtained = true;
};

export const deleteVideoURL = (state, url) => {
  state.videoURL = "";
  state.videoURLObtained = false;
};
export const setDataURL = (state, url) => {
  state.dataURL = url;
  state.dataURLObtained = true;
};
export const deleteDataURL = (state, url) => {
  state.dataURL = "";
  state.dataURLObtained = false;
};

export const deleteExpiry = (state) => {
  state.expiry = -1;
  state.expiryObtained = false;
};
export const setExpiry = (state, expiry) => {
  state.expiry = expiry;
  state.expiryObtained = true;
};
