import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';

const korisnikRouter = express.Router();

korisnikRouter.route('/prijava').post(
    (req, res) => new KorisnikController().prijava(req, res)
)

export default korisnikRouter;