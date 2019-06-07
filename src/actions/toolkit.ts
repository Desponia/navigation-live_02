import uuid from "uuid/v4";

export const createAsyncPayload = (payload = {}, prefix = "") => ({
  ...payload,
  asyncTaskId: `${prefix}${uuid}`
});

export const isAsyncAction = action => !!action.payload.asyncTaskId;
export const getAsyncId = action => action.payload.asyncTaskId;
