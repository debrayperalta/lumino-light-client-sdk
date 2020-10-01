class StorageImplementation {
  saveLuminoData: SaveLuminoData;
  getLuminoData: GetLuminoData;
}

type SaveLuminoData = (data: DefaultStore) => void;

type GetLuminoData = () => DefaultStore;

type DefaultStore = {
  channelReducer: Record<string, unknown>;
  paymentIds: Record<string, unknown>;
  payments: {
    completed: Record<string, unknown>;
    pending: Record<string, unknown>;
    failed: Record<string, unknown>;
  };
};

type LuminoHandler = {
  sign: (data: unknown) => string;
  offChainSign: (data: unknown) => string;
};

export {
  StorageImplementation,
  DefaultStore,
  LuminoHandler,
  GetLuminoData,
  SaveLuminoData,
};
