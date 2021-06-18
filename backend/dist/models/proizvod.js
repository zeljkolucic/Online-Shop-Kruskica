"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Proizvod = new Schema({
    naziv: {
        type: String
    },
    cena_kg: {
        type: Number
    },
    stanje_g: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Proizvod', Proizvod, 'proizvodi');
//# sourceMappingURL=proizvod.js.map