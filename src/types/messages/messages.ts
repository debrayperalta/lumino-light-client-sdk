enum MessageEnvelopeType {
  DELIVERED = "Delivered",
}

enum EnvelopeStateFlow {
  Successful = "LightClientProtocolMessageType.PaymentSuccessful",
  Expired = "LightClientProtocolMessageType.PaymentExpired",
}

enum MessageType {
  DELIVERED = "Delivered",
  PROCESSED = "Processed",
  SECRET_REVEAL = "SecretReveal",
  SECRET_REQUEST = "SecretRequest",
  REVEAL_SECRET = "RevealSecret",
  LOCKED_TRANSFER = "LockedTransfer",
  SECRET = "Secret",
  BALANCE_PROOF = "BalanceProof",
  LOCK_EXPIRED = "LockExpired",
  REFUND_TRANSFER = "RefundTransfer",
  SETTLEMENT_REQUIRED = "SettlementRequiredLightMessage",
}


// type MessageContentType = 


class MessageEnvelope {
  type: MessageEnvelopeType;
  message_type: EnvelopeStateFlow;
  message_content: any;
  message_order: number;
}

type MessageBase = {
  payment_id: BigInteger | string;
  message_order: number;
  type: MessageEnvelopeType;
}


type MessageLockExpired = MessageBase &  {
  signature: string;
  transferred_amount: BigInteger | string;
  locked_amount: BigInteger | string;
  locksroot: string;
  message_identifier: string;
  nonce: number;
  message: LockExpiredMessageContents;
}

type LockExpiredMessageContents = MessageContentCommon & {
    signature: string;
    transferred_amount: string;
    locked_amount: string;
    locksroot: string;
    message_identifier: string;
    nonce: number;
}

class MessageContentCommon {
  type: MessageType;
}

export {
  MessageEnvelopeType,
  MessageBase,
  MessageLockExpired,
  MessageEnvelope,
  EnvelopeStateFlow,
  MessageType,
};
