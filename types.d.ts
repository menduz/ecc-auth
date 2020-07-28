export type Keys = {
  ephemeralPublicKey: Uint8Array;
  ephemeralPrivateKey: Uint8Array;
};

export type Signature = {
  signature: Uint8Array;
  recid: number;
};