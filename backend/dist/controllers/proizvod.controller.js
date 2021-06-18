"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProizvodController = void 0;
const proizvod_1 = __importDefault(require("../models/proizvod"));
class ProizvodController {
    constructor() {
        this.dohvatiSveProizvode = (req, res) => {
            proizvod_1.default.find({}, (err, proizvodi) => {
                if (err)
                    console.log(err);
                else
                    res.json(proizvodi);
            });
        };
        this.azurirajStanje = (req, res) => {
            let naziv = req.body.naziv;
            let kolicina = req.body.kolicina * 1000;
            proizvod_1.default.collection.updateOne({ 'naziv': naziv }, { $inc: { 'stanje_g': kolicina } });
            res.json({ poruka: 'ok' });
        };
        this.dodaj = (req, res) => {
            let proizvod = req.body.proizvod;
            let kolicina = req.body.kolicina;
            proizvod_1.default.findOne({ 'naziv': proizvod.naziv }, (err, pro) => {
                if (err)
                    console.log(err);
                else
                    res.json(pro);
            });
        };
        this.kupi = (req, res) => {
            let naziv = req.body.naziv;
            let kolicina = req.body.kolicina;
            proizvod_1.default.collection.updateOne({ 'naziv': naziv }, { $inc: { 'stanje_g': -kolicina } });
            res.json({ poruka: 'ok' });
        };
    }
}
exports.ProizvodController = ProizvodController;
//# sourceMappingURL=proizvod.controller.js.map