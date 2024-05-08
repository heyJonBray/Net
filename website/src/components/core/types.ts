export type SanitizedOnchainMessage = {
  sender: string;
  timestamp: number;
  data: string;
  text: string;
  app: string;
  topic: string;
};

export type MessageRange = { startIndex: number; endIndex: number };

export type NetAppContext = { appAddress: string; controlsState: any };

type ContractReadArgsResult = {
  totalMessages: any;
  messages: (range: MessageRange) => any;
};

type ContractWriteArgsResult = {
  sendMessage: { abi: any; functionName: string; to: string; args: any[] };
};

export type GetContractReadArgsFunction = (
  params: NetAppContext
) => ContractReadArgsResult;

export type GetContractWriteArgsFunction = (params: {
  appConfig: NetAppContext;
  messageText: string;
}) => ContractWriteArgsResult;

export type AppComponentsConfig = {
  provider: any;
  controls: any;
  messageRenderer: any;
  getContractReadArgsFunction: GetContractReadArgsFunction;
  getContractWriteArgsFunction: GetContractWriteArgsFunction;
};
