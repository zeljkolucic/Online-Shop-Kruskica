import express, { json } from 'express';
import Korisnik from '../models/korisnik';

export class KorisnikController {

    prijava = (req: express.Request, res: express.Response) => {
        let korIme = req.body.korIme;
        let lozinka = req.body.lozinka;
        let tip = req.body.tip;
        Korisnik.findOne({'korIme': korIme, 'lozinka': lozinka, 'tip': tip}, (err, korisnik) => {
            if(err) console.log(err);
            else res.json(korisnik);
        })
    }

}