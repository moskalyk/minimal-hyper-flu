var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import dotenv from 'dotenv';
dotenv.config();
import { registerHypercoreService, appendBatch } from './main.js';
import { Fluence, kras } from '@fluencelabs/js-client';
var nodes = [
    {
        "peerId": "12D3KooWJxwSHuLFdUy361ykckeVnJzXfXBSvssrmoXJfaaK8Rk2",
        "multiaddr": "/ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWJxwSHuLFdUy361ykckeVnJzXfXBSvssrmoXJfaaK8Rk2"
    }
    // {
    //   "peerId": "12D3KooWBCAWAGNMfqaBG1kUv49dkK8wSNeiTfGubLLjGQaFBf6z",
    //   "multiaddr": "/ip4/127.0.0.1/tcp/9992/ws/p2p/12D3KooWBCAWAGNMfqaBG1kUv49dkK8wSNeiTfGubLLjGQaFBf6z"
    // },
    // {
    //   "peerId": "12D3KooWEqbHHE1bzk1nJ8LE2Wbm2UaycYjRsSB4CTxDS342Boip",
    //   "multiaddr": "/ip4/127.0.0.1/tcp/9993/ws/p2p/12D3KooWEqbHHE1bzk1nJ8LE2Wbm2UaycYjRsSB4CTxDS342Boip"
    // }
];
;
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, list, wait, res;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: 
            // await Fluence.connect(nodes[0].multiaddr)
            return [4 /*yield*/, Fluence.connect(kras[0], { debug: { printParticleId: true }, keyPair: { type: 'Ed25519', source: new Uint8Array([
                            Number(process.env.PKEY), 49, 199, 96, 63, 249, 142, 14,
                            234, 127, 58, 156, 132, 22, 116, 14,
                            138, 58, 155, 206, 90, 147, 127, 163,
                            119, 66, 142, 188, 149, 35, 56, 48
                        ]) } })];
            case 1:
                // await Fluence.connect(nodes[0].multiaddr)
                _d.sent();
                _b = (_a = console).log;
                _c = ['connected '];
                return [4 /*yield*/, Fluence.getClient().getPeerId()];
            case 2:
                _b.apply(_a, _c.concat([(_d.sent())]));
                list = [];
                registerHypercoreService({
                    appendBatch: function () {
                        return [];
                    },
                    get: function () {
                        return [];
                    }
                });
                wait = function (ms) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (res) { return setTimeout(res, ms); })];
                }); }); };
                return [4 /*yield*/, appendBatch('12D3KooWQ7P4MB1MStsUDBFn6XNv8SpteBC4V5YvW1qYr4PJ1ryw', [{ content: 'wonder' }])
                    // const res = await forward('12D3KooWCPsKasCfucdgLeEqsBGxaagt3ZzLhm2xjHQZKBA45Ufg',nodes[0].multiaddr, {wonderOS: 0,
                    //     message: 'post',
                    //     author: 'props.name',
                    //     date: new Date(Date.now()).toLocaleTimeString()
                    //   })
                    //   console.log(res)
                ];
            case 3:
                res = _d.sent();
                return [2 /*return*/];
        }
    });
}); })();
