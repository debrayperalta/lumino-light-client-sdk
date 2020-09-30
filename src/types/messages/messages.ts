enum MessageType {
  DELIVERED = "Delivered",
}

enum EnvelopeStateFlow {
    Successful = "LightClientProtocolMessageType.PaymentSuccessful",
    Expired = "LightClientProtocolMessageType.PaymentExpired"
}

class MessageEnvelope {
  type: MessageType;
  message_type: EnvelopeStateFlow;
}

export { MessageType, MessageEnvelope, EnvelopeStateFlow };
