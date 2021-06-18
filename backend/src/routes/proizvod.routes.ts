import express from 'express';
import { ProizvodController } from '../controllers/proizvod.controller';

const proizvodRouter = express.Router();

proizvodRouter.route('/dohvatiSveProizvode').get(
    (req, res) => new ProizvodController().dohvatiSveProizvode(req, res)
)

proizvodRouter.route('/azurirajStanje').post(
    (req, res) => new ProizvodController().azurirajStanje(req, res)
)

proizvodRouter.route('/dodaj').post(
    (req, res) => new ProizvodController().dodaj(req, res)
)

proizvodRouter.route('/kupi').post(
    (req, res) => new ProizvodController().kupi(req, res)
)

export default proizvodRouter;