export const CHANNEL_OPENED = "CHANNEL_OPENED";
export const CHANNEL_AWAITING_NOTIFICATION = "CHANNEL_AWAITING_NOTIFICATION";
export const CHANNEL_WAITING_FOR_CLOSE = "CHANNEL_WAITING_FOR_CLOSE";
export const CHANNEL_CLOSED = "CHANNEL_CLOSED";
export const CHANNEL_WAITING_FOR_SETTLEMENT = "CHANNEL_WAITING_FOR_SETTLEMENT";
export const CHANNEL_SETTLED = "CHANNEL_SETTLED";
export const CHANNEL_WAITING_OPENING = "CHANNEL_WAITING_OPENING";
export const CHANNEL_UNLOCKED = "CHANNEL_UNLOCKED";

export const SDK_CHANNEL_STATUS = {
  CHANNEL_OPENED: CHANNEL_OPENED,
  CHANNEL_AWAITING_NOTIFICATION: CHANNEL_AWAITING_NOTIFICATION,
  CHANNEL_WAITING_FOR_CLOSE: CHANNEL_WAITING_FOR_CLOSE,
  CHANNEL_CLOSED: CHANNEL_CLOSED,
  CHANNEL_WAITING_OPENING: CHANNEL_WAITING_OPENING,
  CHANNEL_SETTLED: CHANNEL_SETTLED,
};

export const NON_OPENABLE_STATES = {
  CHANNEL_OPENED,
  CHANNEL_AWAITING_NOTIFICATION,
  CHANNEL_WAITING_OPENING,
  CHANNEL_CLOSED,
};
