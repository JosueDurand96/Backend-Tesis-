import Parent from "../model/parentModel.js"

export const create = async(req, res) => {
    try {
        
        const parentData = new Parent(req.body);
        const { number_document } = parentData;
        const parentExist = await Parent.findOne({ number_document });
        if(parentExist){
            return res.status(400).json( { message: "El usuario ya existe."} );
        }
        const savedParent = await parentData.save();
        res.status(200).json(savedParent);
    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 