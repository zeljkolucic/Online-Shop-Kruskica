import express from 'express';
import Proizvod from '../models/proizvod';

export class ProizvodController {

    dohvatiSveProizvode = (req: express.Request, res: express.Response) => {
        Proizvod.find({}, (err, proizvodi) => {
            if(err) console.log(err);
            else res.json(proizvodi);
        })
    }

    azurirajStanje = (req: express.Request, res: express.Response) => {
        let naziv = req.body.naziv;
        let kolicina = req.body.kolicina * 1000;
        Proizvod.collection.updateOne({'naziv': naziv}, {$inc: {'stanje_g': kolicina}});
        res.json({poruka:'ok'});
    }

    dodaj = (req: express.Request, res: express.Response) => {
        let proizvod = req.body.proizvod;
        let kolicina = req.body.kolicina;
        Proizvod.findOne({'naziv': proizvod.naziv}, (err, pro) => {
            if(err) console.log(err);
            else res.json(pro);
        })
    }

    kupi = (req: express.Request, res: express.Response) => {
        let naziv = req.body.naziv;
        let kolicina = req.body.kolicina;
        Proizvod.collection.updateOne({'naziv': naziv}, {$inc: {'stanje_g': -kolicina}});
        res.json({poruka: 'ok'});
    }

}