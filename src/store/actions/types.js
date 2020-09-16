// Channel actions
export const OPEN_CHANNEL = "OPEN_CHANNEL";
export const OPEN_CHANNEL_VOTE = "OPEN_CHANNEL_VOTE";
export const REQUEST_CHANNEL_CLOSE = "REQUEST_CHANNEL_CLOSE";
export const SET_CHANNEL_CLOSED = "SET_CHANNEL_CLOSED";
export const SET_CHANNEL_SETTLED = "SET_CHANNEL_SETTLED";
export const CHANGE_CHANNEL_BALANCE = "CHANGE_CHANNEL_BALANCE";
export const DELETE_CHANNEL_FROM_SDK = "DELETE_CHANNEL_FROM_SDK";
export const CLOSE_CHANNEL_VOTE = "CLOSE_CHANNEL_VOTE";
export const ADD_CHANNEL_WAITING_FOR_OPENING =
  "ADD_CHANNEL_WAITING_FOR_OPENING";
export const SET_CHANNEL_AWAITING_CLOSE = "SET_CHANNEL_AWAITING_CLOSE";

// Deposit actions

export const NEW_DEPOSIT = "NEW_DEPOSIT";

// Payment actions

export const CREATE_PAYMENT = "CREATE_PAYMENT";
export const ADD_PENDING_PAYMENT_MESSAGE = "ADD_PENDING_PAYMENT_MESSAGE";
export const DELETE_ALL_PENDING_PAYMENTS = "DELETE_ALL_PENDING_PAYMENTS";
export const SET_PAYMENT_SECRET = "SET_PAYMENT_SECRET";
export const SET_PAYMENT_COMPLETE = "SET_PAYMENT_COMPLETE";
export const RECEIVED_PAYMENT = "RECEIVED_PAYMENT";
export const SET_SECRET_MESSAGE_ID = "SET_SECRET_MESSAGE_ID";
export const UPDATE_NON_CLOSING_BP = "UPDATE_NON_CLOSING_BP";
export const SET_LATEST_INTERNAL_MSG_ID = "SET_LATEST_INTERNAL_MSG_ID";
export const PAYMENT_CREATION_ERROR = "PAYMENT_CREATION_ERROR";
export const SET_PAYMENT_FAILED = "SET_PAYMENT_FAILED";
export const PUT_LOCK_EXPIRED = "PUT_LOCK_EXPIRED";
export const ADD_EXPIRED_PAYMENT_MESSAGE = "ADD_EXPIRED_PAYMENT_MESSAGE";
export const STORE_REFUND_TRANSFER = "STORE_REFUND_TRANSFER";
export const ADD_REFUNDED_PAYMENT_MESSAGE = "ADD_REFUNDED_PAYMENT_MESSAGE";
export const REGISTERING_ON_CHAIN_SECRET = "REGISTERING_ON_CHAIN_SECRET";
export const REGISTERED_ON_CHAIN_SECRET = "REGISTERED_ON_CHAIN_SECRET";

// Polling actions

export const MESSAGE_POLLING_START = "MESSAGE_POLLING_START";
export const MESSAGE_POLLING_STOP = "MESSAGE_POLLING_STOP";
export const MESSAGE_POLLING_ERROR = "MESSAGE_POLLING_ERROR";
export const MESSAGE_POLLING = "MESSAGE_POLLING";
export const MESSAGE_SENT = "MESSAGE_SENT";
export const CHANGE_PAYMENT_POLLING_TIME = "CHANGE_PAYMENT_POLLING_TIME";

// Onboarding Actions

export const STORE_API_KEY = "STORE_API_KEY";
export const REQUEST_CLIENT_ONBOARDING = "REQUEST_CLIENT_ONBOARDING";
export const CLIENT_ONBOARDING_SUCCESS = "CLIENT_ONBOARDING_SUCCESS";
export const CLIENT_ONBOARDING_FAILURE = "CLIENT_ONBOARDING_FAILURE";
export const SET_CLIENT_ADDRESS = "SET_CLIENT_ADDRESS";

// Notifier Actions

export const NEW_NOTIFIER = "NEW_NOTIFIER";
export const REMOVE_NOTIFIER = "REMOVE_NOTIFIER";

export const SET_NOTIFIER_API_KEY = "SET_NOTIFIER_API_KEY";
export const SUBSCRIBED_TO_NEW_TOPIC = "SUBSCRIBED_TO_NEW_TOPIC";
export const UNSUBSCRIBE_FROM_TOPIC = "UNSUBSCRIBE_FROM_TOPIC";
export const SET_LAST_NOTIFICATION_ID = "SET_LAST_NOTIFICATION_ID";
export const START_NOTIFICATIONS_POLLING = "START_NOTIFICATIONS_POLLING";
export const STOP_NOTIFICATIONS_POLLING = "STOP_NOTIFICATIONS_POLLING";
export const NOTIFICATIONS_POLLING_ERROR = "NOTIFICATIONS_POLLING_ERROR";
export const NOTIFICATIONS_POLLING = "NOTIFICATIONS_POLLING";

// Token Actions

export const ADD_NEW_TOKEN = "ADD_NEW_TOKEN";
export const ADD_NEW_TOKEN_NAME_SYMBOL = "ADD_NEW_TOKEN_NAME_SYMBOL";

// Rns Actions

export const SET_REGISTRY_ADDRESS = "SET_REGISTRY_ADDRESS";
