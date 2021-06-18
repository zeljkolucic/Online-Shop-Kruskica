"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.prijava = (req, res) => {
            let korIme = req.body.korIme;
            let lozinka = req.body.lozinka;
            let tip = req.body.tip;
            korisnik_1.default.findOne({ 'korIme': korIme, 'lozinka': lozinka, 'tip': tip }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map