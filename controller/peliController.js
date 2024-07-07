import Peli from "../model/peliModel.js"

export const create = async(req, res) => {
    try {
        const peliData = new Peli(req.body);
        const { title } = peliData;
        const peliExist = await Peli.findOne({ title });
        if(peliExist){
            return res.status(400).json( { message: "La pelicula ya existe!"} );
        }
        const savedPeli = await peliData.save();
        res.status(200).json(savedPeli);
    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 

export const fetch = async(req, res) => {
    try {
        const peli = await Peli.find();
        if(peli.length === 0) {
          return res.status(404).json({ error: "Pelicula no encontrada!" });
        }
        res.status(200).json({ data: peli});
    } catch(error){
        res.status(500).json({ error: "Internal Server error." });
    }
}