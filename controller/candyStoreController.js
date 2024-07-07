import Candy from "../model/candyStoreModel.js"

export const create = async(req, res) => {
    try {
        const candyData = new Candy(req.body);
        const { title } = candyData;
        const candyExist = await Candy.findOne({ title });
        if(candyExist){
            return res.status(400).json( { message: "El producto ya existe!"} );
        }
        const savedCandy = await candyData.save();
        res.status(200).json(savedCandy);
    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
}

export const fetch = async(req, res) => {
    try {
        const candy = await Candy.find();
        if(candy.length === 0) {
          return res.status(404).json({ error: "El producto no ha sido encontrado!" });
        }
        res.status(200).json({ data: candy});
    } catch(error){
        res.status(500).json({ error: "Internal Server error." });
    }
}