import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Proizvod = new Schema(
    {
        naziv: {
            type: String
        },
        cena_kg: {
            type: Number
        },
        stanje_g: {
            type: Number
        }
    }
)

export default mongoose.model('Proizvod', Proizvod, 'proizvodi');