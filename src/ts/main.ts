/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.12.0
 * @fluencelabs/aqua-to-js version: 0.1.0
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, CallParams as CallParams$$ } from '@fluencelabs/js-client';

import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$,
} from '@fluencelabs/js-client';

// Services
export interface HypercoreServiceDef {
    appendBatch: (payloads: { content: string; }[], callParams: CallParams$$<'payloads'>) => { content: string; }[] | Promise<{ content: string; }[]>;
    get: (callParams: CallParams$$<null>) => { content: string; }[] | Promise<{ content: string; }[]>;
}
export function registerHypercoreService(service: HypercoreServiceDef): void;
export function registerHypercoreService(serviceId: string, service: HypercoreServiceDef): void;
export function registerHypercoreService(peer: IFluenceClient$$, service: HypercoreServiceDef): void;
export function registerHypercoreService(peer: IFluenceClient$$, serviceId: string, service: HypercoreServiceDef): void;
export function registerHypercoreService(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "hypercoreService",
    "functions": {
        "fields": {
            "appendBatch": {
                "domain": {
                    "fields": {
                        "payloads": {
                            "type": {
                                "name": "Payload",
                                "fields": {
                                    "content": {
                                        "name": "string",
                                        "tag": "scalar"
                                    }
                                },
                                "tag": "struct"
                            },
                            "tag": "array"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "type": {
                                "name": "Payload",
                                "fields": {
                                    "content": {
                                        "name": "string",
                                        "tag": "scalar"
                                    }
                                },
                                "tag": "struct"
                            },
                            "tag": "array"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "get": {
                "domain": {
                    "tag": "nil"
                },
                "codomain": {
                    "items": [
                        {
                            "type": {
                                "name": "Payload",
                                "fields": {
                                    "content": {
                                        "name": "string",
                                        "tag": "scalar"
                                    }
                                },
                                "tag": "struct"
                            },
                            "tag": "array"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}


// Functions
export const appendBatch_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
     (call %init_peer_id% ("getDataSrv" "peer_id") [] -peer_id-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "payload") [] -payload-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer_id-arg- ("hypercoreService" "appendBatch") [-payload-arg-] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
     )
     (fail :error:)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function appendBatch(
    peer_id: string,
    payload: { content: string; }[],
    config?: {ttl?: number}
): Promise<{ content: string; }[]>;

export function appendBatch(
    peer: IFluenceClient$$,
    peer_id: string,
    payload: { content: string; }[],
    config?: {ttl?: number}
): Promise<{ content: string; }[]>;

export function appendBatch(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "appendBatch",
    "arrow": {
        "domain": {
            "fields": {
                "peer_id": {
                    "name": "string",
                    "tag": "scalar"
                },
                "payload": {
                    "type": {
                        "name": "Payload",
                        "fields": {
                            "content": {
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Payload",
                        "fields": {
                            "content": {
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        appendBatch_script
    );
}

export const getCore_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "peer_id") [] -peer_id-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer_id-arg- ("hypercoreService" "get") [] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
     )
     (fail :error:)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function getCore(
    peer_id: string,
    config?: {ttl?: number}
): Promise<{ content: string; }[]>;

export function getCore(
    peer: IFluenceClient$$,
    peer_id: string,
    config?: {ttl?: number}
): Promise<{ content: string; }[]>;

export function getCore(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "getCore",
    "arrow": {
        "domain": {
            "fields": {
                "peer_id": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Payload",
                        "fields": {
                            "content": {
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        getCore_script
    );
}

export const transferTo_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
      (call %init_peer_id% ("getDataSrv" "peer_src") [] -peer_src-arg-)
     )
     (call %init_peer_id% ("getDataSrv" "peer_target") [] -peer_target-arg-)
    )
    (xor
     (seq
      (seq
       (new $-ephemeral-stream-
        (new #-ephemeral-canon-
         (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
        )
       )
       (call -peer_src-arg- ("hypercoreService" "get") [] ret)
      )
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
     )
     (seq
      (seq
       (new $-ephemeral-stream-
        (new #-ephemeral-canon-
         (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
        )
       )
       (new $-ephemeral-stream-
        (new #-ephemeral-canon-
         (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
        )
       )
      )
      (fail :error:)
     )
    )
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer_target-arg- ("hypercoreService" "appendBatch") [ret] ret-0)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
     )
     (fail :error:)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret-0])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function transferTo(
    peer_src: string,
    peer_target: string,
    config?: {ttl?: number}
): Promise<{ content: string; }[]>;

export function transferTo(
    peer: IFluenceClient$$,
    peer_src: string,
    peer_target: string,
    config?: {ttl?: number}
): Promise<{ content: string; }[]>;

export function transferTo(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "transferTo",
    "arrow": {
        "domain": {
            "fields": {
                "peer_src": {
                    "name": "string",
                    "tag": "scalar"
                },
                "peer_target": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Payload",
                        "fields": {
                            "content": {
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        transferTo_script
    );
}
