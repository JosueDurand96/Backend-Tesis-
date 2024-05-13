import DeliveryPerson from "../model/deliveryPersonModel.js"

export const create = async(req, res) => {
    try {
        
        const deliveryPersonData = new DeliveryPerson(req.body);
        const { number_document } = deliveryPersonData;
        const deliveryPersonExist = await DeliveryPerson.findOne({ number_document });
        if(deliveryPersonExist){
            return res.status(400).json( { message: "El usuario ya existe."} );
        }
        const savedParent = await deliveryPersonData.save();
        res.status(200).json(savedParent);
    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 