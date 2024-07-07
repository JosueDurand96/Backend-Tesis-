import Pay from "../model/paymentModel.js"

export const create = async(req, res) => {
    try {
        const peliData = new Pay(req.body);
        const { name } = peliData;
        const peliExist = await Pay.findOne({ name });
        if(peliExist){
            const savedPeli = await peliData.save();
            res.status(200).json(savedPeli);
        } else {
            return res.status(400).json( { message: "La pelicula ya existe!"} );
        }
        
    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 

export const fetch = async(req, res) => {
    try {
        const pay = await Pay.find();
        if(pay.length === 0) {
          return res.status(404).json({ error: "Pago no encontrada!" });
        }
        res.status(200).json({ data: pay});
    } catch(error){
        res.status(500).json({ error: "Internal Server error." });
    }
}