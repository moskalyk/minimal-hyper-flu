import { v5_callFunction as callFunction$$, v5_registerService as registerService$$, } from '@fluencelabs/js-client';
export function registerHypercoreService() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    registerService$$(args, {
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
    });
}
// Functions
export var appendBatch_script = "\n(xor\n (seq\n  (seq\n   (seq\n    (seq\n     (call %init_peer_id% (\"getDataSrv\" \"-relay-\") [] -relay-)\n     (call %init_peer_id% (\"getDataSrv\" \"peer_id\") [] -peer_id-arg-)\n    )\n    (call %init_peer_id% (\"getDataSrv\" \"payload\") [] -payload-arg-)\n   )\n   (xor\n    (seq\n     (seq\n      (new $-ephemeral-stream-\n       (new #-ephemeral-canon-\n        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)\n       )\n      )\n      (call -peer_id-arg- (\"hypercoreService\" \"appendBatch\") [-payload-arg-] ret)\n     )\n     (new $-ephemeral-stream-\n      (new #-ephemeral-canon-\n       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)\n      )\n     )\n    )\n    (seq\n     (seq\n      (new $-ephemeral-stream-\n       (new #-ephemeral-canon-\n        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)\n       )\n      )\n      (new $-ephemeral-stream-\n       (new #-ephemeral-canon-\n        (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)\n       )\n      )\n     )\n     (fail :error:)\n    )\n   )\n  )\n  (call %init_peer_id% (\"callbackSrv\" \"response\") [ret])\n )\n (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [:error: 0])\n)\n";
export function appendBatch() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return callFunction$$(args, {
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
    }, appendBatch_script);
}
export var transferTo_script = "\n(xor\n (seq\n  (seq\n   (seq\n    (seq\n     (seq\n      (call %init_peer_id% (\"getDataSrv\" \"-relay-\") [] -relay-)\n      (call %init_peer_id% (\"getDataSrv\" \"peer_src\") [] -peer_src-arg-)\n     )\n     (call %init_peer_id% (\"getDataSrv\" \"peer_target\") [] -peer_target-arg-)\n    )\n    (xor\n     (seq\n      (seq\n       (new $-ephemeral-stream-\n        (new #-ephemeral-canon-\n         (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)\n        )\n       )\n       (call -peer_src-arg- (\"hypercoreService\" \"get\") [] ret)\n      )\n      (new $-ephemeral-stream-\n       (new #-ephemeral-canon-\n        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)\n       )\n      )\n     )\n     (seq\n      (seq\n       (new $-ephemeral-stream-\n        (new #-ephemeral-canon-\n         (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)\n        )\n       )\n       (new $-ephemeral-stream-\n        (new #-ephemeral-canon-\n         (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)\n        )\n       )\n      )\n      (fail :error:)\n     )\n    )\n   )\n   (xor\n    (seq\n     (seq\n      (new $-ephemeral-stream-\n       (new #-ephemeral-canon-\n        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)\n       )\n      )\n      (call -peer_target-arg- (\"hypercoreService\" \"appendBatch\") [ret] ret-0)\n     )\n     (new $-ephemeral-stream-\n      (new #-ephemeral-canon-\n       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)\n      )\n     )\n    )\n    (seq\n     (seq\n      (new $-ephemeral-stream-\n       (new #-ephemeral-canon-\n        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)\n       )\n      )\n      (new $-ephemeral-stream-\n       (new #-ephemeral-canon-\n        (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)\n       )\n      )\n     )\n     (fail :error:)\n    )\n   )\n  )\n  (call %init_peer_id% (\"callbackSrv\" \"response\") [ret-0])\n )\n (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [:error: 0])\n)\n";
export function transferTo() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return callFunction$$(args, {
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
    }, transferTo_script);
}
