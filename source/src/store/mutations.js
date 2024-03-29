export const deleteDataURL = (state, url) => {
  state.dataURL = "";
  state.dataURLObtained = false;
};

export const deleteExpiry = (state) => {
  state.expiry = -1;
  state.expiryObtained = false;
};

export const deleteStreams = (state) => {
  state.streams = {};
  state.streamsObtained = false;
};

export const deleteVideoURL = (state, url) => {
  state.videoURL = "";
  state.videoURLObtained = false;
};

export const setConnectionDroppedAt = (state, when) => {
  state.connectionDroppedAt = when;
};

export const setConnectionIsDropped = (state, isDropped) => {
  state.connectionIsDropped = isDropped;
};

export const setDataURL = (state, url) => {
  state.dataURL = url;
  state.dataURLObtained = true;
};

export const setExpiry = (state, expiry) => {
  state.expiry = expiry;
  state.expiryObtained = true;
};

export const setLastConnectionCheck = (state, when) => {
  state.lastConnectionCheck = when;
};
export const setLastDataWrite = (state, when) => {
  state.lastDataWrite = when;
};
export const setLastVideoWrite = (state, when) => {
  state.lastVideoWrite = when;
};

export const setLastMessage = (state, what) => {
  state.lastMessage = what;
};

export const setMessageHistory = (state, what) => {
  state.messageHistory = what;
};

export const setMessageCount = (state, count) => {
  state.messageCount = count;
};

export const setStreams = (state, streams) => {
  state.streams = streams;
  state.streamsObtained = true;
};

export const setVideoURL = (state, url) => {
  state.videoURL = url;
  state.videoURLObtained = true;
};
